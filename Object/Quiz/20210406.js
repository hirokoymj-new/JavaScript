const objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

// output 2
// obj.x == obj.y => 2 items

let result = 0;
objects.map((obj) => {
  if (obj.x === obj.y) {
    result++;
  }
});
console.log(result);

const output = objects.reduce((acc, currentValue) => {
  const { x, y } = currentValue;
  if (x === y) {
    acc++;
  }
  return acc;
}, 0);

console.log(output);
