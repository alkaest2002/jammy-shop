from pathlib import Path
from PIL import Image, ImageOps

products = {}
products_md_folder = Path("../hugo/content/products")
for res in products_md_folder.glob("*"):
  if res.is_dir(): 
    images = res.glob("*.jpg")
    for image in images:
      img_bw = Image.open(image).convert("L")
      img_colorized = ImageOps.colorize(img_bw, black ="red", white ="white")
      img_bw.save(res / f"{image.stem}_bw.jpg")
      img_colorized.save(res / f"{image.stem}_colorized.jpg")