// Level 3
// url: http://www.pythonchallenge.com/pc/def/equality.html
const fs = require('fs');

const text = fs
  .readFileSync('./level-3-text.txt', 'utf8')
  .replace(/\r/g, '')
  .replace(/\n/g, '');

// const test = 'adjaHasBBasaLKLaJAUasdbjasHUjad';

const isUpperCase = letter => letter === letter.toUpperCase();
const isLowerCase = letter => letter === letter.toLowerCase();

const isSolution = letters => {
  return (
    isLowerCase(letters[0]) &&
    isUpperCase(letters[1]) &&
    isUpperCase(letters[2]) &&
    isUpperCase(letters[3]) &&
    isLowerCase(letters[4]) &&
    isUpperCase(letters[5]) &&
    isUpperCase(letters[6]) &&
    isUpperCase(letters[7]) &&
    isLowerCase(letters[8])
  );
};

let solution = [];
for (let i = 0; i < text.length; i++) {
  if (i + 9 <= text.length) {
    const nineLetters = text.slice(i, i + 9);
    if (isSolution(nineLetters)) {
      solution.push(nineLetters[4]);
    }
  }
}

const letters = solution.join('');
console.log(`http://www.pythonchallenge.com/pc/def/${letters}.html`);
