import stripe
import os
import re
import yaml
from dotenv import load_dotenv
from pathlib import Path

load_dotenv()
API_KEY = os.getenv("STRIPE_API_KEY")

products_md_folder = Path("../hugo/content/products")

for res in products_md_folder.glob("*"):
  if res.is_dir():
    product_md = res / "index.md"
    with open(product_md, 'r') as fin:
      product = fin.read()
      match = re.search(r"\-\-\-\n?(.*)\n?\-\-\-", product, re.S)
      if match: 
        product_params = match.groups()[0]
        product_data = yaml.safe_load(product_params)
        print(product_data)


