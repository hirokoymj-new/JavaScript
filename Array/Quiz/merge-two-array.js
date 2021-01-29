/*
[2,5,6,9], [1,2,3,29]

Method1: Use concat() function.
Method2: Create new function to merge two array without duplicate value.
Method3: Use reduce function.
*/

var a1 = [2,5,6,9];
var a2 = [1,2,3,29];

// =======================
// Method 1: using concatrate function.
// =======================
var result = a1.concat(a2);
console.log(result); 		//[ 2, 5, 6, 9, 1, 2, 3, 29 ]


// =======================
// Method 2: creating new function to make new array without duplicate value.
// =======================
function mergeTwoArray(array1, array2){
	var output = array2;

	array1.forEach(function(value){
		if(output.indexOf(value) == -1 ){
			output.push(value);
		}
	});

	return output;
}
console.log(mergeTwoArray(a1, a2)); //[ 1, 2, 3, 29, 5, 6, 9 ]


// =======================
// Method 3: using reduce function
// =======================


var array3 = a1.concat(a2);
var output = array3.reduce(function(prev, current){
	if(prev.indexOf(current) == -1 ){
		prev.push(current);
	}
	return prev;
}, []);

console.log(output.sort()); //[ 1, 2, 29, 3, 5, 6, 9 ]



// References:
// [MDN - Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
