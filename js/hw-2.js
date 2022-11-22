//Task-1
// function checkAge(age) {
//   if (age >=18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(17));

//Task-2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//   return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line

// }
// console.log(checkPassword("jqueryismyjam"));

// Task-3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//  return "The order is accepted, our manager will contact you";
 
//   // Change code above this line
// }
// checkStorage(10, 9);
// console.log("checkStorage(10, 9)", checkStorage(10, 9));

//Task-4
// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

//Task-5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

//Task-6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log("fruits", fruits);

//Task-7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log("fruitsArrayLength", fruitsArrayLength);

//Task-8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log("lastElement", lastElement);

//Task-9
// function getExtremeElements(array) {
//   // Change code below this line
//   const lastElementIndex = array.length - 1;
//   return [array[0], array[lastElementIndex]];

//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

//Task-10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
//   console.table(splitMessage("how are you?"," " ));

  //Task-11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   return message.split(" ").length * pricePerWord;
//    // Change code above this line
// }
//   console.log(calculateEngravingPrice('how are you, Buddy?', 200));

  //Task-12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(['good', 'buy', 'America'], " "));

// Task-13
// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(" ").join('-');
//   return slug;

//   // Change code above this line
// }
// console.log(slugify("HoW ARe You?"));

// Task-14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log("firstTwoEls", firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log("nonExtremeEls", nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log("lastThreeEls", lastThreeEls);

//Task-15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log("allClients", allClients);

//Task-16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
//     // Change code above this line
// }
// console.log(makeArray([1, 2, 3, 4], [5, 6, 7], 5));

// Task-17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

//Task-18
// function calculateTotal(number) {
//  // Change code below this line
//   let sumOfNumber = 0;
//   for (let i = 1; i <= number; i += 1) {
//   sumOfNumber += i;
//   }
//   return sumOfNumber;
//   // Change code above this line
// }
// console.log(calculateTotal(24));

//Task-19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Task-20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   } 
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([1, 2, 3, 4, 5]));

// Task-21
// function findLongestWord(string) {
//   // Change code below this line
  
//   const Array = string.split(" ");
//   console.log("Array", Array);
  
//   let wordOfMaxLength = Array[0];
//   for (let i = 0; i < Array.length; i += 1) {
//     if (Array[i].length > wordOfMaxLength.length) {
//       wordOfMaxLength = Array[i];
//       console.log("wordOfMaxLength", wordOfMaxLength);
//     }
//   }
//   return wordOfMaxLength;
  
//   // Change code above this line
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

//Task-22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) { 
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(7, 15));

// Task-23
// function filterArray(numbers, value) {
//    // Change code below this line
//   const newNumbers = [];
//   // Variant with index
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     newNumbers.push(numbers[i]);
//   //   }
//   // } 

//   for (const Number of numbers) {
//     if (Number > value) {
//       newNumbers.push(Number);
//     }
//   }
//   return newNumbers;

//   // Change code above this line
// }
// console.log(filterArray([2, 5, 7, 1, 8], 2));

//Task-24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('pear'));

//Task-25
