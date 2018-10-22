// Level 6
// url: http://www.pythonchallenge.com/pc/def/channel.html
// file: http://www.pythonchallenge.com/pc/def/channel.zip

const fs = require('fs');

const basePath = './level-6-texts/';
const getFile = param => fs.readFileSync(basePath + param + '.txt', 'utf8');

const getNextFile = file => {
  const data = getFile(file);
  if (data.search(/\d/) < 0) {
    console.log('Not a file number:', data);
    return data;
  } else {
    console.log(data);
    const startIndex = data.search(/\d/);
    const nextFile = data.slice(startIndex);
    return nextFile;
  }
};

const getSolution = async () => {
  let nextFile = 90052;
  while (!isNaN(nextFile)) {
    nextFile = getNextFile(nextFile);
  }
};

getSolution();
