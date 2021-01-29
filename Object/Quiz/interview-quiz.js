// Q1
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj3 = {
  a: 1,
  b: 2,
  c: 4,
};

// diff(obj1, obj2); // RETURNS true
// diff(obj1, obj3); // RETURNS false

const diff = (obj1, obj2) => {
  var result = "";
  for ([key, value] of Object.entries(obj1)) {
    result = value === obj2[key] ? true : false;
  }
  return result;
};

console.log(diff(obj1, obj2));
console.log(diff(obj1, obj3));

// // Answer
// const diff = (obj1, obj2) => {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   var result = "";

//   const result = keys.reduce((acc, currentValue) => {
//     keys.map((value) => {
//       if (obj1[currentValue] === obj2[value]) {
//         acc = true;
//       } else {
//         acc = false;
//       }
//     });
//     return acc;
//   }, acc);
//   return result;
// };
