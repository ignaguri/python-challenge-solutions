# Level 11
# url: http://www.pythonchallenge.com/pc/return/5808.html
# file: cave.jpg
from PIL import Image

im = Image.open('cave.jpg')

original = list(im.getdata())

img = Image.new('RGB', (640, 480), 'black')
pixels = img.load()

(width, height) = img.size
for i in range(width):    # for every col:
    if (i % 2 == 0):
        for j in range(height):    # For every row
            if (j % 2 == 0):
                index = i + j * width
                pixels[i, j] = original[index]


img.save('solution.png')
