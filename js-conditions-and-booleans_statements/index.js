console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

// if (receivedPassword === SUPER_SECRET_PASSWORD) {
//   console.log("Welcome! You are logged in as Brunhilde1984.");
// } else {
//   console.log("Access denied!");
// }

console.log(
  receivedPassword === SUPER_SECRET_PASSWORD
    ? "Welcome! You are logged in as Brunhilde1984."
    : "Access denied!"
);

// Part 2: Even / Odd ( template literals)
const number = 6;
// if (number % 2 === 0) {
//   console.log(`${number} is an even number `);
// } else {
//   console.log(`${number} is an odd number `);
// }

// number % 2 === 0
//   ? console.log(`${number} is an even number `)
//   : console.log(`${number} is an odd number `);

console.log(`${number} is an ${number % 2 ? "even" : "odd"} number `);

// Part 3: Hotdogs

const numberOfHotdogs = 125;
const price =
  numberOfHotdogs < 5
    ? numberOfHotdogs * 2
    : numberOfHotdogs < 100
    ? numberOfHotdogs * 1.5
    : numberOfHotdogs < 1000000
    ? numberOfHotdogs * 1
    : numberOfHotdogs * 0.1;

console.log(`you have to pay ${price}`);
// const numberOfHotdogs = 42;
// let price;

// if (numberOfHotdogs < 5) {
//   price = numberOfHotdogs * 2;
// } else if (5 <= numberOfHotdogs && numberOfHotdogs < 100) {
//   price = numberOfHotdogs * 1.5;
// } else if (100 <= numberOfHotdogs && numberOfHotdogs < 1000000) {
//   price = numberOfHotdogs * 1;
// } else if (numberOfHotdogs >= 1000000) {
//   price = numberOfHotdogs * 0.1;
// }

// console.log(price);

// const numberOfHotdogs = 60;

// let price =
//   numberOfHotdogs < 5 ? numberOfHotdogs * 2 :
//   numberOfHotdogs >= 5 && numberOfHotdogs < 100 ? numberOfHotdogs * 1.5 :
//   numberOfHotdogs >= 100 && numberOfHotdogs < 1000000 ? numberOfHotdogs * 1 :
//   numberOfHotdogs >= 1000000 ? numberOfHotdogs * 0.1 :
//   undefined;

// console.log(price);

// Part 4: Daytime
const currentHour = 12;
// let statement;
// currentHour < 17
//   ? (statement = "Still need to learn...")
//   : (statement = "Partytime!!!");

// console.log(statement);

console.log(currentHour < 17 ? "Still need to learn..." : "Partytime!!!");

// Part 5: Greeting
const name = "Mary";

const greeting = "Hello " + (name === "Roland" ? "Coach!" : `${name}!`);

console.log(greeting);
