import json
import frontmatter
from pathlib import Path

products = {}
products_md_folder = Path("../hugo/content/products")
for res in products_md_folder.glob("*"):
  if res.is_dir(): 
    product_md = res / "index.md"
    with open(product_md) as fin:
      metadata, content = frontmatter.parse(fin.read())
      products[metadata['sku']] = {
        **metadata,
        "content": content
      }
# write json object
with open("hugo_products.json", "wb") as fout:
  encoded_data = json.dumps(products, indent=2).encode('utf-8')
  fout.write(encoded_data)