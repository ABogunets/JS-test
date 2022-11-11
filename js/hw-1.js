//HW-1

// Task-1
// const productName = "Droid";
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

// Task-2
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// console.log(productName);

// pricePerItem = pricePerItem + 1500;
// console.log(pricePerItem);

//Task-3
// const topSpeed = 160;
// const distance = 617.54;
// let login = "mango935";
// let isOnline = true;
// const isAdmin = false;

// console.log(topSpeed, distance, login, isOnline, isAdmin);

// Task-4
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//Task-5
// const productName = "Droid";
// const pricePerItem = 3500;
// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//Task-6
// let orderedQuantity;
// orderedQuantity = 6;
// let pricePerDroid;
// pricePerDroid = 800;
// let deliveryFee;
// deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log("message", message);

//Task-7
// function sayHi() {
//     console.log("Hello, this is my first function!");
// };
// sayHi();

//Task-8
// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
 
//Task-9
// function add(a, b, c) {
//   // Change code below this line
//     return a + b + c;

//   // Change code above this line
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//Task-10
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };
// console.log(makeMessage('Apple', 20));

//Task-11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Change code above this line
//   return totalPrice;
// };

//Task-12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }
// console.log("makeOrderMessage ~ message", makeOrderMessage(5, 4, 3));

//Task-13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age>=18;
// console.log(passed);
//   // Change code above this line
//   return passed;
// }
// isAdult(15);

//Task-14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   console.log("isValidPassword ~ isMatch", isMatch);

//   // Change code above this line
//   return isMatch;
// }
// isValidPassword("jqueryismyjam")

//Task-15
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//     console.log("checkAge ~ message", message);
//   return message;
// }
// checkAge(19);

//Task-16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = 'Not enough goods in stock!'
//   } else {message = 'Order is processed, our manager will contact you.'};
//   console.log("checkStorage ~ message", message);
//   // Change code above this line
//   return message;
// }
// checkStorage(20,21);

// Task-17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a,b,c,d);

// Task-18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//   };
//     console.log("makeTransaction ~ message", message);
//   // Change code above this line
//   return message;
// }
// makeTransaction(10, 5, 45);

// Task-19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//     console.log("checkPassword ~ message", message);
//   return message;
// }
// checkPassword('jqmyjam');

// Task-20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!"
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!"
//   } else {message = "The order is accepted, our manager will contact you"};
//   console.log("checkStorage ~ message", message);
//   // Change code above this line
//   return message;
// }
// checkStorage(20,0);

//Task-21