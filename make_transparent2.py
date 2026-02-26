from PIL import Image

def remove_dark_background(file_path):
    img = Image.open(file_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    # Replace all extremely dark pixels (which were supposed to be the solid background) with transparent.
    for item in data:
        # Check if R, G, B are all very dark (e.g. < 40)
        if item[0] < 45 and item[1] < 45 and item[2] < 45:
            new_data.append((0, 0, 0, 0)) # transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(file_path, "PNG")
    print(f"Cleaned {file_path}")

for f in ["freddy.png", "bonnie.png", "chika.png", "foxy.png"]:
    try:
        remove_dark_background(f"public/assets/sprites/{f}")
    except Exception as e:
        print(f"Failed on {f}: {e}")
