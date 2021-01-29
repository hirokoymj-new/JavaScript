# Quiz - Array Iterator

**Q1: Get an array in which desciption has 'Rent'**
```js
const data = [
  { description: 'Rent', amount: 100, createdAt: 1000 },
  { description: 'Coffee', amount: 300, createdAt: -1000 },
  { description: 'Small Coffee', amount: 300, createdAt: -1000 },
];
```

**Q1: Answer**
```js
const result = data.filter((d)=> d.description.toLowerCase().indexOf('rent') !== -1);
console.log(result);
//[ { description: 'Rent', amount: 100, createdAt: 1000 } ]
```
<hr />


**Q2: Create array in which has skill has 'javascript'**.
```js
var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
```

**Q2: Answer**
```js
const output2 = employees.filter(employee => employee.skill === 'javascript');
/*
[ { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'javascript', user: 'Sue' } ]
*/ 
```
<hr />

**Q3: Find `color=green` in myArray and print the number of index.**
```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];
```

**Q3:Answer**

```js
var myArray = [
	{'color':'red', 'name': 'redName'},
	{'color':'blue', 'name': 'blueName'},
	{'color':'green', 'name': 'greenName'},
	{'color':'yellow', 'name': 'yellowName'}
];

let greenIndex = myArray.map(obj => obj.color).indexOf('green');
console.log(greenIndex); //2
```


**Q4: Create pagination**
```js
// Create Pagination
const data = [1,2,3,4,5,6,7,8,9,10];
let pageSize = 3;
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]
// [ 10 ]
```

**Q4: Answer**
POINT

- Use **array.slice()** because slice() does NOT modify the original array! 
```js
// const page1 = data.slice(0, 3);
// const page2 = data.slice(3, 6);
// const page3 = data.slice(6, 9);
// const page4 = data.slice(9, 12);
```


- The quotient for division returns float. So to be interger, it must use Math.floor();
```js
1/2   // returns 0.5 in JavaScript
```
 

```js
const data = [1,2,3,4,5,6,7,8,9,10];
let pageSize = 3;
let max = Math.ceil(data.length/3);

for(let i=0; i<max; i++){
  let begin = i*pageSize;
  let end = begin + pageSize;
  //console.log(`${begin}, ${end}`);
  console.log(data.slice(begin, end))
}
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]
// [ 10 ]
```
<hr />



**Q5: How to check if array is empty**
```js
const data = [];
```
**Q5: How to check if array is empty**
```js
data.length === 0
```

**Q6: How to check if Object is empty**
```js
const data = {}
```
**Q6: How to check if Object is empty**
```js
Object.keys(obj).length === 0
```


**Q7:**
- Grouping object
  
```js
var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
// RESULT
// const employees2 = [
//   {skill: 'css', count: 2},
//   {skill: 'javascript', count: 3},
//   {skill: 'html', count: 1},
// ]
```

**Q7:Answer**
```js
const result = employees.reduce((acc, currentValue)=>{
  let existing = acc.map(d => d.skill).indexOf(currentValue.skill);
  if(existing === -1){ //NEW
    const obj = {}
    obj.skill = currentValue.skill;
    obj.count = 1;
    acc.push(obj);
  }else{
    acc[existing].count++;
  }
  return acc;
}, []);

console.log(result);
// [ { skill: 'css', count: 2 },
//   { skill: 'javascript', count: 3 },
//   { skill: 'html', count: 1 } ]
```

