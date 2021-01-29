// const data = [0,1,2,3,4,5,6,7,8,9]; //len 10
// let pageSize = 3;

// const page1 = data.slice(0, 3);
// const page2 = data.slice(3, 6);
// const page3 = data.slice(6, 9);
// const page4 = data.slice(9, 12);

// const max = Math.ceil(data.length/3);
// console.log(max);
// console.log(`${page1}, ${page2}, ${page3}`);

// const makePagination = (data, pageSize) =>{
//  const max = Math.ceil(data.length/pageSize);
//   for(let i=0; i<max; i++){
//     let start = i*pageSize;
//     let end = start + pageSize;
//     //console.log(`${start}, ${end}`)
//     console.log(`Page-${i+1}: ${data.slice(start, end)}`);
//   }
// }

//makePagination(data, 4);

// const array = [];
// console.log(array.length === 0);


// const emptyObj = {};
// console.log(Object.keys(emptyObj).length === 0);

// var array1 = [1, 30, 4, 21];
// array1.sort((a,b)=>a-b);
// console.log(array1);

// var dataCollection = [
//   { values: { Month: "August", Sum: "10" } },
//   { values: { Month: "February", Sum: "25" } },
//   { values: { Month: "July", Sum: "35" } }
// ];

// dataCollection.sort((a,b)=>{
//   return a.values.Sum - b.values.Sum;
// })
// console.log(dataCollection);



// dataCollection.sort((a, b)=> a.values.Sum - b.values.Sum);
// console.log(dataCollection);


// Create Pagination
const data = [1,2,3,4,5,6,7,8,9,10];
let pageSize = 3;
let max = Math.ceil(data.length/3);

for(let i=0; i<max; i++){
  let begin = i*pageSize;
  let end = begin + pageSize;
  //console.log(`${begin}, ${end}`);
  console.log(data.slice(begin, end))
}
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]
// [ 10 ]

