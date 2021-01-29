// Q1
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

// Answer
var output = {};

for (const [key, value] of Object.entries(obj1)) {
  console.log(`${key}, ${value}`);
  if (value < 3) {
    output[key] = value;
  }
}

console.log(output);
