# Level 5
# url: http://www.pythonchallenge.com/pc/def/peak.html
# banner.p file
import pickle

lists = pickle.load(open("banner.p", "rb"))


def repeat_to_length(string_to_expand, length):
    return (string_to_expand * (int(length / len(string_to_expand)) + 1))[:length]


result = ''
for list in lists:
    result += '\n'
    for tup in list:
        result += (tup[0] * tup[1])

print(result)
