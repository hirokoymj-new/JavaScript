const myArray = [
  { color: "red", name: "redName" },
  { color: "blue", name: "blueName" },
  { color: "green", name: "greenName" },
  { color: "yellow", name: "yellowName" },
];

// Create new array [ 'red', 'blue', 'green', 'yellow' ]

const output = myArray.reduce((acc, currentValue) => {
  for ([key, value] of Object.entries(currentValue)) {
    if (key === "color") {
      acc.push(value);
    }
  }
  return acc;
}, []);
console.log(output);
// [ 'red', 'blue', 'green', 'yellow' ]

const output2 = myArray.map((value) => value.color);
console.log(output2);
//[ 'red', 'blue', 'green', 'yellow' ]
