// 100 чисел. Все число делящиеся на 3 - фу, а на 5 бар
// Каждый элемент массива передается в функцию

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i + "foo");
  } else if (i % 5 === 0) {
    console.log(i + "bar");
  } else {
    console.log(i + "Just a number!");
  }
}

let array = [10, 3, 5, 12, 15];

array.forEach((i) => {
  return i % 3 === 0
    ? console.log(`${i} FOO`)
    : i % 5 === 0
    ? console.log(`${i} BAR`)
    : console.log("something went wrong");
});
