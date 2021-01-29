# Array - Quiz

**Q1:**

```js
var array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
];
```

**Result:**

```text
[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]
```

**Q1-Answer:**

```js
const output = array.reduce((acc, currentValue) => {
  const matched = acc.find((value) => value["name"] === currentValue["name"]);

  if (matched) {
    if (typeof currentValue["value"] === "object") {
      const newVal = currentValue["value"].concat(matched["value"]);
      console.log(newVal);
      matched["value"] = newVal;
    } else {
      matched["value"] = currentValue["value"];
    }
  } else {
    //Not existing
    currentValue["value"] = [currentValue["value"]];
    acc.push(currentValue);
  }

  return acc;
}, []);

console.log(output);
// [
//   { name: 'foo1', value: [ 'val2', 'val3', 'val1' ] },
//   { name: 'foo2', value: [ 'val4' ] }
// ]
```

2018/01/29

<hr />

<!-- **Q1:**

```js

```

**A1:**

```js

```

<hr /> -->
