var array = [5, 2, 6, 1, 3];

var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);

function findMissingNum(max, min, array){
	var missing = [];
	var num = min;

	while(num <= max){
		if(array.indexOf(num) == -1){
			missing.push(num);
		}
		num++;
	}
	return missing;
}

console.log(findMissingNum(max, min, array)); //[4]