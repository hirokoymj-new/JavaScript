const initial = [
  { id: 0, value: false },
  { id: 1, value: false },
];

//　Update id:1 value to "true"
// const initial = [
//     { id: 0, value: false },
//     { id: 1, value: true },
// ];
const output = initial.map((d) => (d.id === 1 ? { ...d, value: true } : d));

console.log(output);
