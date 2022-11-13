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
// function isNumberInRange(start, end, number) {
//   const isInRange = number>=start && number<=end; // Change this line
//   console.log("isNumberInRange ~ isInRange", isInRange);

//   return isInRange;
// }
// isNumberInRange(1, 10, 11);

//Task-22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line
//   console.log("canAccessContent", canAccessContent);

//   return canAccessContent;
// }
// checkIfCanAccessContent('vip');

//Task-23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   console.log("isNotInRange", isNotInRange);

//   return isNotInRange;
// }
// isNumberNotInRange(1, 10, 11);

//Task-24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else
//   if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else
//   if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   }
//     else { discount = 0 };
//   console.log("discount", discount);

//   // Change code above this line
//   return discount;
// }
// getDiscount(60000);

//Task-25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   console.log("message", message);
//   // Change code above this line
//   return message;
// }
// checkStorage(20, 21);

//Task-26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   console.log("message", message);
//   // Change code above this line
//   return message;
// }
// checkPassword('jqueryismyjam2');

//Task-27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   console.log("price", price);
//   // Change code above this line
//   return price;
// }
// getSubscriptionPrice('organization');

//Task-28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
  
//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }
//   console.log("message", message);

//   // Change code above this line
//   return message;
// }
// checkPassword(null);

//Task-29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   console.log("message", message);
//   return message;
// }
// getShippingCost('Jamaica');

//Task-30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   console.log("message", message);
//   return message;
// }
// getNameLength('brother');

//Task-31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line
// console.log("courseTopicLength", courseTopicLength);
// console.log("firstElement", firstElement);

//Task-32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line
//   console.log("length", string.length);
//   console.log("substring", substring);
//   return substring;
// }
// getSubstring("Hello world", 3);

//Task-33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   /// Change code above this line
//     console.log("result", result);
//   return result;
// }
// formatMessage('Curabitur ligula sapien', 16);

//Task-34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
//   console.log("normalizedInput", normalizedInput);

//   return normalizedInput;
// }
// normalizeInput('HeLlO');

//Task-35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   console.log("result", result);
//   return result;
// }
// checkForName('John Smith', 'JohN');

//Task-36
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//     result = true;
//   } else {
//     result = false;
//   }
//   console.log("result", result);
//   // Change code above this line
//   return result;
// }
// checkForSpam('Amazing SalE, only tonight!');

