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
const diff = (obj1, obj2) => {
  var result = "";
  for ([key, value] of Object.entries(obj1)) {
    result = value === obj2[key] ? true : false;
  }
  return result;
};

console.log(diff(obj1, obj2));
console.log(diff(obj1, obj3));
// true
// false
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

```js
const extend2 = (a, b, c) => {
  const output = [a, b, c].reduce((acc, currentValue) => {
    for (const [key, value] of Object.entries(currentValue)) {
      if (acc.hasOwnProperty(key)) {
        acc[key].push(value);
      } else {
        acc[key] = typeof value === "object" ? value : [value];
      }
    }
    return acc;
  }, {});
  return output;
};
console.log(extend2(gdp, income, uRate));
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
  const matched = acc.find((obj) => obj.name === currentValue.name);

  if (matched) {
    if (typeof currentValue.value === "string") {
      matched.value.push(currentValue.value);
    } else {
      matched.value = currentValue.value.concat(matched.value);
    }
  } else {
    //Not existing
    if (typeof currentValue.value === "string")
      currentValue.value = [currentValue.value];
    acc.push(currentValue);
  }

  return acc;
}, []);

// Sort
const final = output.map((obj) => {
  obj.value.sort((a, b) => (a < b ? -1 : 1));
  return obj;
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
const mergeTwoObjects = (a, b) => {
  var output = {};
  [a, b].map((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      output[key] = value;
    }
  });
  return output;
};
const result = mergeTwoObjects(obj1, obj2);
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
const result = [];
const array = [a1, a2];
array.forEach((obj) => {
  obj.forEach((value) => {
    result.push(value);
  });
});
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
const output = friends.reduce((acc, currentValue) => {
  currentValue.books.forEach((value) => {
    acc.push(value);
  });
  return acc;
}, []);
```

**Q16-Answer-3:**

```js
const output2 = friends.reduce((acc, currentValue) => {
  const newVal = acc.concat(currentValue.books);
  return newVal;
}, []);
console.log(output2);
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

<!--
**Q1:**
```js
```
**Q1-Answer:**
```js
```
<hr />
 -->
