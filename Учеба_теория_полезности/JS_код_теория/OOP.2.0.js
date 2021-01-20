"use strict";
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Don't do this
  //   this.calcAg = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
// 4 sters after new
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function auto return {}

// Static methods
Person.hey = function () {
  console.log("Hey!");
};
Person.hey();

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);
jonas.calcAge();

Person.prototype.species = "Homo sapines";
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

const arr = [3, 4, 5, 5, 5, 6, 7, 8];
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const title = document.querySelector("h1");
console.log(title);
console.dir(title);

// Coding Challenge
const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function () {
  console.log(`${this.make} speed now is ${this.speed + 10}`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} slows down and the speed now is ${this.speed + 5}`);
};

const tesla = new Car(300, "Tesla");
const nissan = new Car(200, "Nissan");

tesla.accelerate();
nissan.brake();

// CLASSES--------------------------------------------------------------------

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // Bellow executes time per constructor function
  // Sets a property tht already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  // and this is what we need to get
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(this + "Hey!");
  }
}
PersonCL.hey();

const jessica = new PersonCL("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode
//4.

// Object.create-------------------------------------------------------------
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

//Getters and setters
// Выглядит как обычное свойство
// Can be usefull for data validation
// Get - для чтения

const account = {
  owner: "Jonas",
  movements: [200, 300, 500, 1200],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// Inheritance between function constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstname} and im study ${this.course}`);
};
// Fixing inheritance
Student.prototype.constructor = Student;

const mike = new Student("Mike", 2020, "JavaScript");
console.log(mike);
mike.introduce();
mike.calcAge();

// Inheritance between  classes ------------------------------------------------
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // Bellow executes time per constructor function
  // Sets a property tht already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  // and this is what we need to get
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(this + "Hey!");
  }
}

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    // Always need to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullname} and im study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years, but as a student i fell more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCL("Martha Jones", 2012, "Java");
martha.introduce();
martha.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // Protected property
    this._movements = [];
    this.locale = navigator.language;
  }
  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved!");
      return this;
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

// acc1.movements.push(250);

acc1.deposit(250);
acc1.withdrawal(140);
console.log(acc1.getMovements());
console.log(acc1);

//Chaining
acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000);
