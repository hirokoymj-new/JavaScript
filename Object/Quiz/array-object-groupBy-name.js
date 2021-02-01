const array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
  { name: "foo2", value: "val5" },
  { name: "foo3", value: ["val6", "valu7"] },
];

// Result
/*
[
  { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },
  { name: 'foo2', value: [ 'val4', 'val5' ] },
  { name: 'foo3', value: [ 'val6', 'valu7' ] }
]
*/

const output = array.reduce((acc, currentValue) => {
  const matched = acc.find((obj) => obj.name === currentValue.name);

  if (matched) {
    if (typeof currentValue.value === "string") {
      matched.value.push(currentValue.value);
    } else {
      matched.value = currentValue.value.concat(matched.value);
    }
  } else {
    //Not existing
    if (typeof currentValue.value === "string")
      currentValue.value = [currentValue.value];
    acc.push(currentValue);
  }

  return acc;
}, []);

console.log(output);

const final = output.map((obj) => {
  obj.value.sort((a, b) => (a < b ? -1 : 1));
  return obj;
});
console.log(final);

// let obj = { name: "foo1", value: "val1" };
// // for (key in obj) {
// //   if (key === "value") obj.value = [obj[key]];
// // }

//http://stackoverflow.com/questions/33850412/merge-javascript-objects-in-array-with-same-key/33850863
