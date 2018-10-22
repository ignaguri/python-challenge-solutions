// Level 2
// url: http://www.pythonchallenge.com/pc/def/ocr.html

const fs = require('fs');

const text = fs.readFileSync('./level-2-text.txt', 'utf8');

const count = text.split('').reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

const solution = Object.keys(count).filter(key => count[key] < 2).join();

console.log(solution);
