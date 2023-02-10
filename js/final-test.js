// * 1
// const value = 5;
// const value = 'bunny';
// console.log(value);


// * 2
// let value = 20;

// if (true) {
// console.log(value);
// let value = 10;
// }

// *3
// const value;
// value = 10;
// console.log(value);

// *4
// const max = 10;
// let amount = 0;

// while(amount++ < max) {
// let sum += amount;
// }

// *5
// const person = {
// firstName: 'Jacob',
// showName() {
// console.log(this.firstName);
// },
// };
// const foo = function(callback) {
// callback();
// };
// foo(person.showName);
// foo(person.showName.bind(person));

// 6*
// const add = (a = 0, b = 10) => a + b;
// const result = add(10);
// console.log(result);

// *7
// const sum = (... numbers) => numbers.reduce((total, number) => total + number, 2);
// const result = sum(1, 5, 20, 10);
// console.log(result);

//*8
// const multiplyByValue = (value, base, ...numbers) => {
// return numbers.map(number => number * value + base);
// };
// console.log(multiplyByValue(2, 100, 1, 5, 20, 10));

// *9
// const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
// console.log(names);

//*10
// const min = Math.min (... [1, 5, -1, -10]);
// console.log(min);

//*11
// const name = 'bob';
// const age = 20;
// const obj = {
// name,
// age
// };

// console.log(obj);

//*12
// const confused = 'no';
// const myKey = confused;

// const obj = {
// [myKey]: false,
// };

// console.log(obj);

//*13
// const piece = {
// x: 0,
// y: 0,
// move(x, y) {
// this.x = x;
// this.y = y;
// },
// };

// piece.move(10, 10);

//*14
// const [a,,b] = 'JavaScript is awesome'.split(' ');
// console.log(a, b);

//*15
// const { name, age, gender = 'm', hairColor: color } = {
// name: 'Jacob',
// age: 20,
// hairColor: 'blue',
// };

// console.log(name, age, gender, color);

//*16
// const dog = {name: 'Poly'};

// function showDogName() {
// console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);
// console.log('boundShowDogName :>> ', boundShowDogName);
// boundShowDogName();

//*17
// const userA = {
// name: 'Mango',
// age: 5,
// };

// const userB = {
// ...userA,
// age: 10,
// happy: true,
// };

// console.log(userB);

// *18
// const fn = (arr, value) => arr.filter(el => el > value);

// console.log(fn([1, 2, 3, 4, 5], 3));



