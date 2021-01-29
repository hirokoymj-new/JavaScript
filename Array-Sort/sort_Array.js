// [Array.sort] for Array
// The default sort order is according to string Unicode code points.
// To compare the numbers instead of string the compare function can simply subtract b from a.


var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); //["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21];
array1.sort();
console.log(array1);//[1, 21, 30, 4]

var data = ['March', 'Jan', 'Feb', 'Dec'];
const sortByMonth = (array) =>{
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
  array.sort((a, b) => months.indexOf(a) - months.indexOf(b));
  return array;
};
const output = sortByMonth(data);
console.log(output); //[ 'Jan', 'Feb', 'March', 'Dec' ]


// const sortMonth = (array) => {
//   const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
//   array.sort((a,b) => months.indexOf(a) - months.indexOf(b));
//   return array;
// }

var dataCollection = [
  { values: { Month: { displayValue: "August" }, Sum: "10" } },
  { values: { Month: { displayValue: "February" }, Sum: "25" } },
  { values: { Month: { displayValue: "July" }, Sum: "35" } }
];

const sortByMonth2 = (array) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  array.sort((a,b) => {
    let num = months.indexOf(a.values.Month.displayValue) - months.indexOf(b.values.Month.displayValue);
    console.log(num);
    return num;
          
  });
}

const output5 = sortByMonth2(dataCollection);
console.log(output5);


// function sortByMonth(arr) {
//   var months = ["January", "February", "March", "April", "May", "June",
//   	        "July", "August", "September", "October", "November", "December"];
//   arr.sort(function(a, b){
//       return months.indexOf(a.values.Month.displayValue)
//            - months.indexOf(b.values.Month.displayValue);
//   });
// }