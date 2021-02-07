# Array

# Array of Object

- JavaScript is **no associative array** so to use `Array of object` to make associative array.

### Iterators

| Iterator                                         | Return Value                                          | description                                               |
| ------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------- |
| Array.forEach(value, index)                      | NO return values                                      |                                                           |
| Array.map(value, index)                          | Returns new array                                     | Creating a result for every array element.                |
| Array.filter(value, index)                       | Returns new array                                     | Creating a result that is only passed a test in callback. |
| Array.find()                                     | Returns the FIRST matched **VALUE** <br />(NOT array) |                                                           |
| Array.reduce((acc, currentVal) =>{}, initialVal) | Returns new array **OR** value                        |                                                           |

### Methods

| Function           | Syntax             | Description                                                                                                 |
| ------------------ | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| Sort               | Array.sort()       |                                                                                                             |
| Find Index         | Array.indexOf('a') | ALWAYS Compare with **-1**<br />`Array.indexOf('a') === -1` <br>`Array.indexOf('a') > -1`                   |
| Add                | Array.push()       | Returns new length.                                                                                         |
| Merge              | Array.concat()     | Returns new array.<br> array1.concat(array2)                                                                |
| Delete the first   | Array.shift()      | Removes the first element from an array and returns the removed element. <br /> Modified an original array. |
| Delete the last    | Array.pop()        | Removes the last element from an array and returns the removed element. <br /> Modifed an original array.   |
| A postion of array | Array.slice()      |                                                                                                             |

### Slice()

Syntax

```js
arr.slice(start, end);
```

- `start` and `end` are optional.
- If `start` is undefined, it is `0`.
- If `end` is undefined, it is `array.length`.
- `end` index does NOT be included.
- negative index is indicating an offset from the end of the sequence.

**start**

- The array index at which the slice is to begin. If negative, this argument specifies a position measured from the end of the array. That is, **−1 indicates the last element**, **−2 indicates the next from the last element**, and so on.

**end**

- The array index immediately after the end of the slice. If not specified, the slice includes all array elements from the start to the end of the array. If this argument is negative, it specifies an array element measured from the end of the array.
