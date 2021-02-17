// Q2
// update title "Make bed" to completed true
let state = {
  todos: [
    { id: 1, title: "Eat breakfast", completed: false },
    { id: 2, title: "Make bed", completed: false },
  ],
};

state = {
  ...state,
  todos: state.todos.map((d) => (d.id === 2 ? { ...d, completed: true } : d)),
};
console.log(JSON.stringify(state));

// const id = 1;
// const elementsIndex = state.todos.findIndex((element) => element.id == id);
// let newArray = [...state.todos];
// newArray[elementsIndex] = {
//   ...newArray[elementsIndex],
//   completed: !newArray[elementsIndex].completed,
// };
// state = {
//   ...state,
//   todo: newArray,
// };
