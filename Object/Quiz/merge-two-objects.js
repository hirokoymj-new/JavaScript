const obj1 = { foo: true, count: 1 };
const obj2 = { bar: false };

const mergeTwoObjects = (a, b) => {
  var output = {};
  [a, b].map((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      output[key] = value;
    }
  });
  return output;
};
const result = mergeTwoObjects(obj1, obj2);
console.log(result);
