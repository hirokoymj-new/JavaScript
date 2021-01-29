# Algorithm - Array

1. Merge two arrays
2. Remove duplicate values
3. Find max number in Array
4. Finding missing number in Array
5. Sorting array
6. Sorting array of objects
7. Array - multiply
8. Array - duplication
9. Define Array.min(), Array.max() using prototype
10. Flatten and convert Array to Object

## Merge two arrays

**Q1: Merge two array**

```js
const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
```

**A1 Answer**

**Key of answer**

- `Array.concat()`

```js
const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
const result = a1.concat(a2);

console.log(result); //[ 2, 5, 6, 9, 1, 2, 3, 29 ]
```

<hr />

## Remove duplication value

Q2: Merge two arrays and then remove duplicate values. A final result should be `[2, 5, 6, 9, 1, 2, 3, 29]`

```js
const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];
// expected result =[1,2,3,5,6,9,29]
```

A2:

**Key of answer**

- reduce((acc, currentValue)=>{}, [])
- indexOf() => always compares -1 or not

```js
const a1 = [2, 5, 6, 9];
const a2 = [1, 2, 3, 29];

const merged = a1.concat(a2);
const result = merged.reduce((acc, currentValue) => {
  if (acc.indexOf(currentValue) === -1) {
    acc.push(currentValue);
  }
  return acc;
}, []);

console.log(result);
// [2, 5, 6, 9, 1, 3, 29 ]
result.sort((a, b) => (a < b ? -1 : 1));
```

<hr />

## Find max number in Array

**Q3: Find max number in array**

```js
const array = [2, 5, 6, 9];
```

**A3: Answer**

key of answer

- There is no max/min function in Array so we will try to use Math.max function.
- Math.max function: **`Math.max(value1, value2, value3)`**.
- Invoking a Function with a Function Method using `call()` or `apply()`, which are predefined JavaScript **function methods**.

| Methods | Definition                 | Syntax                                   |
| ------- | -------------------------- | ---------------------------------------- |
| call()  | Function.prototype.call()  | function.call(thisArg, arg1, arg2, arg3) |
| apply() | Function.prototype.apply() | function.apply(thisArg, array)           |

- Use pop() and reduce() to iterate an array to find a max value.

```js
const array = [2, 5, 6, 9];
const max1 = Math.max.apply(null, array); //9
const max2 = Math.max(...array);

array.sort((a, b) => (a < b ? -1 : 1));
const array_copy = array;
const max3 = array_copy.pop();

const max4 = [2, 5, 6, 9].reduce((acc, currentValue) => {
  return Math.max(acc, currentValue);
});

console.log(max1);
console.log(max2);
console.log(max3);
console.log(max4);
```

<hr />

## Finding missing number in Array

1. Find max value.
2. Find min value.
3. Preparing missing[].
4. while loop.
5. Using indexOf() to search/find a missing value. **`Array.prototype.indexOf()`**
6. Add a missing value in missing[].

```js
var array = [5, 2, 6, 1, 3];

var max = Math.max.apply(null, array);
var min = Math.min.apply(null, array);

function findMissing(max, min, array) {
  var i = min;
  var missing = [];

  while (i <= max) {
    if (array.indexOf(i) == -1) {
      missing.push(i);
    }
    i++;
  }
  return missing;
}
console.log(findMissing(max, min, array)); //[ 4 ]
```

## Sorting array

- Use sort function in Array. **`Array.prototype.sort()`**
- Syntax: **`arr.sort(compareFunction)`**

```js
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
//[ 1, 2, 3, 4, 5 ]
```

## Sorting array of objects

- Sorting info object by count with ascending order.

```js
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
[
  { skill: 'html', user: [ 'Sue' ], count: 1 }
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
];
```

## Array - multiply

- Use `array.reduce` function.

**Syntax**

> Array.prototype.reduce(callback, initialValue)

> array.reduce(function(accumulator, currentValue, currrentIndex)

```js
var array = [3, 5, 2];
var multiply = array.reduce(function (acc, val) {
  return acc * val;
}, 1);
console.log(multiply); //30
```

**Without using array.reduce().**

```js
var array = [3, 5, 2];

function multi(array) {
  var sum = 1;
  array.forEach(function (value, index) {
    sum = sum * value;
  });
  return sum;
}
console.log(multi(array)); //30
```

## Array - sum

- Use `array.reduce` function.

**Syntax**

> Array.prototype.reduce(callback, initialValue)

> array.reduce(function(accumlator, currentValue, currentIndex)

```js
var array = [3, 5, 2];
var sum = array.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(sum); //10
```

## Array - duplication

- Use concat function in Array. **`Array.prototype.concat()`**
- The concat() method is used to merge two or more arrays.

```js
var array = [1, 2, 3, 4, 5];

var newArray = array.concat(array);
console.log(newArray); //[ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]
```

## Define Array.min() and Array.max() using prototype

- Use Object.prototype property. **`Object.prototype`**

```js
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

var a = [1, 2, 3];
console.log(a.max());
console.log(a.min());
```

## Flatten and convert Array to Object.

- Use reduce function.

**Syntax**

> Array.prototype.reduce(callback, initialValue)

> array.reduce(function(accumlator, currentValue, currentIndex)

```js
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
//{'Alice':2, 'Bob':1, 'Tiff':1, 'Bruce':1}
var output = {};

names.forEach(function (value) {
  if (output.hasOwnProperty(value)) {
    output[value]++;
  } else {
    output[value] = 1;
  }
});

//console.log(output);

var countName = names.reduce(function (obj, current) {
  //console.log("Existing: " + obj.hasOwnProperty(current));

  if (obj.hasOwnProperty(current)) {
    obj[current]++;
  } else {
    obj[current] = 1;
  }
  return obj;
}, {});

console.log(countName);
```

## Difference between reduce() and map() function.

The reduce() function applies against accumulator and will be use to flatten an array or tranform array to object.
The map() function applies an Array and makes new array.

## Array - reduce

```js
var friends = [
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

var bookList = friends.reduce(function (acc, value) {
  return acc.concat(value.books);
}, []);

console.log(bookList);
/*
[ 'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet',
  'The Lord of the Rings',
  'The Shining' ]
 */

console.log(bookList.length);
//6
```

## References:

- [Mozilla Developer Network - Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Mozilla Developer Network - Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Mozilla Developer Network - apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Mozilla Developer Network - concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Mozilla Developer Network - prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

- [W3C - JavaScript Function Invocation](http://www.w3schools.com/js/js_function_invocation.asp)
- [GitHub Help - Removing a remote](https://help.github.com/articles/removing-a-remote/)
- [GitHub Help - Adding a remote](https://help.github.com/articles/adding-a-remote/)
