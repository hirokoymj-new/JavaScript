// https://www.nishishi.com/javascript-tips/random-number.html

//Q1: Generate random number 0-99
Math.floor(Math.random() * 100); //0-99

// Q2: Generate random number 0-50

// const result2 = Math.floor(Math.random() * 51);
// console.log(result2);

// Q3: Generate random number 30-90
Math.floor(Math.random() * 91); //0-90
Math.floor(30 + Math.random() * 91); //30-120
console.log(Math.floor(30 + Math.random() * 61)); //30-90

// Q6: Generate random number 1-12
Math.floor(Math.random() * 13); //0-12
Math.floor(1 + Math.random() * 13); //0-13
console.log(Math.floor(1 + Math.random() * 12)); //0-13
