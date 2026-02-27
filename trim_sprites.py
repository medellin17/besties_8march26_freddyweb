from PIL import Image

def trim_transparency(file_path):
    print(f"Trimming {file_path}")
    img = Image.open(file_path)
    
    # Get the bounding box of non-transparent areas
    bbox = img.getbbox()
    if bbox:
        # Crop to the bounding box
        img = img.crop(bbox)
        img.save(file_path, "PNG")
        print(f"Trimmed to {img.width}x{img.height}")
    else:
        print(f"No content found in {file_path}")

for f in ["freddy.png", "bonnie.png", "chika.png", "foxy.png"]:
    try:
        trim_transparency(f"public/assets/sprites/{f}")
    except Exception as e:
        print(f"Failed on {f}: {e}")
