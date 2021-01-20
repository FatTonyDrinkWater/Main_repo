// Кол-во минут в день
const workTime = [
  390,
  0,
  290,
  150,
  150,
  180,
  110,
  284,
  70,
  301,
  0,
  0,
  180,
  156,
  153,
];
// Ф. всего минут за период
const periodTotal = (a) => {
  return a.reduce((acc, cur) => acc + cur, 0);
};
// Ф. Минут в среднем за период.
// Приинимает минуты за период и длину периода.
const periodAverage = (valueTotal, period) => {
  return valueTotal / period;
};
// Нужна функция переводящая минуты в часы, с адекватными показателями.

// Это все можно сделать перебором. Пушим резалт за каждый день в объект
// А недельне отрезки нужно хранить в переменных, потому что они используются несколько раз
// Возможно лучше их сохранить в массиве, так как я хочу использовать перебор

let monthMinutesTotal = periodTotal(workTime);
let weekOneMinutesTotal = periodTotal(workTime.slice(0, 7));
let weekTwoMinutesTotal = periodTotal(workTime.slice(7, 14));
let weekThreeMinutesTotal = periodTotal(workTime.slice(15, 23));
let weekFourthMinutesTotal = periodTotal(workTime.slice(23, 31));
console.log(monthMinutesTotal);

const monthAverage = periodAverage(monthMinutesTotal, workTime.length);
console.log(monthAverage);
