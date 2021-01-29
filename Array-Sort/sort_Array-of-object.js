var dataCollection = [
  { values: { Month: "August", Sum: "10" } },
  { values: { Month: "February", Sum: "25" } },
  { values: { Month: "July", Sum: "35" } }
];

const sortByMonth = (array) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  array.sort((a,b) => {
    let num = months.indexOf(a.values.Month) - months.indexOf(b.values.Month);
    //console.log(num);
    return num;
  });
}

sortByMonth(dataCollection);
console.log(dataCollection);




// var dataCollection = [
//   { values: { Month: "August", Sum: "10" } },
//   { values: { Month: "February", Sum: "25" } },
//   { values: { Month: "July", Sum: "35" } }
// ];

// sortByMonth(dataCollection);

// console.log(dataCollection);

// function sortByMonth(arr) {
//   var months = ["January", "February", "March", "April", "May", "June",
//   	        "July", "August", "September", "October", "November", "December"];
//   arr.sort(function(a, b){
//       return months.indexOf(a.values.Month)
//            - months.indexOf(b.values.Month);
//   });
// }

// https://stackoverflow.com/questions/37349331/javascript-sort-items-list-by-months