
import os
import json
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")


# open stripe product json
with open("./stripe_products.json", "r") as fin:
  stripe_prodcuts = json.load(fin)


for product_sku, product in stripe_prodcuts.items():
  stripe.Product.modify(
    product["id"],
    tax_code="txr_1ObMsPIq1JpnhegE62sSe7s5",
  )