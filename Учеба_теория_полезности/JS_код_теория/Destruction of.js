// Функция которая выполняется для каждого элемента в массиве или объекте

// Перебор значений массива
const prices = [10, 20, 30, 45];
const tax = 0.19;
const taxAdjustedPrices = [];

for (const value of prices) {
  // for of loop - array
  taxAdjustedPrices.push(value * (1 + tax));
}
console.log(taxAdjustedPrices);

/// Метод .forEach для перебора альтернатива for of loop если нужен индекс

const names = ["Max", "Lena", "Igor"];

names.forEach((value, index, arrayName) => {
  const namesObj = {
    index: index,
    name: value,
    fromArray: arrayName,
  };
  console.log(namesObj);
});
// Создаем объект с помощью перебора transformed to array of objects
const prices = [10, 20, 30, 45];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((value, index, fromArray) => {
  const pricesObj = {
    index: index,
    taxAdjustedPrice: value * (1 + tax),
  };
  taxAdjustedPrices.push(pricesObj);
});
console.log(taxAdjustedPrices);

// Transformed with MAP (has to return or do something)
// creates new array, transform create new array on changed elements
const prices = [10, 20, 30, 45];
const tax = 0.19;

const taxAdjustedPrices = prices.map((value, index, fromArray) => {
  const priceObj = {
    i: index,
    taxAdjustedPrice: value * (1 + tax),
  };
  return priceObj;
});
console.log(prices, taxAdjustedPrices);

/////////// OBJECTS for-in LOOPS

const person = {
  bio: { // nested object
    sex: "male",
    isAdmin: true,
  },
  name: "Max",
  age: 25,
};

for (const key in person) { // go through top KEYS
  console.log(key); // key
  console.log(person[key]); // value

}

for (const key in person.bio){
  console.log(key);
  console.log(person.bio[key]);
}
