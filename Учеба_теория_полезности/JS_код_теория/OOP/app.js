class Animal {
  static id = "1";

  constructor(animalName, color) {
    this.animalName = animalName;
    this.color = color;
  }
  voice() {
    console.log(`${this.animalName} мяукает!`);
  }
}

const cat = new Animal("Cat", "White");
cat.voice();
console.log(cat);

class Student extends User {
  constructor(userName, passWord, nickName) {
    super(userName, passWord);
    this.nickName = nickName;
  }
  getCourses() {
    return [1, 2, 3, 4];
  }
}

const student = new Student("John", 77888, "4mo228");
console.log(student);
student.getCourses();
student.sayHi();

// ПРОТОТИПЫ
// Литеральная нотация создаия объекта для упрощения
const person = {
  name: "Max",
  age: 25,
  gret: function () {
    console.log("Hello!");
  },
};
//
const person1 = new Object({
  name: "Max",
  age: 25,
  gret: function () {
    console.log("Hello!");
  },
});
// В этом случае переменная класса, является инстансом класса обжект
// А дандерПрото двух этих объектов будут равны, потому что ссылаются на один прототип

Object.prototype.bye = function () {
  console.log("Good bye!");
};
// Расширили базовый прототип класса обжект новым методом
// Можно указать что будет прототипом для лена
const lena = Object.create(person);
lena.name = "Lena";
// Прототипом Лены будет персон1, а прототипом персон 1, будет обжект

person1.prototype.hi = function () {
  console.log("whta!");
};
