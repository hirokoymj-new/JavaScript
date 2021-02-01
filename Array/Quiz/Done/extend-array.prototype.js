Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

var a = [1,2,3];
console.log(a.max());
console.log(a.min());
