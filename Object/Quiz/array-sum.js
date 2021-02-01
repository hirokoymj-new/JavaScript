const array = [3, 5, 2];
//10

//new output value
// reduce

const sum = array.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);

console.log(sum);
