import os
import json
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")

def load_products(starting_after = None, products = {}, limit = 100):
  
  # get stripe products using stripe api
  prouducts_from_stripe = stripe.Product.list(limit = limit, starting_after = starting_after)
  
  # loop through products
  for product in prouducts_from_stripe.data:
    # add price from stripe defualt price
    product["price"] = stripe.Price.retrieve(product["default_price"])["unit_amount"] / 100
    # add sku to metadata
    products[product.metadata.sku] = product

  # if there are other products to load
  if prouducts_from_stripe.has_more:
    # go recursive
    return load_products(prouducts_from_stripe.data[-1], products, limit)
  
  # return json products
  return  products

# call fn
products = load_products(None, {}, 5)

# write json object
with open("stripe_products.json", "wb") as fout:
  encoded_data = json.dumps(products, indent=2).encode('utf-8')
  fout.write(encoded_data)