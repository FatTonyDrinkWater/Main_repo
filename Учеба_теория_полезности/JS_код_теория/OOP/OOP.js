function Person() {
  this.age = 30;
  this.name = "Max";
  this.greet = function () {
    console.log(`${this.name} say's HI!`);
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  },
  printName() {
    console.log(this.name);
  },
};

const p = new Person();
p.greet();
console.log(p.__proto__);
console.log(Person.prototype);
