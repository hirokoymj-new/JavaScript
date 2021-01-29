const employees = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

// Result
/*
[
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'html', user: [ 'Sue' ], count: 1 } 
];
*/

const output = employees.reduce((acc, currentValue) => {
  const matched = acc.find((value) => value.skill === currentValue.skill);
  if (matched) {
    matched.user.push(currentValue.user);
    matched.count++;
  } else {
    currentValue.user = [currentValue.user];
    currentValue.count = 1;
    acc.push(currentValue);
  }
  return acc;
}, []);

console.log(output);
