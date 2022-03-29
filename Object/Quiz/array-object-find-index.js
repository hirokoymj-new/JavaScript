// 9.
const myArray = [
  { color: "red", name: "redName" },
  { color: "blue", name: "blueName" },
  { color: "green", name: "greenName" },
  { color: "yellow", name: "yellowName" },
];

// Find an index number of "color: blue" in myArray.
const blueIndex2 = myArray
  .map((value) => value.color) //[ 'red', 'blue', 'green', 'yellow' ]
  .indexOf("blue");
console.log(blueIndex2);

// ex. 2
const blueIndex3 = myArray.findIndex((value) => value.color === "blue");
console.log(blueIndex3);
