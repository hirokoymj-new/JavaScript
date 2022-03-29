const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
// expected result =[1,2,3,5,6,9,29]

const merged = a1.concat(a2);
const result = merged
  .reduce((acc, currentValue) => {
    const found = acc.find((value) => value === currentValue);
    if (!found) acc.push(currentValue);
    return acc;
  }, [])
  .sort((a, b) => (a < b ? -1 : 1));

console.log(result);
//[  1, 2, 3, 5,  6, 9, 29]
