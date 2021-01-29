var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// Result
/*
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];
*/

function groupByObject(array){
	var output = [];

	array.forEach(function(value){
		var existing = output.filter(function(v){
			return v.skill == value.skill;
		});
		// [] or [{name:"foo1",value:"val1"}]
		
		if(existing.length){ //existing
			var existingIndex = output.indexOf(existing[0]);
//			output[existingIndex].user = output[existingIndex].user.push(value.user);
			output[existingIndex].user.push(value.user);
			output[existingIndex].count = output[existingIndex].user.length;


		}else{ // not existing
			value.user = [value.user];
			value.count = value.user.length;
			output.push(value);
		}
	});
	return output;
}
console.log(groupByObject(employees)); 
/*
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];
*/
