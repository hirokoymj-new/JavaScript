//Count the items and sorted by large count.

// var array = ["red", "yellow", "red", "blue", "blue", "red"];
// // convert 
// // [
// //   {color: red, count: 3},
// //   {color: yellow, count: 1},
// //   {color: blue, count: 2}
// // ]

// const output = array.reduce(function(acc, currentValue){
//   //check existing
//   let existing = acc.map(obj => obj.color).indexOf(currentValue);
//   if(existing > -1){
//     acc[existing]['count']++;
//   }else{
//     const tmp = {}
//     tmp.count = 1;
//     tmp.color = currentValue;
//     acc.push(tmp);
//   }
//   return acc;
// }, []);

// console.log(output);
// // Sort
// output.sort((a,b)=> (b.count - a.count));
// console.log(output);

// // Decending order
// var array = [1, 30, 4, 21];
// array.sort((a,b)=> a < b ? 1 : -1);
// console.log(array);
// //[ 30, 21, 4, 1 ]

// Acending order
//(a<b) return -1 // acending order
//(a<b) return 1 // decending order

var array = [1, 30, 4, 21];
array.sort((a,b)=> a < b ? -1 : 1);
console.log(array);
//[ 1, 4, 21, 30 ]



