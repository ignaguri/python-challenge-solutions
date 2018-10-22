// Level 4
// url: http://www.pythonchallenge.com/pc/def/linkedlist.php

const axios = require('axios');

const baseUrl = 'http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=';
const getUrl = param => baseUrl + param;

const firstPage = getUrl(12345);

const getNextPage = async page => {
  const response = await axios.get(getUrl(page));
  const data = response.data;
  if (data.search(/\d/) < 0) {
    console.log('Not a next page');
    return data;
  } else {
    console.log(data);
    const startIndex = data.search(/\d/);
    const nextPage = data.slice(startIndex);
    return nextPage;
  }
};

const getSolution = async () => {
  let nextPage = 63579;
  while (!isNaN(nextPage)) {
    nextPage = await getNextPage(nextPage);
  }
};

getSolution();

// solution is getUrl(66831)
