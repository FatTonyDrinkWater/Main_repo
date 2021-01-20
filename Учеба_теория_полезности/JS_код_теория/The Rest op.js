const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(a, b, rest);

const restaraunt = {
  mainMenu: ["Pizza", "Pasta"],
  starterMenu: ["Bread", "Salt"],
  orderPasta: function (inc1, inc2, inc3) {
    console.log(`Here is you pasta with ${inc1} ${inc2} and ${inc3}`);
  },
};

const [pizza, , rissotto, ...restFood] = [
  ...restaraunt.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissotto, restFood);

// Functions

const addNums = function (...numbers) {
  let sum = numbers.reduce((total, curValue) => total + curValue);
  console.log(sum);
};

addNums(1, 3, 4, 5, 6, 7);
