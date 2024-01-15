import os
import json
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")

def load_products(starting_after = None, products = {}, limit = 100):
  if starting_after:
    prouducts_from_stripe = stripe.Product.list(limit = limit, starting_after = starting_after)
  else:
    prouducts_from_stripe = stripe.Product.list(limit = limit)
  # loop
  for product in prouducts_from_stripe.data:
    products[product.metadata.sku] =  product
  if prouducts_from_stripe.has_more:
    return load_products(prouducts_from_stripe.data[-1], products, limit)
  return  products

products = load_products(None, {}, 5)

# write json objectxw
with open("stripe_products.json", "wb") as fout:
  encoded_data = json.dumps(products, indent=2).encode('utf-8')
  fout.write(encoded_data)