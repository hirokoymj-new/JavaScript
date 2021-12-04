// const gdp = {
//   city: "LA",
//   gdp: [],
// };

// const income = {
//   city: "LA",
//   income: [],
// };

// const uRate = {
//   city: "SF",
//   uRate: [],
// };
// //{ city: [ 'LA', 'LA', 'SF' ], gdp: [], income: [], uRate: [] }
// // output: {}
// // map, Object.keys

// const output = {};
// const data = [gdp, income, uRate];

// data.forEach((obj) => {
//   Object.keys(obj).map((key) => {
//     const found = output.hasOwnProperty(key);
//     const newVal = typeof obj[key] === "string" ? [obj[key]] : obj[key];

//     if (found) {
//       output[key] = [...output[key], ...newVal];
//     } else {
//       output[key] = newVal;
//     }
//   });
// });

// console.log(output);

// const myArray = [
//   { color: "red", name: "redName" },
//   { color: "blue", name: "blueName" },
//   { color: "green", name: "greenName" },
//   { color: "yellow", name: "yellowName" },
// ];

// const result = myArray.map((d) => d.color).indexOf("blue");
// console.log(result);

const array = [
  { name: "foo1", value: "val1" },
  { name: "foo1", value: ["val2", "val3"] },
  { name: "foo2", value: "val4" },
  { name: "foo2", value: "val5" },
  { name: "foo3", value: ["val6", "valu7"] },
];
// [
//   { name: 'foo1', value: [ 'val1', 'val2', 'val3' ] },
//   { name: 'foo2', value: [ 'val4', 'val5' ] },
//   { name: 'foo3', value: [ 'val6', 'valu7' ] }
// ]

const newArray = array.map((obj) => {
  const { name, value } = obj;
  const newVal = typeof value === "string" ? [value] : value;

  return {
    name,
    value: newVal,
  };
});

const result = [];
newArray.map((obj) => {
  const { name, value } = obj;
});

const output = Object.keys(obj).map((key) => {
  console.log(key);
});

const output2 = array.map((obj) => {
  const { name, key } = obj;
  const newVal = typeof name === "string" ? true : false;
});

const { color, size, onClick, text } = props;
