const array = ["red", "yellow", "red", "blue", "blue", "red"];
// convert
// [
//   {color: red, count: 3},
//   {color: yellow, count: 1},
//   {color: blue, count: 2}
// ]

const result = array.reduce((acc, currentValue) => {
  const existObj = acc.find((obj) => obj.color === currentValue);
  if (existObj) {
    existObj.count++;
  } else {
    acc.push({
      color: currentValue,
      count: 1,
    });
  }
  return acc;
}, []);

console.log(result);
