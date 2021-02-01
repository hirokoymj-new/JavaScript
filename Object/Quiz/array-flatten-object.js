const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
//{'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}

// new output - object
// loop  reduce
// condition - key exists or not

const output = names.reduce((acc, currentValue) => {
  const found = acc.hasOwnProperty(currentValue);
  if (found) {
    acc[currentValue]++;
  } else {
    acc[currentValue] = 1;
  }

  return acc;
}, {});

console.log(output);
