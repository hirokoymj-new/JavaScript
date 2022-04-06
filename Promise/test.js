// // Example 1
// // setTimeout(function () {
// //   console.log("I am an asynchronous message");
// // }, 1000);

// // console.log("I am a synchronous message");

// // ===2. Asynchronous code is always executed after the main thread
// setTimeout(function () {
//   console.log("I am an asynchronous message");
// }); // You can omit the 0

// console.log("Test 1");

// for (let i = 0; i < 10; ++i) {
//   console.log("for loop" + i);
//   doSomeStuff();
// }

// console.log("Test 2");

// // The 'I am an asynchronous message' will be displayed when the main thread reach here

// function doSomeStuff() {
//   return 1 + 1;
// }

// // 3. Asynchronous code using setInterval
// let counter = 0;

// let timer = setInterval(function () {
//   console.log("I am an asynchronous message");

//   counter += 1;

//   if (counter >= 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// console.log("I am a synchronous message");

// const job = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hello world");
//   }, 2000);
// });

// job.then((data) => {
//   console.log(data + "1");
// });

// module.exports = job;

// promise.then(
//   function success(data) {
//     console.log(data + " 2");
//   },
//   function error(data) {
//     console.error(data + " 2");
//   }
// );

// promise.then(
//   function success(data) {
//     console.log(data + " 3");
//   },
//   function error(data) {
//     console.error(data + " 3");
//   }
// );
