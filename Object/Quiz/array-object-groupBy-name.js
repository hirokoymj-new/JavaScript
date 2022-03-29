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
  const found = acc.find((d) => d.name === currentValue.name);
  const newValue =
    typeof currentValue.value === "string"
      ? [currentValue.value]
      : currentValue.value;

  if (found) {
    found.value = [...found.value, ...newValue];
  } else {
    acc.push({ name: currentValue.name, value: [...newValue] });
  }
  return acc;
}, []);

console.log(output);
