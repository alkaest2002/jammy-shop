import json
import frontmatter
from io import BytesIO
from pathlib import Path

with open("./stripe_products.json", "r") as fin:
  stripe_prodcuts = json.load(fin)

for product_sku, product in stripe_prodcuts.items():
  hugo_md_file = Path("../hugo/content/products") / product_sku / "index.md"
  
  with open(hugo_md_file, "r") as fin:
    hugo_md = frontmatter.load(fin)
    hugo_md.metadata["stripe_price_id"] = product["default_price"]
    hugo_md.metadata["stripe_product_id"] = product["id"]
    buffer = BytesIO()
    frontmatter.dump(hugo_md, buffer)
  
  with open(hugo_md_file, "wb") as fout:
    fout.write(buffer.getbuffer())
