// console.log(makeDigit2(-43, 6));

const result = Math.pow(10, 5);
const result2 = Math.abs(-43);
console.log(result);
console.log(result2);
console.log(typeof result);
console.log(result + result2);

console.log("-----");
const result3 = parseInt(result) + parseInt(result2);
console.log(typeof result3);
console.log((result + result2).toString().slice(-5));

const output = (makeDigit = (value, nth) => {
  const createDigit = Math.pow(10, nth);
  const convertAbs = Math.abs(value);
  const result = createDigit + convertAbs;
  const final = result.toString().slice(nth * -1);
  return final;
});
console.log("---MakeDigit---");
console.log(makeDigit(-43, 5));

// function makeDigit(number, nth){
// 	var tmp = 0;
// 	tmp = Math.pow(10, nth);
// 	tmp = tmp + Math.abs(number);
// 	var array = tmp.toString().split('');
// 	array.shift();
// 	var str = array.join('');

// 	return str;
// }

// console.log(makeDigit(-43,5));　//00043

// function makeDigit2(number, nth){

// 	number = number * -1;
// 	var sum = 1;
// 	for(var i=0; i<nth; i++){
// 		sum = sum * 10;
// 	}
// 	var output = sum + number;
// 	var array = output.toString().split('');
// 	array.shift();
// 	var str = array.join('');
// 	return str;

// }

// console.log(makeDigit2(-43, 6));
