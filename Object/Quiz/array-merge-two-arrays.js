const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];

const output = a1.concat(a2);
console.log(output);

// let output2 = [];

// output2 = a1;
// a2.forEach((value) => {
//   output2.push(value);
// });
// console.log(output2);

// Without using concat()
const result = [];
const array = [a1, a2];
array.forEach((obj) => {
  obj.forEach((value) => {
    result.push(value);
  });
});

console.log(result);
