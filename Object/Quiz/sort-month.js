const data = ["March", "Jan", "Feb", "Dec"];
const months = [
  { num: 1, name: "Jan" },
  { num: 2, name: "Feb" },
  { num: 3, name: "March" },
  { num: 4, name: "April" },
  { num: 5, name: "May" },
  { num: 6, name: "June" },
  { num: 7, name: "July" },
  { num: 8, name: "August" },
  { num: 9, name: "Sep" },
  { num: 10, name: "Oct" },
  { num: 11, name: "Nov" },
  { num: 12, name: "Dec" },
];

data.sort((a, b) => {
  const obj1 = months.find((d) => d.name === a);
  const obj2 = months.find((d) => d.name === b);
  return obj1.num < obj2.num ? -1 : 1;
});

console.log(data);
