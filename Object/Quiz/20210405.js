const array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
  { name: "foo2", value: "val5" },
  { name: "foo3", value: ["val6", "valu7"] },
];

// [
//   { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },
//   { name: 'foo2', value: [ 'val4', 'val5' ] },
//   { name: 'foo3', value: [ 'val6', 'valu7' ] }
// ]

// const output = array.reduce((acc, currentValue) => {
//   const found = acc.find((obj) => obj.name === currentValue.name);
//   const matched = acc.find((obj) => obj.name === currentValue.name);

//   if (found) {
//     if (typeof value === "string") {
//       // found.value.push(value);
//       found.value.push(currentValue.value);
//     } else {
//       found.value = currentValue.value.concat(found.value);
//     }
//     found.value = typeof value === "string";
//   } else {
//     currentValue.value = typeof value === "string" && [value];
//     acc.push(currentValue);
//   }
//   return acc;
// }, []);

console.log(output);
