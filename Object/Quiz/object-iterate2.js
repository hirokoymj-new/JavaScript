let user = {
  name: "John",
  age: 30,
  days: ["mon", "tue"],
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

let output = {};
for ([key, value] of Object.entries(user)) {
  let output = { ...user };
  output.age = 20;
}

console.log(output);

// Question - update age to 30
let output2 = { ...user, age: 30 };

// Question - update days to add Thursday.
const newValDays = [...user.days, "Thr"];
const output3 = { ...user, days: newValDays };
console.log(output3);
