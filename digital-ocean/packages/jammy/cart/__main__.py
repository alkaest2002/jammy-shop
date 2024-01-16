import stripe
import os

stripe.api_key = os.getenv("STRIPE_API_KEY")

def main(args):
  try:
    cart = args.get("cart", "cart is empty")
    checkout_session = stripe.checkout.Session.create(
        line_items=[{ "price": item["stripe_price_id"], "quantity": 1, } for item in cart],
        mode='payment',
        success_url = 'https://demo-shop.xyz//checkout/cancel/',
        cancel_url = "https://demo-shop.xyz//checkout/thank-you/",
        automatic_tax={'enabled': True},
    )
  except Exception as e:
    return { "body": f"<p>{str(e)}</p>" } 

  return {
    "headers": {
      "Access-Control-Expose-Headers": "*",
      "HX-Redirect": checkout_session.url,
    },
  }