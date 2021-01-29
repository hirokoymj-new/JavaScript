# Array.sort

- The default sort order is according to string Unicode code points.
- If in compare function a and b are the number compare, just simply substract a-b.`(a-b)`
- If you want to sort by acending order return `-1`.
  ```js
  (a<b) return -1 // acending order
  ```
- If you want to sort by decending order return `1`.
  ```js
  (a<b) return 1 // decending order
  ```

**Acending order**
```js
var array = [1, 30, 4, 21];
array.sort((a,b)=> a < b ? -1 : 1);
console.log(array);
//[ 1, 4, 21, 30 ]
```

**Decending order**
```js
var array = [1, 30, 4, 21];
array.sort((a,b)=> a < b ? 1 : -1);
console.log(array);
//[ 30, 21, 4, 1 ]
```


### Sort - `array`

**Ex.1**

```js
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); //["Dec", "Feb", "Jan", "March"]
```
- By default (without compare function), the result is the order with Unicode.

**Ex.2**
```js
var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);//[1, 21, 30, 4]
```
- By default (without compare function), the result is the order with Unicode.

**Ex.3**
```js
var data = ['March', 'Jan', 'Feb', 'Dec'];
const sortByMonth = (array) =>{
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
  array.sort((a, b) => months.indexOf(a) - months.indexOf(b));
  return array;
};
const output = sortByMonth(data);////[ 'Jan', 'Feb', 'March', 'Dec' ]
```

### Sort - `array of object`

```js
var dataCollection = [
  { values: { Month: "August", Sum: "10" } },
  { values: { Month: "February", Sum: "25" } },
  { values: { Month: "July", Sum: "35" } }
];

const sortByMonth = (array) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  array.sort((a,b) => {
    let num = months.indexOf(a.values.Month) - months.indexOf(b.values.Month);
    //console.log(num);
    return num;
  });
}

sortByMonth(dataCollection);
console.log(dataCollection);
```




### References:
- [stackoverflow- sort](https://medium.com/@c.mansour/the-difference-between-the-filter-and-map-array-methods-in-javascript-f8164f65fa5e)