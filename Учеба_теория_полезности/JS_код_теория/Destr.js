"use strict";
// ARRAY destructuring --------------------------------------------------------
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
console.log(a);
// Деструктуризация массива
const [x, y, z] = arr;
console.log(x, y, z);
// Деструктуризация Nested массива
const nested = [2, 3, 4, [5, 6]];
const [i, , , j] = nested;
// const [i, , , [j, k]] = nested;
console.log(i, j);

// OBJECT destructuring--------------------------------------------------------
const person = {
  name: "John",
  age: 25,
};
const { name, age } = person;
console.log(name, age);
//Можем давать нашим переменным другие имена
const { name: personName, age: personAge } = person;
console.log(personName, personAge);
// Default values
const { lastName = "Doe" } = person;
console.log(`Имя ${lastName} `);

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

// Чтобы пропустить элемент нужно leave a hole
const [fisrstMeal, , thirdMeal] = restaurant.categories;
console.log(fisrstMeal);
