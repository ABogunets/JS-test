//* Ex1from lecture - topic Promises
// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");


//* Ex2 from lecture
// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

  //* Ex-3
//   // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

//* Ex-4
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });

  //* Ex-5
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

//* Ex-6
// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

//* Ex-7
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));

// ! from Repeta Web2
// *Var1-with callback functions-without promises
// const makeOrder = (dish, onSuccess, onError) => {
//   const DELAY = 1000;

//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) { onSuccess('here is your dish!'); }
//     else { onError('sorry, products are out of stock')}
//   }, DELAY);
// };
// makeOrder('pasty', onMakeOrderSuccess, makeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }
// function makeOrderError (error) {
//   console.log('makeOrderError');
//   console.log(error);
// }
// *Var2-the same with promises
// const makeOrder = (dish) => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) { resolve(`here is your order: ${dish}`); }
//       reject('sorry, products are out of stock');
//     }, DELAY);
//   });
// };

// makeOrder('pasty').then(onMakeOrderSuccess).catch(makeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }
// function makeOrderError (error) {
//   console.log('makeOrderError');
//   console.log(error);
// }
//* One more example
// const makePromise = () => {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       const passed = Math.random() > 0.5;
//       if (passed) {
//         resolve('Cool! This is resolve!');
//       }
//       reject('Everything is lost..this is reject');
//     }, 2000);
//   })
//   };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


