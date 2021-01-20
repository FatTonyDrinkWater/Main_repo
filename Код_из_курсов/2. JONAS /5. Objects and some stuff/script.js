// Function constructor
let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
// Создаем отдельно, иначе в каждом объекте будет миллион строчек лишнего кода
// Но все инхаранс будут иметь доступ потому что это in the prototype property of f. constructor
// own properties и prototype properties, второе только доступны
Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};
Person.prototype.lastName = "Smith";

// Instantiation
let john = new Person("John", 1990, "Teacher");
let jane = new Person("Jane", 1969, "Designer");
let mark = new Person("Mark", 1957, "Vietnam veteran");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);

/// Object.create (Object prototype -> basedontha prototype object)

let personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

let lena = Object.create(personProto);
lena.name = "Lena";
lena.yearOfBirth = 1990;
lena.job = "Teacher";

let igor = Object.create(personProto, {
  name: { value: "Igor" },
  yearOfBirth: { value: 1995 },
  job: { value: "Teacher" },
});

// ES 5 implementation
let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

let Athlette = function (name, yearOfBirth, job, medals) {
  Person.call(this, name, yearOfBirth, job);
  this.medals = medals;
};
Athlette.prototype = Object.create(Person.prototype);
let athlette = new Athlette("John", 1990, "Swimmer", 10);

// ES 6 implementation
class Person6 {
  constructor(name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.yob;
    console.log(age);
  }
}

class Athlette6 extends Person6 {
  constructor(name, yob, job, medals) {
    super(name, yob, job);
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const john6 = new Athlette6("John", 1990, "Swimmer", 3);
john6.wonMedal();

// Primitives vs objects

//Passing functions as arguments
// callback function - functions in the function (called later)
let years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, cbFn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(cbFn(arr[i]));
  }
  return arrRes;
}

function calculateYears(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

let ages = arrayCalc(years, calculateYears);
let fullAge = arrayCalc(ages, isFullAge);
let rate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rate);

// Functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(`${name}, can you please explain what UX design is?`);
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(`What subject do you teach, ${name}`);
    };
  } else {
    return function (name) {
      console.log(`Hello ${name}, what do you do?`);
    };
  }
}

let teacherQuestion = interviewQuestion("teacher");
teacherQuestion("John");
interviewQuestion("designer")("Mark");

//IIFE - data privacy
// То что в скобках не может быть declaration
function game() {
  let score = Math.random() * 10;
  console.log(score >= 5);
}
game();

(function (goodLuck) {
  let score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// Closures - замыкания

function retirement(retirementAge) {
  let a = " years let until retirement.";
  return function (yearOfBirth) {
    let age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

let retirementUS = retirement(66);
retirementUS(1990);
retirement(70)(1989);

// Bind, call, apply

let mike = {
  name: "Mike",
  age: 26,
  job: "Teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(`Good ${timeOfDay} i am ${this.name} `);
    } else if (style === "friendly") {
      console.log(`Hello ${timeOfDay} i am ${this.name}`);
    }
  },
};

let emily = {
  name: "Emily",
  age: 25,
};

mike.presentation("formal", "morning");
// call - 1st arg = this.obj = method borrowing
mike.presentation.call(emily, "friendly", "Night");
// bind - не вызывает функцию, а создает копию, которую можно сохранить
let emilyFriendly = mike.presentation.bind(emily, "friendly");
emilyFriendly("something"); // preset argumentcs

// apply - принимает аргументы массивом ( ну и ф. должна принимать массив)
mike.presentation(emily, ["friendly", "aftrernoon"]);

// Coding challenge 7
