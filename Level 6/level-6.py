# Level 6
# url: http:#www.pythonchallenge.com/pc/def/channel.html
# file: http:#www.pythonchallenge.com/pc/def/channel.zip
import re
import math

basePath = './level-6-texts/'

def getFile(param):
    f = open(basePath + str(param) + '.txt', 'r')
    return f.read()

def getNextFile(fileName):
    file = getFile(fileName)
    if (not re.search('\d+', file).group(0)):
        print('Not a next page', file)
        return file
    else:
        print(file)
        nextFile = re.search('\d+', file).group(0)
        return nextFile

def getSolution():
  nextFile = 90052
  while (not math.isnan(float(nextFile))):
    nextFile = getNextFile(nextFile)

getSolution()