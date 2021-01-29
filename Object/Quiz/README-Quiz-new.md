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

<!--
**Q1:**

```js

```

**A1:**

```js

```

<hr />
 -->
