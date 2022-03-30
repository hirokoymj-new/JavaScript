const array1 = ["Open"];
const masterArray = ["Open", "Confirmed", "False Positive", "Fixed"];

// const result2 = array2.filter((d) => !array1.includes(d));
// console.log(result2);

// const result3 = result2.map((d) => {
//   return {
//     value: d,
//     label: d,
//   };
// });

const output = masterArray.reduce((acc, currentVal) => {
  const found = array1.find((d) => d === currentVal);
  const isFound = Boolean(found);
  if (!isFound) {
    acc.push(currentVal);
  }
  return acc;
}, []);

console.log(output);

// const createDropdownBydifference = (array, masterArray) => {
//   const diffArray = masterArray.filter((d) => !array.includes(d));
//   const output = diffArray.map((d) => {
//     return {
//       value: d,
//       label: d,
//     };
//   });
//   return output;
// };

// const final = createDropdownBydifference(array1, array2);
// console.log(final);

// include
