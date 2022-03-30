# Promise

## Asynchronous Methods

- A common use of promises is HTTP request method.
- We are using asynchronous methods withtout knowing Promise. Here are some asynchronous methods.

- [windows.fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - browser built-in
- [$.ajax()](http://api.jquery.com/jquery.ajax/) - jQuery
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) - ES6
- [window.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) - JavaScript
- [response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)

## Promise Constructor

> The Promise object represents an asynchronous operation, and its resulting value.

```js
const ps = new Promise(/* executor */ (resolve, reject) => {});
```

**Example**
Check to see **the order** how the function calls

```js
const promise1 = new Promise((resolve, reject) => {
  resolve("task1");
});
promise1.then((value) => {
  console.log(value); //<---- Calls it third
});
console.log("task2"); //<---- Calls it first
console.log("task3"); //<---- Calls it second
// task2
// task3
// task1
```

## Promise status

1. **pending**: initial state, neither fulfilled nor rejected.
2. **fulfilled**: meaning that the operation completed successfully.
3. **rejected**: meaning that the operation failed.

# Promise methods

## Promise.then()

- The then() method returns a Promise.
- It takes up to two callback functions - 1)success and 2) failure cases of the Promise.
- [Promise.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value)

```js
p.then(onFulfilled[, onRejected]);

p.then((value) => {
  // fulfillment
}, (reason) => {
  // rejection
});
```

**Example**

```js
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then((value) => {
  console.log("this gets called after the end of the main stack. " + value); //<-- 3. Calls third.
  return value; //<-- 4. Calls forth
});
console.log(thenProm); //<--- 1. Calls first

setTimeout(() => {
  //<--- 2. Calls second
  console.log(thenProm);
});

// Promise {<pending>}
// this gets called after the end of the main stack. the value received and returned is: 33
// Promise {<resolved>: 33}
```

**Example**

```js
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(function (string) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += "bar";
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then(function (string) {
    setTimeout(function () {
      string += "baz";
      console.log(string);
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then(function (string) {
    console.log(
      "Last Then:  oops... didn't bother to instantiate and return " +
        "a promise in the prior then so the sequence may be a bit " +
        "surprising"
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string);
  });

// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

## Promise.catch()

- The catch() method returns a Promise and deals with rejected cases only.
- Because catch returns promise so the method AFTER catch will be executed!
- [promise.catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

**Example**

- Check and see the order how the function calls
- POINT - After a catch the method keeps call.

```js
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

// "Success!"
// "oh, no!"
// 'after a catch the chain is restored
```

**Output**

```text
"Success!"
"oh, no!"
'after a catch the chain is restored
```

<hr />

# Quiz

**Q1:**

- Asynchronous Methods

**Q1: Answer**

1. ES6 - Promise ( const p1 = new Promise())
2. fetch()
3. setTimeout()

<hr />

**Q2:**
ES6 Promise constructor

**Q2: Answer**

```js
const ps = new Promise((resolve, reject) => {});
```

<hr />

**Q3:**
Promise status

**Q3: Answer**

1. pending, 2. fullfilled = success, 3 rejected

<hr />

**Q4:**
Promise then function

**Q4:Answer**

```js
p.then(onFulfilled[, onRejected]);

p.then((value) => {
// fulfillment
}, (reason) => {
// rejection
});
```

<hr />

**Q5:**

```js
const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then((value)=>{
    console.log("this gets called after the end of the main stack. " + value); third.
    return value;
});
console.log(thenProm);

setTimeout(()=>{
    console.log(thenProm);
});
```

```js
// Promise {<pending>}
// this gets called after the end of the main stack. the value received and returned is: 33
// Promise {<resolved>: 33}
```

<hr />

**Q6:**

```js
Promise.resolve("foo")
  .then(function (string) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        string += "bar";
        resolve(string);
      }, 1);
    });
  })
  .then(function (string) {
    setTimeout(function () {
      string += "baz";
      console.log(string);
    }, 1);
    return string;
  })
  .then(function (string) {
    console.log(
      "Last Then:  oops... didn't bother to instantiate and return " +
        "a promise in the prior then so the sequence may be a bit " +
        "surprising"
    );
    console.log(string);
  });
```

```js
// logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

<hr />

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Success");
});

p1.then(function (value) {
  console.log(value);
  throw "oh, no!";
})
  .catch(function (e) {
    console.log(e);
  })
  .then(
    function () {
      console.log("after a catch the chain is restored");
    },
    function () {
      console.log("Not fired due to the catch");
    }
  );
```

```js
// "Success!"
// "oh, no!"
// 'after a catch the chain is restored
```
