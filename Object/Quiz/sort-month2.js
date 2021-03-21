const data = ["March", "Jan", "August", "Dec"];
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

data.sort((a, b) => {
  return months.indexOf(a) < months.indexOf(b) ? -1 : 1;
});

console.log(data);
