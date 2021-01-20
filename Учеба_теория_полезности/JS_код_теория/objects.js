// Свойство объекта это пара ключ-значение

// Цикл для перебора
for (let key in options) {
  console.log("Свойство " + key + " имеет значение " + options[key]);
}

const jack = {
  firstName: "Jack",
  lastName: "Smith",
  age: 25 - 5,
  yob: 1995,
  hasDriverLicense: false,
  //   calcAge: function (yob) {
  //   console.log(this);
  //     return 2020 - 1993;

  //   },

  calcAge: function () {
    console.log(this);
    return 2020 - this.yob;
  },

  calcAge: function () {
    this.age = 2020 - this.yob;
  },
};
// Получение значения по ключу
console.log(jack.age);
console.log(jack["firstName"]); // brackets notatiton - динамическое свойство
let nameKey = "Name";
console.log(jack["last" + nameKey]);
jack.calcAge();

// Добавление новых свойст
jack.bool = false;
jack["Something"] = "Anything";

// Удаление свойств
delete options.bool;

// Кол-во свойств в объекте
console.log(Object.keys(jack).length);
