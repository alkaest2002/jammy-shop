import json
import frontmatter
from io import BytesIO
from pathlib import Path

# open stripe product json
with open("./stripe_products.json", "r") as fin:
  stripe_prodcuts = json.load(fin)

# loop through products
for product_sku, product in stripe_prodcuts.items():

  # build hugo product markdown file
  hugo_md_file = Path("../hugo/content/products") / product_sku / "index.md"
  
  # open hugo product markdown file
  with open(hugo_md_file, "r") as fin:
    # load data from file
    hugo_md = frontmatter.load(fin)
    # update hugo markdown data with stripe data
    hugo_md.metadata["stripe_price_id"] = product["default_price"]
    hugo_md.metadata["stripe_product_id"] = product["id"]
    
    # init buffer
    buffer = BytesIO()

    # dump hugo product to buffer
    frontmatter.dump(hugo_md, buffer)
  
  # save buffer to disk
  with open(hugo_md_file, "wb") as fout:
    fout.write(buffer.getbuffer())
