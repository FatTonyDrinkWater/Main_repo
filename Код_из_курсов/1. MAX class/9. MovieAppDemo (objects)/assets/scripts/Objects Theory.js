const userChosenKeyword = +prompt("Put a number here", "2"); // создаем ключ на основе инпута юзера. А как создать значение?


let person = {
  name: "Max",
  "last name": "Smith",
  age: 30, // KEY AGE приводится к строке
  sex: "male",
  hobbies: ["Cooking", "Reading"],
  greet: function () {
    alert("Hi there!");
  },
  10: "hello",
  [userChosenKeyword]: null, // NULL есть ключ, но нет значения. Задаст ключ
};

person.greet(); // Вызывает метод
person.IsAdmin = true; // Добавляет свойства
person.age = 31; // Или изменяет старое свойство
delete person.sex; // удалить, значит приравнять к андефайнд

console.log(person.age);
console.log(person["last name"]);
console.log(person[10]);

const keyName = "hobbies";
console.log(person[keyName]);


//Spread operator and OBJ

const human = {
  name: "Max",
  hobbies: ['sports', 'cooking']
};

const human2 = human;
human.age = 30; // human2 так же измениться

human3 = {...human}; // Новая копия, изменения хуман не затронут хуман3

human.age = 35;

console.log(human3);

// Assign()

const person = {
  name: "Max",
  hobbies: ['sports', 'cooking']
};

const person2 = Object.assign({}, person); // Новый объект с прошлыми свойствами
console.log(person2);