
import os
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_API_KEY")

stripe.ShippingRate.modify(
  "shr_1ObMDrBC2mcEPes8mFs1vb0z",
  fixed_amount = { 
    "currency_options": {
      "usd": { "amount": 300, "tax_behavior": "exclusive" }
  } }
)