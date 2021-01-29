# Object

## Object.keys, values, entries

| Methods             | Description                             |
| ------------------- | --------------------------------------- |
| Object.keys(obj)    | Returns an array of keys.               |
| Object.values(obj)  | Returns an array of values.             |
| Object.entries(obj) | Returns an array of [key, value] pairs. |

## Iterate Object

| Methods                                 | Description                             |
| --------------------------------------- | --------------------------------------- |
| for key in object                       | iterates over an object                 |
| for [key, value] of Object.entries(obj) | iterates iterable value (Array, String) |

```js
let user = {
  name: "John",
  age: 30,
};

console.log(Object.keys(user));
//[ 'name', 'age' ]

console.log(Object.values(user));
// [ 'John', 30 ]

console.log(Object.entries(user));
//[ [ 'name', 'John' ], [ 'age', 30 ] ]

for (key in user) {
  console.log(`${key}, ${user[key]}`);
}
// name, John
// age, 30

for ([key, value] of Object.entries(user)) {
  console.log(`${key}, ${value}`);
}
// name, John
// age, 30
```

<hr />

# for...of

**Syntax**

```js
for (variable of iterable) {
  statement;
}
```

**Iterating over an Array**

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

**Iterating overf a String**

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o
```

# reduce

```text
array.reduce((acc, currentValue) => {  return acc;}, initialValue);
array.reduce((acc, currentValue) => {  return acc;}, {});
array.reduce((acc, currentValue) => {  return acc;}, 10);
array.reduce((acc, currentValue) => {  return acc;}, []);
```

- [MDN - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [MDN - for..of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN - Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN - Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [How to iterate over a JavaScript object?](https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object)
- [JavaScript.Info](https://javascript.info/keys-values-entries)
