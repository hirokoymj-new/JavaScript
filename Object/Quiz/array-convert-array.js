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

const output = [];
friends.forEach((d) => {
  output.push(...d.books);
});

const output = friends.reduce((acc, currentValue) => {
  acc.push(...currentValue.books);
  return acc;
}, []);

console.log(output);

// [
//   'Bible',
//   'Harry Potter',
//   'War and peace',
//   'Romeo and Juliet',
//   'The Lord of the Rings',
//   'The Shining'
// ]
