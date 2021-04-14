const obj1 = { foo: true, count: 1 };
const obj2 = { bar: false };

//{ foo: true, count: 1, bar: false }

const obj = {
  ...obj1,
  ...obj2,
};

console.log(obj);
