let user = {
  name: "John",
  age: 30,
};

// console.log(Object.keys(user));
// //[ 'name', 'age' ]

// console.log(Object.values(user));
// // [ 'John', 30 ]

// console.log(Object.entries(user));
//[ [ 'name', 'John' ], [ 'age', 30 ] ]

for (key in user) {
  console.log(`${key}, ${user[key]}`);
}

for ([key, value] of Object.entries(user)) {
  console.log(`${key}, ${value}`);
}
