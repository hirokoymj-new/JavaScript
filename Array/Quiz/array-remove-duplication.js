const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
// expected result =[1,2,3,5,6,9,29]

const merged = a1.concat(a2);
const result = merged.reduce((acc, currentValue) => {
  if (acc.indexOf(currentValue) === -1) {
    acc.push(currentValue);
  }
  return acc;
}, []);

console.log(result);
// // [2, 5, 6, 9, 1, 3, 29 ]

result.sort((a, b) => (a < b ? -1 : 1));
console.log(result);
// [
//   1, 2,  3, 5,
//   6, 9, 29
// ]

// Point reducer
// Point indexOf

// Function
const mergedArray = (array1, array2) => {
  const merged = array1.concat(array2);
  const result = merged
    .reduce((acc, currentValue) => {
      if (acc.indexOf(currentValue) === -1) {
        acc.push(currentValue);
      }
      return acc;
    }, [])
    .sort((a, b) => (a < b ? -1 : 1));
  return result;
};

const result = mergedArray(a1, a2);
console.log(result);
