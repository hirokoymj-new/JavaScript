var array = [3,5,2];

var sum = array.reduce(function(prev, current){
	return prev + current;
}, 0);

console.log(sum); //10