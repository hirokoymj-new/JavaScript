const array = [5, 6, 1, 3]; //4

const max = Math.max(...array); //6
const min = Math.min(...array); //1

const missingNum = [];

for (let i = min; i <= max; i++) {
  const found = array.find((value) => value === i);
  if (!found) missingNum.push(i);
}

console.log(missingNum.toString());
