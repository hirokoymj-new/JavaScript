// The code snippet below is synchronous.
// It calls callback1 one time and callback2 three times.You must modify this code to make it asynchronous with the following rules:

// callback1 must be called only one time, after 2 seconds.
// callback2 must be called three times with an interval of 1 second.

const callback1 = () => console.log("I am callback 1");
const callback2 = () => console.log("I am callback 2");

const job = (callback1, callback2) => {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(callback1, 2000);
  });
  promise.then(
    function success(data) {
      console.log(data + " 1");
    },
    function error(data) {
      console.error(data + " 1");
    }
  );

  //   setTimeout(callback1, 2000);
  //   let counter = 0;
  //   let timer = setInterval(() => {
  //     callback2();
  //     counter++;
  //     if (counter >= 3) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
};

job(callback1, callback2);
