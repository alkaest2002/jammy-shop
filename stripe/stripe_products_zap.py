import os
import json
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")

prouducts_from_stripe = stripe.Product.list()

for stripe_product in prouducts_from_stripe:
  stripe.Product.delete(stripe_product["id"])
