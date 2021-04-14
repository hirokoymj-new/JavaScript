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

// output []
// map
// condition name=value is existed or not

const output = [];

array.map((obj) => {
  const { name, value } = obj;
  const newVal = typeof value === "string" ? [value] : value;

  const found = output.find((d) => d.name === name);

  if (found) {
    found.value = [...found.value, ...newVal];
  } else {
    const temp = {
      name,
      value: newVal,
    };
    console.log(temp);
    output.push(temp);
  }
});

console.log(output);
