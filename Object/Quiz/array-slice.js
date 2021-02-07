let a = [1, 2, 3, 4, 5];
console.log(a.slice(0, 3)); //[1,2,3]
console.log(a.slice(3)); //[4,5]
console.log(a.slice(1, -1)); //[2,3,4]
console.log(a.slice(-3, -2)); // [3]

// [ 1, 2, 3 ]
// [ 4, 5 ]
// [ 2, 3, 4 ]
// [ 3 ]

// https://stackoverflow.com/questions/41773426/is-array-slice-with-negative-numbers-safe
// https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/rn01re21.html

const str = "12345";

console.log(str.slice(0, 3)); //123
console.log(str.slice(3)); //45
console.log(str.slice(1, -1)); //234
console.log(str.slice(-3, -2)); //3

// 123
// 45
// 234
// 3
