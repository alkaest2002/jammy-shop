import os
import stripe
from dotenv import load_dotenv
import json

load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")

TAX_CODE = "txr_1OYnNMBC2mcEPes8YayU3tdf"

with open("./hugo_products.json", "r") as fin:
  hugo_products = json.load(fin)

for key, hugo_product in hugo_products.items():
  stripe_product =stripe.Product.create(
    name=hugo_product['title'],
    tax_code=TAX_CODE,
    default_price_data = { "currency": "USD", "unit_amount_decimal": hugo_product["price"]*100},
     metadata= { "sku": hugo_product["sku"]},
  )
  hugo_products[hugo_product["sku"]]["stripe_price_id"] = stripe_product["default_price"]
  hugo_products[hugo_product["sku"]]["stripe_product_id"] = stripe_product["id"]
  hugo_products[hugo_product["sku"]]["stripe_taxcode_id"] = TAX_CODE

with open("./hugo_products.json", "w") as fout:
  fout.write(json.dumps(hugo_products))