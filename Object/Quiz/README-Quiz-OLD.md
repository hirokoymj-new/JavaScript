# Algorithm - Object: QUIZ

<hr />

## Table of contents

- [Algorithm - Object: QUIZ](#algorithm---object-quiz)
  - [Table of contents](#table-of-contents)
  - [Merge two objects.](#merge-two-objects)
  - [Merge three object.](#merge-three-object)
  - [Grouping array of objects with name key.](#grouping-array-of-objects-with-name-key)
  - [Grouping array of objects by skill key.](#grouping-array-of-objects-by-skill-key)
  - [Comparing two objects](#comparing-two-objects)
  - [Convert Roman numeral](#convert-roman-numeral)
  - [Filter with JSON Array](#filter-with-json-array)
    - [Calling above module](#calling-above-module)
  - [indexOf on an array of objects - map()](#indexof-on-an-array-of-objects---map)
  - [References:](#references)

## Merge two objects.

- Prepaing output empty array.
- Put two objects in array.
- For..Each loop.
- For..In Loop.
- Using **`Object.hasOwnProperty(key)`**, cheking if key exists or not.

```js
var a = { foo: true, count: 1 };
var b = { bar: false };

function extend(a, b) {
  var output = {};
  var array = [a, b];

  array.forEach(function (value) {
    for (var key in value) {
      if (!output.hasOwnProperty(key)) {
        output[key] = value[key];
      }
    }
  });
  return output;
}

console.log(extend(a, b)); //{ foo: true, count: 1, bar: false }
```

## Merge three object.

- Create an empty object for output.
- Add three objects in array.
- For..Each loop.
- For..In loop for object.
- Using Object.hasOwnProperty(key), check if key exists in output array. if not existing add value into output, but before add convert strint go array.
- If exist, add value into output asssociated to key.

```js
var gdp = {
  city: "LA",
  gdp: [],
};

var income = {
  city: "LA",
  income: [],
};

var uRate = {
  city: "SF",
  uRate: [],
};
//{ city: [ 'LA', 'LA', 'SF' ], gdp: [], income: [], uRate: [] }

function extend(a, b, c) {
  var output = {};
  var array = [a, b, c];

  array.forEach(function (obj) {
    for (var key in obj) {
      if (output.hasOwnProperty(key)) {
        output[key].push(obj[key]);
      } else {
        // not existing
        var v = typeof obj[key] == "string" ? [obj[key]] : obj[key]; //"[LA]"
        output[key] = v;
      }
    }
  });
  return output;
}
console.log(extend(gdp, income, uRate));
```

## Grouping array of objects with name key.

**Method 1: Using `filter` function to check if name exits in output array.** `Array.prototype.filter()`

```js
var array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
];

function groupByObject(array) {
  var output = [];

  array.forEach(function (value) {
    var existing = output.filter(function (v) {
      return v.name == value.name;
    });
    // [] or [{name:"foo1",value:"val1"}]

    if (existing.length) {
      //existing
      var existingIndex = output.indexOf(existing[0]);
      output[existingIndex].value = output[existingIndex].value.concat(
        value.value
      );
    } else {
      if (typeof value.value == "string") {
        value.value = [value.value];
      }
      output.push(value);
    }
  });
  return output;
}
console.log(groupByObject(array)); //[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]
```

**Method 2: Witout `Array.filter` version.**

```js
array.forEach(function (value, index) {
  var existing = checkExisting(output, value.name);
  var existingID = existing[1];

  if (!existing[0]) {
    if (typeof value.value == "string") {
      value.value = [value.value];
    }
    output.push(value);
  } else {
    output[existingID].value = output[existingID].value.concat(value.value);
  }
});

function checkExisting(array, value) {
  var result = [false, 0];

  array.forEach(function (v, i) {
    if (v.name == value) {
      result[0] = true;
      result[1] = i;
    }
  });
  return result;
}
```

## Grouping array of objects by skill key.

1. Creat an empty array for output.
2. forEach loop for employees array.
3. Check if skill value exists in output array using `Array.filter function`.
4. If exist, add user.
5. If not exist, add entire object in output array.

```js
var employees = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

// Result
/*
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];
*/

function groupByObject(array) {
  var output = [];

  array.forEach(function (value) {
    var existing = output.filter(function (v) {
      return v.skill == value.skill;
    });
    // [] or [{name:"foo1",value:"val1"}]

    if (existing.length) {
      //existing
      var existingIndex = output.indexOf(existing[0]);
      output[existingIndex].user.push(value.user);
      output[existingIndex].count = output[existingIndex].user.length;
    } else {
      // not existing
      value.user = [value.user];
      value.count = value.user.length;
      output.push(value);
    }
  });
  return output;
}
console.log(groupByObject(employees));
```

## Comparing two objects

Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and plain objects are compared by their reference. That comparison by reference basically checks to see if the objects given refer to the same location in memory.

```js
var a = { a: 1 };
var b = { a: 1 };
//a == b // false
//a === b  //false
```

## Convert Roman numeral

```js
var RomanObj = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function convertRoman(num) {
  var tmp = [];
  var result = [];

  while (num > 0) {
    for (var key in RomanObj) {
      if (num >= key) {
        tmp.push(key);
      }
    }

    var keyNum = tmp.pop();
    num = num - keyNum;

    //		console.log("keyNum:" + keyNum + " num: " + num);
    result.push(RomanObj[keyNum]);
  }
  return result.join("");
}

console.log(convertRoman(66)); //[50,10,5,1] => LXVI
console.log(convertRoman(50)); //[50] => L
console.log(convertRoman(25)); //[10,10,5] => XXV
```

## Filter with JSON Array

```js
var cityArray = [
{id: 1, city: "New York"},
{id: 2, city: "Los Angeles" },
{id: 3, city: "Washington DC" },
{id: 4, city: "San Jose" },
{id: 5, city: "Mountain View" }
];

var city_id = 2;

//Checking if city_id is existing cityArray

var existing = cityArray.filter(function(v){
	return v.id== city_id;
});
if(existing.length){
	console.log("city ID exists".);
}else{
	console.log("city ID does NOT exist.");
}

```

#### Calling above module

- category_page.js

```
(function(){
 categorytitle.init();

}());
```

## indexOf on an array of objects - map()

The **map()** method creates **new array** with the results of calling a provided function. The **map()** is useful to know indexOf for an object array. Below is the example to know indexOf value for "color: blue" in myArray.

```js
var myArray = [
  { color: "red", name: "redName" },
  { color: "blue", name: "blueName" },
  { color: "green", name: "greenName" },
  { color: "yellow", name: "yellowName" },
];
// Create new array [ 'red', 'blue', 'green', 'yellow' ]
var newArray = myArray.map(function (element) {
  return element.color;
});
console.log(newArray); //[ 'red', 'blue', 'green', 'yellow' ]

// To know indexOf value for "color: blue" in myArray.
var blueIndex = myArray
  .map(function (element) {
    return element.color;
  }) //[ 'red', 'blue', 'green', 'yellow' ]
  .indexOf("blue");
console.log(blueIndex); //1
```

** Using Array.findIndex()**

```js
var myArray = [
  {
    color: "red",
    name: "redName",
  },
  {
    color: "blue",
    name: "blueName",
  },
  {
    color: "green",
    name: "greenName",
  },
  {
    color: "yellow",
    name: "yellowName",
  },
];

var greenIndex = myArray.findIndex(function (value) {
  return value.color == "green";
});

console.log(greenIndex);
```

## References:

- [stackoverflow - Merge javascript objects in array with same key](http://stackoverflow.com/questions/33850412/merge-javascript-objects-in-array-with-same-key/33850863)
- [stackoverflow - Javascript indexOf on an array of objects](http://stackoverflow.com/questions/8313350/javascript-indexof-on-an-array-of-objects)
- https://sarfraznawaz.wordpress.com/2012/01/26/javascript-self-invoking-functions/
