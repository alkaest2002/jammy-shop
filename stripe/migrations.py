import json
from pathlib import Path

hugo_products_json_file = Path("./hugo_products.json")
with open(hugo_products_json_file, "r") as fin:
  products = json.load(fin)

print(products)