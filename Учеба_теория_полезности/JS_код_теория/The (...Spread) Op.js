const arr = [7, 8];
const badNewArr = [1, 2, arr[0], arr[1]];
console.log(badNewArr);
// Спред оп. копирует значения индекса, не трогая оригинальный массив
// Работает с Iterables
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr); // прикольно

const rest = {
  mainMenu: ["Pizza", "Pasta"],
  starterMenu: ["Bread", "Salt"],
  orderPasta: function (inc1, inc2, inc3) {
    console.log(`Here is you pasta with ${inc1} ${inc2} and ${inc3}`);
  },
};
// Real-world example
// const ingredients = [
//   prompt("Lets make pasta Ingredient 1?"),
//   prompt("Lets make pasta Ingredient 1?"),
//   prompt("Lets make pasta Ingredient 1?"),
// ];
// console.log(ingredients);
// rest.orderPasta(...ingredients);

const newMenu = [...rest.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...rest.mainMenu];

//Join 2 arrays
const menu = [...rest.starterMenu, ...mainMenu];
console.log(menu);

const str = "Jonas";
const letters = [...str];
console.log(letters);

// Создаем объект с ...
const newRest = { foundedIn: 1998, ...rest, founder: "Me" };
