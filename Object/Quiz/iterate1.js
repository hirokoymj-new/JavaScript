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

// Answer
const diff = (obj1, obj2) => {
  var result = "";
  for (const key in obj1) {
    result = obj1[key] === obj2[key] ? true : false;
  }
  return result;
};

const output1 = diff(obj1, obj2);
const output2 = diff(obj1, obj3);

console.log(output1);
console.log(output2);
