// Level 10
// url: http://www.pythonchallenge.com/pc/return/bull.html
// file: sequence.txt
// hint: len(a[30]) = ?
// a = [1, 11, 21, 1211, 111221];

function solve(limit) {
  let value = '1';
  for (let i = 0; i < limit; i++) {
    const parts = value.split('');
    // console.log('parts', parts);
    const grouped = parts.reduce((acc, cur, index) => {
      //   console.log('acc', acc, 'cur', cur, 'index', index);
      if (acc.length && acc[acc.length - 1][0] === cur) {
        acc[acc.length - 1].push(cur);
      } else {
        acc.push([cur]);
      }
      return acc;
    }, []);
    arr = grouped.map(a => `${a.length}${a[0]}`);
    // console.log('next value:', arr.join(''));
    value = String(arr.join(''));
  }
  return value;
}

solution = solve(30);
console.log('solution:', solution, solution.length);
