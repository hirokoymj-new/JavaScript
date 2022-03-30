// const MyPromise = new Promise((resolve, reject) => {
//   resolve("task1");
// });
// MyPromise.then((value) => {
//   //async
//   console.log(value);
// });
// console.log("task2");
// console.log("task3");

// // task2
// // task3
// // task1

// // Create async method
// const resolvedProm = Promise.resolve(33);
// // async
// let thenProm = resolvedProm.then((value) => {
//   console.log("this gets called after the end of the main stack. " + value);
//   return value;
// });
// // no async
// console.log(thenProm);

// // async
// setTimeout(() => {
//   console.log(thenProm);
// });

// Promise{pending}
// this gets called after the end of the main stack. 33

// Promise.resolve("foo")
//   .then(function (string) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         string += "bar"; //foobar
//         resolve(string);
//       }, 1);
//     });
//   })
//   .then(function (string) {
//     setTimeout(function () {
//       string += "baz";
//       console.log(string); //foobaz
//     }, 1);
//     return string;
//   })
//   .then(function (string) {
//     console.log(
//       "Last Then:  oops... didn't bother to instantiate and return " +
//         "a promise in the prior then so the sequence may be a bit " +
//         "surprising"
//     );

//     console.log(string);
//   });

var p1 = new Promise(function (resolve, reject) {
  resolve("Success");
});

p1.then(function (value) {
  console.log(value); // <-- Calls first
  throw "oh, no!";
})
  .catch(function (e) {
    console.log(e); // <-- Calls second
  })
  .then(
    function () {
      //<-- Calls third!! !!After a catch this executes
      console.log("after a catch the chain is restored");
    },
    function () {
      // onReject method
      console.log("Not fired due to the catch");
    }
  );
("Success");
("after a catch the chain is restored");
