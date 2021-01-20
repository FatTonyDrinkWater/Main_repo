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
