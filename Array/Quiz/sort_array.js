var numbers = [ 1, 2, 29, 3, 5, 6, 9 ];

numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); //


numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers); //

