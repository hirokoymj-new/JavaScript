// There is no max function in Array so we will use Math.max function to get maximum value in Array.
// apply method will be used to invoke Math.max function.
// fun.apply(thisArg, [argsArray])
//
var array = [2,5,6,9];

var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);

console.log(max); //9
console.log(min); //2


/*
thisArg
The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.
*/