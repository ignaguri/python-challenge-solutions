// Level 1
// url: http://www.pythonchallenge.com/pc/def/map.html

const url = 'http://www.pythonchallenge.com/pc/def/map.html';

const original =
  "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.";

const transform = text =>
  text
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt() + 2))
    .join()
    .replace(/,/g, '')
    .replace(/"/g, ' ')
    .replace(/{/g, 'a')
    .replace(/\|/g, 'b');

const transormedText = transform(original);
console.log('transormedText', transormedText);

const solution = transform('map'); // last part of the url
console.log('solution', solution); // 'ocr'
