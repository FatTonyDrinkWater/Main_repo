const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.length);
console.log("B37".length);

// INDEXof -------------------------------------------------------------------
// Найти индекс определенного символа
airline.indexOf("r");
// Последнее вхождение
airline.lastIndexOf("r");
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// Найти первое слов
console.log(airline.slice(0, airline.indexOf(" ")));
// Найти последнее слово
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E" || s === "E") {
    console.log("Middle seat");
  } else {
    console.log("Lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
// Correct names
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const correctPassenger =
  passengerLower[0].toUppercase() + passengerLower.slice(1);
console.log(correctPassenger);

//Check email
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replace -----------------------------------------------------
const priceGB = "288,97 EUR";
const priceUS = priceGB.replace("EUR", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding dorr 23. Boarding door 23";
console.log(announcement.replaceAll("door", "gate"));

//BOOLEANS -------------------------------------------------------------------
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("A"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

//SPLIT ------------------------------------------------------
//Array
console.log("a+very+nice+string".split("+"));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
// JOIN ----------------------------------------------------------------------
const newName = ["Mr", firstName, lastName.toUpperCase()].join();
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  names.forEach((item) => {
    // namesUpper.push(item[0].toUpperCase() + item.slice(1));
    namesUpper.push(item.replace(n[0], n[0].toUpperCase()));
  });
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann davis");

//Padding -----------------------
const message = "Go to gate 23";
console.log(message.padStart(25, "+"));

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(345678920));

//Repeat
const message2 = "Bad weather.. All departues Delayed.... ";
console.log(message2.repeat(5));
// SPLIT() ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

const data = "newyork;10.99;2000";

const transformedData = data.split(";");
console.log(transformedData);

const nameFragments = ["Max", "Smith"];
const name = nameFragments.join(" ");
console.log(name);

// Strings sorting // MUTATE the original ARRAY bc // Alphabetic auto.
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
