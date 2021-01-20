"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(obj);
  },
};
restaurant.orderDelivery({
  time: "22:30",
  adress: "Via del sola 21",
  mainIndex: 2,
  starterIndex: 2,
});

//Object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Any other name can give we
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Mutating a variables
let a = 111;
let v = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const arrDestructuring = function (restaurant) {
  const arr = [2, 3, 4];
  let [x, y, z] = arr;
  console.log(x, y, z);

  let [main, , secondary] = restaurant.categories; // Запятая пропустип второй (3=2)
  console.log(main, secondary);
  //Swithcing variable
  [main, secondary] = [secondary, main];
  // Recieve 2 return values from a function
  const [dish1, dish2] = restaurant.order(2, 0);
  console.log(dish1, dish2);

  //Nested arrays. Destructuring
  const nested = [2, 4, [5, 6]];
  // const [i, ,j] = nested;
  const [i, , [j, k]] = nested;
  console.log(i, j, k);

  //Default values
  const [p, q, r] = [8, 9];
  console.log();
};
