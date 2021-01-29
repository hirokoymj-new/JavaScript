//
// Grouping array of objects with name key.
//

var array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
];

// Result
/*
[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]
*/

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

// var checking = array.filter(function (v) {
//   return v.name == "foo2";
// });

// console.log(checking);
// console.log(array.indexOf(checking[0]));

// function groupByObject(array) {
//   var output = [];

//   array.forEach(function (value) {
//     var existing = output.filter(function (v) {
//       return v.name == value.name;
//     });
//     // [] or [{name:"foo1",value:"val1"}]

//     if (existing.length) {
//       //existing
//       var existingIndex = output.indexOf(existing[0]);
//       output[existingIndex].value = output[existingIndex].value.concat(
//         value.value
//       );
//     } else {
//       if (typeof value.value == "string") {
//         value.value = [value.value];
//       }
//       output.push(value);
//     }
//   });
//   return output;
// }
// console.log(groupByObject(array)); //[ { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },  { name: 'foo2', value: [ 'val4' ] } ]

//http://stackoverflow.com/questions/33850412/merge-javascript-objects-in-array-with-same-key/33850863
