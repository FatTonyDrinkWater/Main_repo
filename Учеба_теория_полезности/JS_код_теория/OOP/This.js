// This - указывает на тот объект в контексте которого, оно вызвано. До точки.
function sayHello() {
  console.log("hello", this);
}

const person = {
  name: "Max",
  age: 30,
  oSayHello: sayHello,
  wSayHello: sayHello.bind(window),
  logInfo: function (job, phone) {
    // ф. создана в контексте этого объекта
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);

    console.groupEnd();
  },
};

person.logInfo();

const lena = {
  name: "Elena",
  age: 23,
};

// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog("Frontend", "88005553535");

// const fnLenaInfoLog = person.logInfo.bind(lena, "Frontend", "88005553535");
// fnLenaInfoLog();

person.logInfo.call(lena, "Frontend", "88005553535");

// person.logInfo.apply(lena, ["Frontend", "88005553535"]);

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n;
//     })
// }

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(5));
