const a = "Hi!";
const numbers = Array.from(a);
console.log(numbers);

const dataBase = [
  [1, 2.5, 3],
  [14, 8],
];

for (const dataPoint of dataBase) {
  for (const point of dataPoint) {
    console.log(point);
  }
}

const hobbies = ["Cooking", "Sports"];
hobbies.push("Code"); // Добавляет в конец
hobbies.unshift("Reading"); // Добавляет в начало
hobbies.pop(); // returns a value // удаляет последний индекс
hobbies.shift(); // удаляет первый индекс
// .pop . push - быстрее чем шифт, потому что шифт во время сдвига взаимодействует со всем массивом
hobbies[0] = "REPLACED";
// Insert DATA between indexes with .SPLICE
hobbies.splice(0, 0, "Good food!"); // start, delete, insert
console.log(hobbies);

const numbers2 = [1, 4, 5, -5, 10, 100];
const wrongCopy = numbers2;
const copyOfNumbers = numbers2.slice(); // делает полноценную копию, снимок. этот массив уже независим от первого
const copyPartOfArray = numbers2.slice(0, 2);

numbers2.push(17);

console.log(numbers2, copyOfNumbers, wrongCopy);
console.log(copyPartOfArray);

// Складывание массивов и возвращение нового массива с помощью .concat (new place in memory and new adres)
const letter = ["a", "b", "c"];
const newLetters = ["d", "e", "f"];

const newArray = letter.concat(newLetters);
console.log(newArray);

console.log(letter.indexOf("c")); // узнать какой индекс у нужной нам даты. Stop's on first description
console.log(letter.lastIndexOf("c")); // Будет искать с правой стороны массива . Оба эти методы работают только для примитивных типов
console.log(letter.includes("b"));

// Для поиска других данных используем .find. Это уже прямая отсылка к памяти и любые изменения будет влияеть
const personData = [{ name: "Max" }, { name: "Anna" }];
const anna = personData.find((person, index, array) => {
  return person.name === "Anna";
});

console.log(anna);
// Transform into new ARRAY
const prices = [2, 5.84, 34];
const newPrices = [];
const tax = 0.19;
prices.forEach((price, i) => {
  newPrices.push(price * (1 + tax));
});
console.log(newPrices);

// Transform the MAIN array
const prices = [2, 10, 8, 600, 5.84, 34];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, i) => {
  const priceObj = { index: i, taxAdjustedPrice: price * (1 + tax) };
  return priceObj;
});
console.log(taxAdjustedPrices, prices);

// .sort изменяет в строку и сортирует логикой строки
const prices = [2, 10, 8, 600, 5.84, 34];
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices);

const prices = [2, 10, 8, 600, 5.84, 34];
const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);

const prices = [2, 10, 8, 600, 5.84, 34];
const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);
console.log(sum);

// Перевод строки в массив по разделителю
const data = "LA;15.12;2010";
const transformedData = data.split(";");
console.log(transformedData);

const nameFragments = ["Max", "Miller"];
const fullName = nameFragments.join(" ");
console.log(fullName);

// The spread operator

const copiedFragments = [...nameFragments];

const ids = new Set([1, 2, 3]);
