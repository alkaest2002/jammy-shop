import os
import stripe
from dotenv import load_dotenv
import json

# load environmen vars
load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")

TAX_CODE = "txcd_99999999"

# read hugo products from json
with open("./hugo_products.json", "r") as fin:
  hugo_products = json.load(fin)

# loop through products
for hugo_product_sku, hugo_product in hugo_products.items():
  # create product
  stripe_product = stripe.Product.create(
    name = hugo_product['title'],
    tax_code = TAX_CODE,
    default_price_data = { "currency": "USD", "unit_amount_decimal": hugo_product["price"]*100},
     metadata= { "sku": hugo_product_sku },
    url = f"https://demo-shop.xyz/products/{hugo_product_sku}/"
  )