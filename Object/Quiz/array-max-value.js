const array = [2, 9, 6, 5];
//9

const max1 = Math.max(...array);
console.log(max1); //9

const array2 = [2, 9, 6, 5];
array2.sort((a, b) => (a < b ? -1 : 1)); //[ 2, 5, 6, 9 ]
const max2 = array2.pop();
console.log(max2); //9

const array3 = [2, 9, 6, 5];
array3.sort((a, b) => (a < b ? 1 : -1)); //[ 9, 6, 5, 2 ]
const max3 = array3.shift();
console.log(max3); //9

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// The pop() method removes the last element.
// The shift() method removes the first element.
