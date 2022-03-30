const array1 = ["Open"];
const masterArray = ["Open", "Confirmed", "False Positive", "Fixed"];
// find different items - ["Confirmed", "False Positive", "Fixed"]
// find matched items. - ["Open"]

const output1 = masterArray.reduce((acc, currentVal) => {
  const found = array1.find((d) => d === currentVal);
  const isFound = Boolean(found);
  if (!isFound) {
    acc.push(currentVal);
  }
  return acc;
}, []);

console.log("different items: ", output1);

const output2 = masterArray.reduce((acc, currentVal) => {
  const found = array1.find((d) => d === currentVal);
  const isFound = Boolean(found);
  if (isFound) {
    acc.push(currentVal);
  }
  return acc;
}, []);
console.log("Matched items: ", output2);

// different items:  [ 'Confirmed', 'False Positive', 'Fixed' ]
// Matched items:  [ 'Open' ]
