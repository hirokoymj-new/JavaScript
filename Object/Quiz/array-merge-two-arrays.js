const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];

const output = a1.concat(a2);
console.log(output);

// Without using concat()
const output2 = [...a1, ...a2];
console.log(output2);
