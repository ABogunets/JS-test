//TODO TASK-1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// console.log("result", result);
// const pointer = makePizza;
// console.log("pointer", pointer);


//TODO TASK-2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

//TODO TASK-3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) { console.log(`Eating pizza ${pizzaName}.`) });


//TODO TASK-4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     };
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//TODO TASK-5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function(number) {
//     totalPrice += number;
//   });

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//TODO TASK-6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(function (number) {
//     if (number > value) { filteredNumbers.push(number) }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//TODO TASK-7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     };
//   });

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//TODO TASK-8
// // Change code below this line

// // function calculateTotalPrice(quantity, pricePerItem) {
// //   // Change code above this line
// //   return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100));

//TODO TASK-9
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

//TODO TASK-10
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => totalPrice += item);
//   return totalPrice;
// }
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));


//TODO TASK-11
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


//TODO TASK-12
// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//TODO TASK-13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {newArray.push(numbers[i])};
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//TODO TASK-14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log("planetsLengths", planetsLengths);

//TODO TASK-15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log("titles", titles);

//TODO TASK-16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log("genres", genres);

//TODO TASK-17
// // Change code below this line
// const getUserNames = users => {
// return users.map(user => user.name);
// };
//   // Change code above this line
//   console.log(getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]));

//TODO TASK-18
// // Change code below this line
// const getUserEmails = users => {
//   return users.map(user => user.email);

//   };
//   // Change code above this line

//TODO TASK-19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => !(number % 2 === 0));

// console.log("evenNumbers", evenNumbers);
// console.log("oddNumbers", oddNumbers);

//TODO TASK-20 - filtering unique element
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log("allGenres", allGenres);
// console.log("uniqueGenres", uniqueGenres);

//TODO TASK-21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);

// console.log("topRatedBooks", topRatedBooks);
// console.log("booksByAuthor", booksByAuthor);

//TODO TASK-22
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({eyeColor}) => eyeColor === color);
// };
// // Change code above this line
// const exampleObject = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// console.log(getUsersWithEyeColor(exampleObject, "blue"));

//TODO TASK-23
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//    return users.filter(({age}) => age > minAge && age < maxAge);
// };
// Change code above this line
// const exampleObject = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// console.log(getUsersWithAge(exampleObject, 20, 30));

//TODO TASK-24
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };
// // Change code above this line
// const exampleObject = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// console.log(getUsersWithFriend(exampleObject, "Goldie Gentry"));

//TODO TASK-25
// // Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);

// };
// // Change code above this line
// console.log(getFriends(exampleObject));

//TODO TASK-26
// // Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(({isActive}) => isActive);
   
// };
// // Change code above this line
// console.log(getActiveUsers(exampleObject));

//TODO TASK-27
// // Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(({isActive}) => !isActive);
   
// };
// // Change code above this line
// console.log(getInactiveUsers(exampleObject));

//TODO TASK-28
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(({title}) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({author}) => author === AUTHOR);

// console.log("bookWithTitle", bookWithTitle);
// console.log("bookByAuthor", bookByAuthor);

//TODO TASK-29
// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
   
// };
// // Change code above this line
// const objectExample = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// console.log(getUserWithEmail(objectExample, "shereeanthony@kog.com"));

//TODO TASK-30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// console.log("eachElementInFirstIsEven", eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every(number => !(number % 2 === 0));
// console.log("eachElementInFirstIsOdd", eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);;
// console.log("eachElementInSecondIsEven", eachElementInSecondIsEven);
// const eachElementInSecondIsOdd = secondArray.every(number => !(number % 2 === 0));;
// console.log("eachElementInSecondIsOdd", eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);;
// console.log("eachElementInThirdIsEven", eachElementInThirdIsEven);
// const eachElementInThirdIsOdd = thirdArray.every(number => !(number % 2 === 0));;
// console.log("eachElementInThirdIsOdd", eachElementInThirdIsOdd);

//TODO TASK-31
// // Change code below this line
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive);
   
// };
// // Change code above this line

//TODO TASK-32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => !(number % 2 === 0));

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => !(number % 2 === 0));

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => !(number % 2 === 0));

//TODO TASK-33
// // Change code below this line
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
   
// };
// // Change code above this line

//TODO TASK-34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, time) => total + time);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log("averagePlayTime", averagePlayTime);

//TODO TASK-35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// },0);
// console.log("totalAveragePlaytimePerGame", totalAveragePlaytimePerGame);


//TODO TASK-36
// // Change code below this line
// const calculateTotalBalance = users => users.reduce((totalBalance, friend) => totalBalance + friend.balance, 0);

// // Change code above this line
// const exampleObject =
//   [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// console.log(calculateTotalBalance(exampleObject));


//TODO TASK-37
// // Change code below this line
// const getTotalFriendCount = users => users.reduce((totalFriends, friend) => totalFriends + friend.friends.length, 0);

// // Change code above this line
// console.log(getTotalFriendCount(exampleObject));

//TODO TASK-38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log("ascendingReleaseDates", ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log("alphabeticalAuthors", alphabeticalAuthors);

//TODO TASK-39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log("ascendingReleaseDates", ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log("descendingReleaseDates", descendingReleaseDates);

//TODO TASK-40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log("authorsInAlphabetOrder", authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log("authorsInReversedOrder", authorsInReversedOrder);


//TODO TASK-41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// console.log("sortedByAuthorName", sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// console.log("sortedByReversedAuthorName", sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// console.table("sortedByAscendingRating", sortedByAscendingRating);


// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
// console.table("sortedByDescentingRating", sortedByDescentingRating);

//TODO TASK-42
// // Change code below this line
// const sortByAscendingBalance = users =>
//   users.sort((firstObject, secondObject) => firstObject.balance - secondObject.balance);

// // Change code above this line
// console.table(sortByAscendingBalance(exampleObject));

//TODO TASK-43
// // Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
   
// };
// // Change code above this line
// console.table(sortByDescendingFriendCount(exampleObject));


//TODO TASK-44
// Change code below this line
// const sortByName = users => {
//   return [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));

// };
// // Change code above this line
// console.table(sortByName(exampleObject));

//TODO TASK-45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort();
// console.table("names", names);
// // 1-filter rating>MIN_book
// // 2-map
// // sort by ABC

//TODO TASK-46
// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//     .map(user => user.name);
   
// };
// // Change code above this line
// // 1-sort
// // 2-map
// const exampleObject = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ] 

// console.table(getNamesSortedByFriendCount(exampleObject));

//TODO TASK-47
// // Change code below this line
// const getSortedFriends = users => {
//   return users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort()
   
// };
// // Change code above this line
// // 1 flatmap; 2 filter 3 sort
// console.table(getSortedFriends(exampleObject));

//TODO TASK-48
// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//   .filter(user => user.gender === gender)
//   .reduce((totalBalance, user) => totalBalance + user.balance, 0)
// };
// // Change code above this line
// // 1-filter by gender
// // 2-reduce - totalbalance
// console.table(getTotalBalanceByGender(exampleObject, "female"));