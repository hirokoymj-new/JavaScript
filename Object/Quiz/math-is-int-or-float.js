const result = (isInt = (a) => {
  if (a % 1 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(isInt(1.5)); //false
console.log(isInt(824)); //true
