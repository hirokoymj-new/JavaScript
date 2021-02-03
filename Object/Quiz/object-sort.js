const unordered = {
  b: "foo",
  c: "bar",
  a: "baz",
};

const keyArray = Object.keys(unordered).sort((a, b) => (a < b ? -1 : 1));
console.log(keyArray);

let output = {};
keyArray.forEach((key) => {
  output[key] = unordered[key];
});

console.log(output);

const newKeys = Object.keys(unordered).sort();
const result = newKeys.reduce((acc, key) => {
  acc[key] = unordered[key];
  return acc;
}, {});

console.log(result);
