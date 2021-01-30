
function makeDigit(number, nth){
	var tmp = 0;
	tmp = Math.pow(10, nth);
	tmp = tmp + Math.abs(number);
	var array = tmp.toString().split('');
	array.shift();
	var str = array.join('');

	return str;
}

console.log(makeDigit(-43,5));　//00043


function makeDigit2(number, nth){

	number = number * -1;
	var sum = 1;
	for(var i=0; i<nth; i++){
		sum = sum * 10;
	}
	var output = sum + number;
	var array = output.toString().split('');
	array.shift();
	var str = array.join('');
	return str;

}

console.log(makeDigit2(-43, 6));