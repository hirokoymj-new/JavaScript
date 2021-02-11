function getRandomArbitrary(min, max) {
  //return Math.random() * (max - min) + min;
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomArbitrary(5,8));