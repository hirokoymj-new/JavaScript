var info = 
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x-y;
    });
}

console.log(sortByKey(info, 'count'));
// Result
/*
[
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
];
*/