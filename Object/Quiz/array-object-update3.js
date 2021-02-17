const data = [
  {
    userId: 1,
    id: 100,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 101,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 102,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 103,
    title: "et porro tempora",
    completed: true,
  },
];

const newState = data.map((obj) =>
  obj.id === 101 ? { ...obj, completed: true } : obj
);
console.log(newState);

// https://stackoverflow.com/questions/4689856/how-to-change-value-of-object-which-is-inside-an-array-using-javascript-or-jquer/45341595
