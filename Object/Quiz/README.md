# Object - Quiz

**Q1:**

```js
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj3 = {
  a: 1,
  b: 2,
  c: 4,
};

// diff(obj1, obj2); // RETURNS true
// diff(obj1, obj3); // RETURNS false
```

**A1:**

```js
const diff = (a, b) => {
  let result = false;
  Object.keys(a).map((key) => {
    result = a[key] === b[key] ? true : false;
  });
  return result;
};

const checkDiff = (a, b) => {
  let result = false;
  for (const key in a) {
    result = a[key] === b[key] ? true : false;
  }
  return result;
};
```

<hr />

**Q2:**

```js
const gdp = {
  city: "LA",
  gdp: [],
};

const income = {
  city: "LA",
  income: [],
};

const uRate = {
  city: "SF",
  uRate: [],
};
//{ city: [ 'LA', 'LA', 'SF' ], gdp: [], income: [], uRate: [] }
```

**Q2-Answer-1**

```js
const extend = (a, b, c) => {
  var output = {};
  var array = [a, b, c];

  array.forEach((obj) => {
    for (const key in obj) {
      if (output.hasOwnProperty(key)) {
        output[key].push(obj[key]);
      } else {
        output[key] = typeof obj[key] === "object" ? obj[key] : [obj[key]];
      }
    }
  });
  return output;
};
console.log(extend(gdp, income, uRate));
```

**Q2-Answer-2**
[04/07]

```js
const data = [gdp, income, uRate];
const output = {};

data.map((obj) => {
  for (const key in obj) {
    const value = typeof obj[key] === "string" ? [obj[key]] : obj[key];
    const found = output.hasOwnProperty(key);

    if (found) {
      output[key] = [...output[key], ...value];
    } else {
      output[key] = value;
    }
  }
});
```

<hr />

**Q3:**

```js
const a = { a: 1 };
const b = { a: 1 };

console.log(a == b); //?
console.log(a === b); //?
```

**A3-Answer:**

## Comparing two objects

Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and plain objects are compared by their reference. That comparison by reference basically checks to see if the objects given refer to the same location in memory.

```text
a == b // false
a === b  //false
```

<hr />

**Q4:**

```js
const employees = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];
```

```text
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 }
];
```

**Q4-Answer:**

```js
const output = employees.reduce((acc, currentValue) => {
  const matched = acc.find((value) => value.skill === currentValue.skill);
  if (matched) {
    matched.user.push(currentValue.user);
    matched.count++;
  } else {
    currentValue.user = [currentValue.user];
    currentValue.count = 1;
    acc.push(currentValue);
  }
  return acc;
}, []);
```

**Q4-Answer-2:**

```js
const output = [];
employees.map((employee) => {
  const { skill, user } = employee;
  const found = output.find((d) => d.skill == skill);

  if (found) {
    found.user.push(user);
    found.count++;
  } else {
    const temp = {
      skill,
      user: [user],
      count: 1,
    };
    output.push(temp);
  }
});
```

<hr />

**Q5:**

```js
const cityArray = [
  { id: 1, city: "New York" },
  { id: 2, city: "Los Angeles" },
  { id: 3, city: "Washington DC" },
  { id: 4, city: "San Jose" },
  { id: 5, city: "Mountain View" },
];
```

```text
Checking if city id 2 exists in cityArray.
```

**Q5-Answer:**

- find() returns matched object, filter() returns an array.

```js
const result = cityArray.find((value) => value.id === 2);
console.log(result);
//{ id: 2, city: 'Los Angeles' }

const result2 = cityArray.filter((value) => value.id === 2);
console.log(result2);
//[ { id: 2, city: 'Los Angeles' } ]
```

<hr />

**Q6:**

```js
const myArray = [
  { color: "red", name: "redName" },
  { color: "blue", name: "blueName" },
  { color: "green", name: "greenName" },
  { color: "yellow", name: "yellowName" },
];
```

```text
Create new array [ 'red', 'blue', 'green', 'yellow' ]
```

**Q6-Answer-1:**

```js
const output = myArray.reduce((acc, currentValue) => {
  for ([key, value] of Object.entries(currentValue)) {
    if (key === "color") {
      acc.push(value);
    }
  }
  return acc;
}, []);
```

**Q6-Answer-2:**

```js
const output2 = myArray.map((value) => value.color);
```

<hr />

**Q7:**

```js
const myArray = [
  { color: "red", name: "redName" },
  { color: "blue", name: "blueName" },
  { color: "green", name: "greenName" },
  { color: "yellow", name: "yellowName" },
];
```

```text
Find an index number of "color: blue".
```

**Q7-Answer-1:**

```js
const blueIndex2 = myArray
  .map((value) => value.color) //[ 'red', 'blue', 'green', 'yellow' ]
  .indexOf("blue");
```

**Q7-Answer-2:**

```js
const blueIndex3 = myArray.findIndex((value) => value.color === "blue");
```

<hr />

**Q8:**

```js
const array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
  { name: "foo2", value: "val5" },
  { name: "foo3", value: ["val6", "valu7"] },
];
```

```text
[
  { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },
  { name: 'foo2', value: [ 'val4', 'val5' ] },
  { name: 'foo3', value: [ 'val6', 'valu7' ] }
]
```

**Q8-Answer:**

```js
const output = array.reduce((acc, currentValue) => {
  const { name, value } = currentValue;
  const found = acc.find((obj) => obj.name === name);

  if (found) {
    if (typeof value === "string") {
      found.value.push(value);
    } else {
      found.value = [...found.value, ...value];
    }
  } else {
    const newVal = typeof value === "string" ? [value] : value;
    acc.push({ ...currentValue, value: newVal });
  }
  return acc;
}, []);
```

```js
array.map((obj) => {
  const { name, value } = obj;
  const newVal = typeof value === "string" ? [value] : value;
  const found = output.find((d) => d.name == name);

  if (found) {
    found.value = [...found.value, ...newVal];
  } else {
    const temp = {
      name,
      value: newVal,
    };
    output.push(temp);
  }
});
```

<hr />

**Q9:**

```js
const data = [
  { description: "Rent", amount: 100, createdAt: 1000 },
  { description: "Coffee", amount: 300, createdAt: -1000 },
  { description: "Small Coffee", amount: 300, createdAt: -1000 },
];
```

```text
Find a desciption is 'Rent'.
```

**Q9-Answer:**

```js
const matched = data.find((value) => value.description === "Rent");
// { description: 'Rent', amount: 100, createdAt: 1000 }
```

<hr />

**Q10:**

Merge two objects.

```js
const obj1 = { foo: true, count: 1 };
const obj2 = { bar: false };
//{ foo: true, count: 1, bar: false }
```

**Q10-Answer:**

```js
// #1
const output = { ...obj1, ...obj2 };

// #2
const mergeObjects = (a, b) => {
  return { ...a, ...b };
};
```

<hr />

**Q11:**

Merge two arrays.

```js
const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
```

```text
[ 2, 5, 6,  9, 1, 2, 3, 29]
```

**Q11-Answer-1:**

```js
const output = a1.concat(a2);
console.log(output);
// [  2, 5, 6,  9, 1, 2, 3, 29]
```

**Q11-Answer-2:**

- Merge two arrays without using `concat()`

```js
const output = [...a1, ...a2];
```

<hr />

**Q12:**

```js
const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
// expected result =[1,2,3,5,6,9,29]
```

**Q12-Answer:**

```js
const merged = a1.concat(a2);
const result = merged
  .reduce((acc, currentValue) => {
    const exist = acc.find((value) => value === currentValue);
    if (!exist) acc.push(currentValue);
    return acc;
  }, [])
  .sort((a, b) => (a < b ? -1 : 1));
```

**Q12-Answer-2:**

```js
const output = [];
const data = [...a1, ...a2];

data.forEach((d) => {
  const found = output.find((value) => value === d);
  if (!found) output.push(d);
});
output.sort((a, b) => (a < b ? -1 : 1));
```

<hr />

**Q13:**

Find a max value.

```js
const array = [2, 5, 6, 9];
//9
```

**Q13-Answer:**

- The pop() method removes the last element.
- The shift() method removes the first element.

```js
const max1 = Math.max(...array);
console.log(max1); //9

const array2 = [2, 9, 6, 5];
array2.sort((a, b) => (a < b ? -1 : 1)); //[ 2, 5, 6, 9 ]
const max2 = array2.pop();
console.log(max2); //9

const array3 = [2, 9, 6, 5];
array3.sort((a, b) => (a < b ? 1 : -1)); //[ 9, 6, 5, 2 ]
const max3 = array3.shift();
console.log(max3); //9
```

<hr />

**Q14:**

```js
const array = [5, 6, 1, 3]; //2, 4
```

**Q14-Answer:**

```js
const max = Math.max(...array); //6
const min = Math.min(...array); //1

const missingNum = [];

for (let i = min; i <= max; i++) {
  const found = array.find((value) => value === i);
  if (!found) missingNum.push(i);
}

console.log(missingNum.toString());
//2,4
```

<hr />

**Q15:**

```js
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
//{'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}
```

**Q15-Answer:**

```js
// new output - object
// loop - reduce
// condition - key exists or not
//
const output = names.reduce((acc, currentValue) => {
  const found = acc.hasOwnProperty(currentValue);
  if (found) {
    acc[currentValue]++;
  } else {
    acc[currentValue] = 1;
  }

  return acc;
}, {});
```

<hr />

**Q16:**

```js
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];
```

```text
[
  'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet',
  'The Lord of the Rings',
  'The Shining'
]
```

**Q16-Answer-1:**

```js
const output2 = friends.reduce((acc, currentValue) => {
  acc.push(...currentValue.books);
  return acc;
}, []);
```

**Q16-Answer-2:**

```js
let output = [];
friends.map((obj) => {
  output = [...output, ...obj.books];
});
```

<hr />

**Q17:**

```js
const array = [3, 5, 2];
//10
```

**Q17-Answer:**

```js
//new output value
// reduce
//
const sum = array.reduce((acc, currentValue) => {
  return acc + currentValue;
}, 0);

console.log(sum);
```

<hr />

**Q18:**

### Downward to the nearest integer

```js
1.6 -> 1
```

**Q18-Answer:**

```js
Math.floor(1.6); //1
```

<hr />

**Q19:**

### Upward to the nearest integer

```js
1.4 -> 2
```

**Q19-Answer:**

```js
Math.ceil(1.4); //2
```

<hr />

**Q20:**

## Round the nearest integer

```js
2.4 -> 2
2.5 -> 3
```

**Q20-Answer:**

```js
Math.round(2.4); //2
Math.round(2.5); //3
```

<hr />

**Q21:**

```js
const unordered = {
  b: "foo",
  c: "bar",
  a: "baz",
};
```

```text
{ a: 'baz', b: 'foo', c: 'bar' }
```

**Q21-Answer:**

```js
const newKeys = Object.keys(unordered).sort();
const result = newKeys.reduce((acc, key) => {
  acc[key] = unordered[key];
  return acc;
}, {});
```

<hr />

**Q22:**

Make a function to check if a given value is an integare or float.

```text
isInt(1.5) -> false
isInt(824) -> true
```

**Q22-Answer:**

```js
const result = (isInt = (a) => {
  if (a % 1 == 0) {
    return true;
  } else {
    return false;
  }
});
```

**Q23:**

```js
// Array
let a = [1, 2, 3, 4, 5];
a.slice(0, 3);
a.slice(3);
a.slice(1, -1);
a.slice(-3, -2);

// String
const str = "12345";

str.slice(0, 3);
str.slice(3);
str.slice(1, -1);
str.slice(-3, -2);
```

**Q23-Answer:**

**start**

- The array index at which the slice is to begin. If negative, this argument specifies a position measured from the end of the array. That is, **−1 indicates the last element**, **−2 indicates the next from the last element**, and so on.

**end**

- The array index immediately after the end of the slice. If not specified, the slice includes all array elements from the start to the end of the array. If this argument is negative, it specifies an array element measured from the end of the array.
- end index does NOT included.

```js
let a = [1, 2, 3, 4, 5];
a.slice(0, 3); //[1,2,3]
a.slice(3); //[4,5]
a.slice(1, -1); //[2,3,4]
a.slice(-3, -2); // [3]

const str = "12345";
str.slice(0, 3)); //123
str.slice(3)); //45
str.slice(1, -1)); //234
str.slice(-3, -2)); //3
```

<hr />

**Q24:**

Make a digit.

```js
makeDigit2(-43, 5);
//the result should be 00043.
```

**Q24-Answer:**

- Math.abs()
- Math.pow()
- String.slice(-5)

```js
const output = (makeDigit = (value, nth) => {
  const createDigit = Math.pow(10, nth);
  const convertAbs = Math.abs(value);
  const result = createDigit + convertAbs;
  const final = result.toString().slice(nth * -1);
  return final;
});
```

<hr />

## Random number

**Q25: Generate random number 0-99**

**Q25-Answer**

- Step 1 Generate random number 0-1(1 is exclosive).
- Step 2 Multiply max number plus 1(+1).
- Step 3 Downward the result using Math.floor().

```js
Math.floor(Math.random() * 100);
```

<hr />

**Q26: Generate random number 0-50**

**Q26-Answer**

```js
Math.floor(Math.random() * 51);
```

<hr />

**Q27: Generate random number 30-90**

**Q27-Answer**

```js
//Math.floor(Math.random()*91)          // Step1: 0-90
//Math.floor(30+Math.random()*91)       // Step2: 30-120
Math.floor(30+(Math.random()*61)        // Step3: 30-90
```

<hr />

**Q28: Generate random number 1-100**

**Q28-Answer**

```js
//Math.floor(Math.random()*101);            //Step1: 0-100
//Math.floor(1+Math.random()*101);          //Step2: 1-101
Math.floor(1 + Math.random() * 100); //Step 3: 1-100
```

<hr />

**Q29: Generate random number 1-12**
**Q29-Answer**

```js
// Math.floor(Math.random()*13) //0-12
// Math.floor(1+Math.random()*13) //1-13
Math.floor(1 + Math.random() * 12); //1-12
```

<hr />

**Q30: Generate random number 5-7**
**Q30-Answer**

```js
// Math.floor(Math.random()*8); //0-7
// Math.floor(5+Math.random()*8); //5-12
Math.floor(5 + Math.random() * 3); //5-7
```

<hr />

**Q31:**

```js
const array = ["red", "yellow", "red", "blue", "blue", "red"];
//
[
  { color: red, count: 3 },
  { color: yellow, count: 1 },
  { color: blue, count: 2 },
];
```

**Q31-Answer:**

```js
const result = array.reduce((acc, currentValue) => {
  const existObj = acc.find((obj) => obj.color === currentValue);
  if (existObj) {
    existObj.count++;
  } else {
    acc.push({
      color: currentValue,
      count: 1,
    });
  }
  return acc;
}, []);

console.log(result);
```

<hr />

**Q32: - Update array of object**

```js
const initial = [
  { id: 0, value: false },
  { id: 1, value: false },
];
```

```text
id: 1, value: true
```

**Q32-Answer:**

```js
const output = initial.map((d) => (d.id === 1 ? { ...d, value: true } : d));
```

<hr />

**Q33: Update Object**

```js
let state = {
  todos: [
    { id: 1, title: "Eat breakfast", completed: false },
    { id: 2, title: "Make bed", completed: false },
  ],
};
```

```text
id:2 -> completd : true
```

**Q33-Answer:**

```js
state = {
  ...state,
  todos: state.todos.map((d) => (d.id === 2 ? { ...d, completed: true } : d)),
};
```

<hr />

**Q34:**

```js
const data = [
  {
    userId: 1,
    id: 100,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 101,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 102,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 103,
    title: "et porro tempora",
    completed: true,
  },
];
```

```text
//101 -> complegted: true
```

**Q34-Answer:**

```js
const newState = data.map((obj) =>
  obj.id === 101 ? { ...obj, completed: true } : obj
);
```

<hr />

**Q35:**

```js
const data = ["March", "Jan", "Feb", "Dec"];
const months = [
  { num: 1, name: "Jan" },
  { num: 2, name: "Feb" },
  { num: 3, name: "March" },
  { num: 4, name: "April" },
  { num: 5, name: "May" },
  { num: 6, name: "June" },
  { num: 7, name: "July" },
  { num: 8, name: "August" },
  { num: 9, name: "Sep" },
  { num: 10, name: "Oct" },
  { num: 11, name: "Nov" },
  { num: 12, name: "Dec" },
];
//[ 'Jan', 'Feb', 'March', 'Dec' ]
```

**Q35-Answer:**

```js
data.sort((a, b) => {
  const obj1 = months.find((d) => d.name === a);
  const obj2 = months.find((d) => d.name === b);
  return obj1.num < obj2.num ? -1 : 1;
});
```

<hr />

**Q36:**

```js
const data = ["March", "Jan", "August", "Dec"];
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//[ 'Jan', 'March', 'August', 'Dec' ]
```

**Q36-Answer:**

```js
data.sort((a, b) => {
  return months.indexOf(a) < months.indexOf(b) ? -1 : 1;
});
```

<hr />

**Q37:**
Falsy values in JavaScript

**Q37-Answer:**

1. false
2. undefined
3. null
4. NaN
5. 0
6. empty string

**Q38:**

```js
typeof null;
typeof {};
```

**Q38-Answer:**

```js
console.log(typeof 1); //number
console.log(typeof "a"); // string
console.log(typeof true); //boolean
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
```

**Q39:**

Find a `value = "5ff5addc7b26d000171ebe0d"`

```js
const data = [
  { name: "Database", value: "5ff5addc7b26d000171ebe0d" },
  { name: "Git", value: "5fec597e5e17e200170e0ffe" },
  { name: "ES6", value: "5fcadae535b5e444496aeff9" },
];
```

**Q39-Answer:**

```js
const found = data.find((d) => d.value === value);
console.log(found);
//{ name: 'Database', value: '5ff5addc7b26d000171ebe0d' }
```

<hr />

**Q40:**

```js
const objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];
// output 2
// obj.x == obj.y => 2 items
```

**Q40-Answer-1:**

```js
let result = 0;
objects.map((obj) => {
  if (obj.x === obj.y) {
    result++;
  }
});
console.log(result);
```

**Q40-Answer-2:**

```js
const output = objects.reduce((acc, currentValue) => {
  const { x, y } = currentValue;
  if (x === y) {
    acc++;
  }
  return acc;
}, 0);
console.log(output);
```

<hr />

**Q41**

### Math - Division/Quotient/remainder

- Quation with interger part, remainder

```js
10 / 3;
```

**Q41-Answer:**

```js
const result = 10 / 3;
const integerPart = Math.floor(10 / 3);
const reminder = 10 % 3;

console.log(result);
console.log(integerPart);
console.log(reminder);

//3.3333333333333335
//3
//1
```

<hr />

**Q42:**

- Get the day on 2021-04-14
- Wednesday is the correct day on 2021/04/14.

**Q42-Answer:**

```js
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date("2021-04-14");
const day = today.getDay();
console.log(days[day]);
```

<hr />

**Q43:**

- A first letter from a first param
- abcac abcac -->A first lettter "a" is 4.
- aba aba aba a --> A first letter "a" is 7.

```js
repeatedString("abcac", 10); //4
repeatedString("aba", 10); //7
```

**Q43-Answer:**

```js
const repeatedString = (s, n) => {
  const array = s.split("");
  let output = [];
  let index = 0;
  let i = 0;
  const firstLetter = s.charAt(0);

  while (i < n) {
    output.push(array[index]);
    if (index == array.length - 1) {
      index = 0;
    } else {
      index++;
    }
    i++;
  }

  console.log(output.filter((d) => d === firstLetter).length);
};
```

<hr />

[2021/12/5]

**Q44: Updated Object value**

- Update id:1 value to "true"

```js
const initial = [
  { id: 0, value: false },
  { id: 1, value: false },
];
```

**Q44-Answer:**

```js
const result3 = initial.map((v) => {
  const temp = v.id === 1 ? { ...v, value: true } : v;
  return temp;
});
// [ { id: 0, value: false }, { id: 1, value: true } ]
```

<hr />

**Q45:**

- Find different items between two arrays.
- Use `reduce()`

```js
const array1 = ["Open"];
const masterArray = ["Open", "Confirmed", "False Positive", "Fixed"];
// find different items - ["Confirmed", "False Positive", "Fixed"]
```

**Q45-Answer:**

```js
const array1 = ["Open"];
const masterArray = ["Open", "Confirmed", "False Positive", "Fixed"];
// find different items - ["Confirmed", "False Positive", "Fixed"]

const output1 = masterArray.reduce((acc, currentVal) => {
  const found = array1.find((d) => d === currentVal);
  const isFound = Boolean(found);
  if (!isFound) {
    acc.push(currentVal);
  }
  return acc;
}, []);

console.log("different items: ", output1);
```

<hr />

<!--
**Q1:**

```js

```

**Q1-Answer:**

```js

```

<hr />
 -->
