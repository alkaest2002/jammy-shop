import stripe
import os
import json

stripe.api_key = os.getenv("STRIPE_API_KEY")

with open("./stripe_products.json", "r") as fin:
  stripe_products = json.load(fin)

def main(args):

  # get cart
  cart = args.get("cart", None)
  
  try:

    # set error message
    ERROR_MESSAGE = "Cart data is not correct"
  
    # check 1
    if not isinstance(cart, list):
      raise Exception(ERROR_MESSAGE)
    
    # check 2
    if not all(
        stripe_products[item["sku"]] 
        and stripe_products[item["sku"]]["default_price"] == item["price_id"]
        and int(item["quantity"]) > 0
        and int(item["quantity"]) < 10 
      for item in cart ):
        raise Exception(ERROR_MESSAGE)
  
    # if checks are passed
    checkout_session = stripe.checkout.Session.create(
        line_items=[
          { "price": item["price_id"], "quantity": item["quantity"] } for item in cart
        ],
        mode="payment",
        shipping_address_collection = { "allowed_countries": ["US",  "IT"] },
        cancel_url = "https://demo-shop.xyz/checkout/cancel/",
        success_url = "https://demo-shop.xyz/checkout/thank-you/",
        automatic_tax = { "enabled": True },
        shipping_options=[
          { "shipping_rate": "shr_1ObMubIq1JpnhegEQCh2YD8w"},
          { "shipping_rate": "shr_1ObMvIIq1JpnhegEWVoxp4GA"},
        ]
    )

    # on success return htmx relevant headers
    return {
      "headers": {
        "Access-Control-Expose-Headers": "*",
        "Session-Url": checkout_session.url,
        "Session-Id": checkout_session.id,
      },
      "body": ""
  }

  # notify error
  except Exception as e:
    return { "body": f'<p class="text-sm italic">{str(e)}</p>' } 