// Task-1
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"]
// };
// console.log(apartment['price']);
// console.log(apartment.descr);
// console.table(apartment);
// console.table(Object.keys(apartment));
// console.table(Object.values(apartment));
// console.table(Object.entries(apartment));

// Task-2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com"}
// };
// console.table(Object.entries(apartment));
// console.table(Object.entries(apartment.owner));

// Task-3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log("aptRating", aptRating);
// const aptDescr = apartment.descr;
// console.log("aptDescr", aptDescr);
// const aptPrice = apartment.price;
// console.log("aptPrice", aptPrice);
// const aptTags = apartment.tags;
// console.log("aptTags", aptTags);
// // Change code above this line

//Task-4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// console.log("ownerName", ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log("ownerPhone", ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log("ownerEmail", ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log("numberOfTags", numberOfTags);
// const firstTag = apartment.tags[0];
// console.log("firstTag", firstTag);
// const lastTag = apartment.tags[2];
// console.log("lastTag", lastTag);
// // Change code above this line

// Task-5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// console.log("aptRating", aptRating);
// const aptDescr = apartment['descr'];
// console.log("aptDescr", aptDescr);
// const aptPrice = apartment['price'];
// console.log("aptPrice", aptPrice);
// const aptTags = apartment['tags'];
// console.log("aptTags", aptTags);
// // Change code above this line

// Task-6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log("apartment", apartment.price);
// console.log("apartment.rating", apartment.rating);
// console.log("apartment.owner.name", apartment.owner.name);
// console.log("apartment.tags", apartment.tags);

// Task-7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston"
// };
// console.log(Object.entries(apartment));

// Task-8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
//   console.log("product", product);

  //Task-9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };
// console.log(Object.entries(credentials));
// console.log("credentials", credentials);
    
// Task-10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log("keys", keys);
// console.log("values", values);

//Task-11
