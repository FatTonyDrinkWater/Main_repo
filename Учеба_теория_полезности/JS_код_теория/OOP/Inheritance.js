function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  //   this.calculateAge = function () {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  //   };
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}}`;
};

Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const me = new Person("Женя", "Бакаев", "12-10-1993");
const john = new Person("John", "Dow", "09-10-1985");

console.log(john);
console.log(john.calculateAge());
console.log(me.getFullName());

me.getsMarried("smith");
console.log(me.getFullName());

console.log(me.hasOwnProperty("firstName"));
