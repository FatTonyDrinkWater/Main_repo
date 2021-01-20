// Won't need that often
// const moreNumbers = Array(5);
// const yetMoreNumbers = Array.of(1, 2);

//Array methods
const animals = ["Monkey", "Shark", 'Bear', 'Rabbit'];
// Добавить элемент в конец массива
animals.push("Reading");

// Удалить последний элемент массива
const poppedValue = animals.pop();

// Добавить элемент в начало массива
animals.unshift("Coding");

// Удалить первый элемент массива
animals.shift();

//Получить элемент массива по Индексу
console.log(animals[2]);

// Получить Длину Массива
console.log(animals.length); // 3=3 = 0,1,2

// Получить последний элемент массива
console.log(animals[animals.length - 1]); // get last element 3-1= 2 index

// Получить индекс Элемента
console.log(animals.indexOf("Drinking"));

// Есть ли элемент в массиве?
console.log(animals.includes("Drinking")); // BOOLEAN

// Вернуть новый массив содержащий копию части исходного массива
animals.slice(1); // Вернуть первый элемент
animals.slice(1,3); // Вернет 3 элемента начиная с индека 1
animals.slice() // Просто копия массива

// Удалить существующий элемент или заменить его MUTATE
animals.splice(1,1); // Удалить начиная с i 1, 1 элемент. Ретурн содержит массив удаленных элементов
// Заменить элемент массива
animals.splice(0,1, 'CAT');

//CONCAT Объединить 2 массива в один.
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2]; // spread op


// REVERSE Изменяет порядок следования элементов массива на месте
let arr2 = ["h", "e", "l", "l", "o"];
arr2.reverse();

//JOIN Объединяет все элемента массива или МПО в строку
const numbers = [1, 2, 3, 4,];
console.log(numbers.join("-")); // ()-1,2,3,4 || ('') - 1234 || ('SEP') - 1SEP2SEP


// FIND возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в cbf
const arr = [1,2,3,4,5,6,7,7,8]
const firstWithdrawal = arr.find(el => el > 4) // Удовлетворяет условие значит тру и возвращается элемент
console.log(firstWithdrawal);

// FILTER создает новый массив со всеми элементами прошедшими проверку задаваем в cbf
// Массив всех вхождений
const arr1 = arr.filter(el => el > 0);
console.log(arr1);


//Nested arrays
const listItems = document.querySelectorAll("li");
console.log(listItems); // node-list (i and length)
const arrayListItems = Array.from(listItems); // Делает еррей-лайк и итерабл в настоящий АРРЕЙ
console.log(arrayListItems);

const personalData = [30, "Max", { moreDetail: [] }];
console.log(personalData[1]);

const analyticsData = [
  [1.2, 2],
  [3, 5.4],
]; // Массив внутри массива - multi dimensional. Nested data
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}



const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(0, 2); // новый массив с темы же данными, а не ссылка. со слайсем
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);
console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

/// Перебор значений массива///////////////////////////////////

const prices = [10, 20, 30, 45];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const value of prices) {
//   taxAdjustedPrices.push(value * (1 + tax));
// }
// console.log(taxAdjustedPrices);

prices.forEach((price, i, prices) => {
  const priceObj = { index: i, taxAdjustedPrices: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

const persons = [`Владислав`, `Святослав`, `Ярослав`, `Демид`];
persons.forEach((person, i) => console.log(`${i + 1} в списке идёт ${person}`));

// shorter alternative MAP 8.13

const prices = [10, 20, 30, 45];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, i, prices) => {
  const priceObj = { index: i, taxAdjustedPrices: price * (1 + tax) };
  return priceObj;
});
console.log(prices, taxAdjustedPrices); // brand new changed array MAP

// Another one

const birthYear = [1990, 2000, 1994];
const ages = birthYear.map((el) => 2020 - el); // el = array element
// Создаем новый эррей с возрастом МАП возвращает его. Эрроу если 1 арг
// C двумя аргументами нужно брать в (el, index)

/// sorting and Reversing

const prices = [10, 20, 30, 45];
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}); // by default converts to a string
console.log(sortedPrices.reverse());

/// filter
const prices = [10, 20, 30, 45];
const filteredPrices = prices.filter((price) => price > 15); // shorter version
const filteredArray = prices.filter((price, i) => {
  return price > 15;
});

console.log(filteredArray);
console.log(filteredPrices);

console.log(prices);

/// reduce
const prices = [10, 20, 30, 45];

const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
  return preValue + curValue;
}, 0);



// The Spread Operator
const nameFragments = ["Max", "Smith"];
const copiedNames = [...nameFragments]; // new copied array
nameFragments.push("Joe");

console.log(nameFragments, copiedNames);

// Array destructuring 7.21

const nameFragments = ["Max", "Smith", 30, "lol"];
const [firstName, lastName, ...otherInfo] = nameFragments;
console.log(firstName, otherInfo);

const numbers = [1, 2, 3];
const [firstNum, secondNum, ...otherNums] = numbers;
console.log(firstNum, otherNums);

// MAP -----------------------------------------------------------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUsd = movements.map(cur => cur * eurToUsd);
};



// REDUCE -------------------------------------------------------------------
const balance = movements.reduce((accum, cur, i, arr) => accum + cur, 0);
console.log(balance);



//FindIndex-----------------------------------------------------------------

// Some and Every--------------------------------------------------------------
//Equality
console.log(movements.includes(-130));
// Condition
const anyDeps = movements.some((mov) => mov > 5000);
console.log(anyDeps);

// EVERY---------------------------------------------------------------------
console.log(movements.every((mov) => mov > 0));

//Flat
// Removed nested NICE
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[1, 2, [3, 4], 3], [4, 5, 6], 7, 8];
console.log(arrDeep.flat(2));


// Numbers sorting
console.log(movements.sort());
// Return < 0 A,B (and reverse)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);
