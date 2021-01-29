// 
// Testing filter function
// remove under 10 
// result is [12,44,130]

var a = [12, 5, 8, 130, 44];

var output = a.filter(function(value){
	return (value > 10);
});

console.log(output); //[ 12, 130, 44 ]

// 
// Grouping array of objects with name key.
// 

var array = [
{name:"foo1",value:"val1"},
{name:"foo1",value:["val2","val3"]},
{name:"foo2",value:"val4"}
];

var checking = array.filter(function(v){
	return v.name == "foo2";
});

console.log(checking);
console.log(array.indexOf(checking[0]));

/* 
[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]
*/

function groupByObject(array){
	var output = [];

	array.forEach(function(value){
		var existing = output.filter(function(v){
			return v.name == value.name;
		});
		// [] or [{name:"foo1",value:"val1"}]
		
		if(existing.length){ //existing
			var existingIndex = output.indexOf(existing[0]);
			output[existingIndex].value = output[existingIndex].value.concat(value.value);
		}else{
			if(typeof value.value == 'string'){
				value.value = [value.value];
			}
			output.push(value);
		}
	});
	return output;
}
console.log(groupByObject(array)); //[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]






//http://stackoverflow.com/questions/33850412/merge-javascript-objects-in-array-with-same-key/33850863