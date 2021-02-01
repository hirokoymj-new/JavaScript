const friends = [
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

/*
[ 'Bible',
  'Harry Potter',
  'War and peace',
  'Romeo and Juliet',
  'The Lord of the Rings',
  'The Shining' ]
 */

const output = friends.reduce((acc, currentValue) => {
  currentValue.books.forEach((value) => {
    acc.push(value);
  });
  return acc;
}, []);

// console.log(output);

// New output - Array
// Loop - reduce
// condition - three dot or forEach or concat()
//
const output2 = friends.reduce((acc, currentValue) => {
  const newVal = acc.concat(currentValue.books);
  return newVal;
}, []);
console.log(output2);
