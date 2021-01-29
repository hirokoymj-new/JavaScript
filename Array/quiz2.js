var employees = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// const result = employees.filter(d=>d.skill==="javascript");
// console.log(result);


// const employees2 = [
//   {skill: 'css', count: 2},
//   {skill: 'javascript', count: 3},
//   {skill: 'html', count: 1},
// ]

const result = employees.reduce((acc, currentValue)=>{
  let existing = acc.map(d => d.skill).indexOf(currentValue.skill);
  if(existing === -1){ //NEW
    const obj = {}
    obj.skill = currentValue.skill;
    obj.count = 1;
    acc.push(obj);
  }else{
    acc[existing].count++;
  }
  return acc;
}, []);

console.log(result);