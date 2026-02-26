from rembg import remove
from PIL import Image

def process_sprite(file_path):
    print(f"Running rembg on {file_path}")
    input_img = Image.open(file_path)
    output_img = remove(input_img, alpha_matting=False)
    output_img.save(file_path, "PNG")
    print(f"Perfectly cleaned {file_path}")

for f in ["freddy.png", "bonnie.png", "chika.png", "foxy.png"]:
    try:
        process_sprite(f"public/assets/sprites/{f}")
    except Exception as e:
        print(f"Failed on {f}: {e}")
