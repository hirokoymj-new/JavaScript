# Quiz - Array.sort

**Q1:**
- Count the items and sorted by large count.

```js
var array = ["red", "yellow", "red", "blue", "blue", "red"];
```

**Q1:Answer**

```js
var array = ["red", "yellow", "red", "blue", "blue", "red"];
// convert 
// [
//   {color: red, count: 3},
//   {color: yellow, count: 1},
//   {color: blue, count: 2}
// ]

const output = array.reduce(function(acc, currentValue){
  //check existing
  let existing = acc.map(obj => obj.color).indexOf(currentValue);
  if(existing > -1){
    acc[existing]['count']++;
  }else{
    const tmp = {}
    tmp.count = 1;
    tmp.color = currentValue;
    acc.push(tmp);
  }
  return acc;
}, []);

// Sort
output.sort((a,b)=> (b.count - a.count));
console.log(output);
// [ { count: 3, color: 'red' },
//   { count: 2, color: 'blue' },
//   { count: 1, color: 'yellow' } ]
```
<hr />


**Q2:**
- Sort an array in alphabetical order for user's name

```js
const output = [
{skill: "javascript", user: "Chad"}
{skill: "javascript", user: "Bill"}
{skill: "javascript", user: "Sue"}]
```

**Q2: Answer**

```js
const output3 = employees.filter(employee => employee.skill === 'javascript')
  .sort((a,b)=>{
    return (a.user < b.user) ? -1 : 1; 
  });
/*
[ { skill: 'javascript', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Sue' } ]
*/
```
<hr />


**Q3:**
- Sort an array for user's name in descending order

```js
const output = [
{skill: "javascript", user: "Chad"}
{skill: "javascript", user: "Bill"}
{skill: "javascript", user: "Sue"}]
```

**Q3:Answer**

```js
const output4 = employees.filter(employee => employee.skill === 'javascript')
  .sort((a,b)=>{
    return (a.user > b.user) ? -1 : 1; 
  });
/*
[ { skill: 'javascript', user: 'Sue' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' } ]
*/
```


**Q4:**
- Sort Sum in dataCollection

```js
var dataCollection = [
  { values: { Month: "August", Sum: "10" } },
  { values: { Month: "February", Sum: "25" } },
  { values: { Month: "July", Sum: "35" } }
];
```

**Q4:Answer**
```js
var dataCollection = [
  { values: { Month: "August", Sum: "10" } },
  { values: { Month: "February", Sum: "25" } },
  { values: { Month: "July", Sum: "35" } }
];

dataCollection.sort((a, b)=> a.values.Sum - b.values.Sum);
console.log(dataCollection);
```







### References:
- [stackoverflow- sort](https://medium.com/@c.mansour/the-difference-between-the-filter-and-map-array-methods-in-javascript-f8164f65fa5e)