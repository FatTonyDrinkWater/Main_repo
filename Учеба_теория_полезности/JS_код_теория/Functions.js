"use strict";

// Function declaration (FKW first)
function juiceMaker(fruit) {
  const juice = `Enjoy your ${fruit} juice`;
  return juice;
}
// calling, running, invoking
const appleJuice = juiceMaker("apple");
console.log(appleJuice);

function calcAge1(yob) {
  return 2020 - yob; // можно ретернить результат выражения сразу, без переменной
}

const age1 = calcAge1(1993);
console.log(age1);

// FUNCTION EXPRESSION (after eqaul sign its expression that value store in const)
const calcAge2 = function (yob) {
  return 2020 - yob;
};
calcAge2(1994);
const age2 = calcAge2(1994);

// ARROW FUNCTION (autoReturns)
const calcAge3 = (yob) => 2020 - yob;
calcAge3(2025);

const yearsUntilRetirement = (yob, firstName) => {
  const age = 2020 - yob;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement}`;
};
yearsUntilRetirement(1985, "Jack");
yearsUntilRetirement(1965, "Jock");

// Function calling another function
function cutFruit(fruit) {
  return fruit * 8;
}

function juiceMaker(fruit) {
  const fruitPieces = cutFruit(fruit);
  return `Enjoy your ${fruit} juice, of ${fruitPieces} pieces`;
}

//Default params--------------------------------------------------------------
const booking = [];
const createBooking = function (
  flightNum,
  passengersNum = 1,
  price = 199 * passengersNum
) {
  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  booking.push(booking);
};

createBooking("LH123");

const flight = "MB242";
const jonas = {
  name: "Jonas",
  passport: 24235232,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "lh999";
  passenger.name = `Mr.${passenger.name}`;
  return passenger.passport === 24235232 ? "Check in" : "Wrong data";
};

console.log(checkIn(flight, jonas));
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(random() * 10000);
};

console.log(newPassport(jonas));

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transfomed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey!");
greeterHey(`Jonas`);
greeterHey(`Steven`);

greet(`Hello`)("Jonas");

// The Call and Apply method

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} 
      flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, "Jonas");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;
// Doesnt work
// book(23, "Sarah Williams");
book.call(eurowings, 23, `Sarah Williams`);

//Bind method----------------------------------------------------------------
const bookEW = book.bind(eurowings);
bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Jonas Schmedtmann`);
