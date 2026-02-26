import glob
from PIL import Image, ImageDraw

def make_transparent(file_path):
    print(f"Processing {file_path}")
    img = Image.open(file_path).convert("RGBA")
    
    # We will floodfill from multiple edges to be safe
    ImageDraw.floodfill(img, (0, 0), (0, 0, 0, 0), thresh=30)
    ImageDraw.floodfill(img, (img.width - 1, 0), (0, 0, 0, 0), thresh=30)
    ImageDraw.floodfill(img, (0, img.height - 1), (0, 0, 0, 0), thresh=30)
    ImageDraw.floodfill(img, (img.width - 1, img.height - 1), (0, 0, 0, 0), thresh=30)
    
    img.save(file_path, "PNG")
    print(f"Saved {file_path}")

for f in ["freddy.png", "bonnie.png", "chika.png", "foxy.png"]:
    try:
        make_transparent(f"public/assets/sprites/{f}")
    except Exception as e:
        print(f"Failed on {f}: {e}")
