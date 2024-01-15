import json
import frontmatter
from pathlib import Path
from io import BytesIO

with open(Path("./stripe_products.json"), "r") as fin:
  stripe_products = json.load(fin)

for product_sku, product in stripe_products.items():  
  hugo_product_md_file = Path(f"../hugo/content/products/{product_sku}/index.md")
  hugo_product = frontmatter.load(hugo_product_md_file)
  hugo_product.metadata["stripe_product_id"] = product["id"]
  hugo_product.metadata['stripe_price_id'] = product["default_price"]
  hugo_product.metadata["stripe_taxcode_id"] = product["tax_code"]
  f = BytesIO()
  frontmatter.dump(hugo_product, f)
  with open(hugo_product_md_file, "wb") as fout:
    fout.write(f.getbuffer())