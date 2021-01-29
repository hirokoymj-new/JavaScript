const array = [2, 5, 6, 9];

const max1 = Math.max.apply(null, array); //9
const max2 = Math.max(...array);

array.sort((a, b) => (a < b ? -1 : 1));
const array_copy = array;
const max3 = array_copy.pop();

const max4 = [2, 5, 6, 9].reduce((acc, currentValue) => {
  return Math.max(acc, currentValue);
});

console.log(max1);
console.log(max2);
console.log(max3);
console.log(max4);
