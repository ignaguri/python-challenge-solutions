# Level 7
# url: http://www.pythonchallenge.com/pc/def/oxygen.html
from PIL import Image

im = Image.open('oxygen.png')

box = (0, 43, 608, 42+9)
barcode = im.crop(box).convert('L')

# barcode.show()
pixels = []
for i in range(0, barcode.size[0], 7):
    pixel = barcode.getpixel((i, 7))
    pixels.append(chr(pixel))

# print(''.join(pixels))
nextLevel = [105, 110, 116, 101, 103, 114, 105, 116, 121]

print(''.join(map(chr, nextLevel)))
