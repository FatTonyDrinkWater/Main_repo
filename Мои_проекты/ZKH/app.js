const startProgramm = document.getElementById("start-Count");
const askQuestions = document.getElementById("questions");
// присвоение переменной результата вызова метода
let countIsRunning = false;

const garbageCosts = 81.43;
const repair = 197.65;
const base = garbageCosts + repair + ZKH;

const gasTax = 9.31;
const electricTax = 4.2;

const setObjValues = () => {
  if (countIsRunning) {
    obj = {
      ZKH: +prompt("Содержание, ремонт и предоставление услуг?", "897"),
      heating: +prompt("Отопление?", "1185.46"),
      gasNow: +prompt("Показания ГАЗА в этом месяце?", "523"),
      gasLast: +prompt("Показания ГАЗА в прошлом месяце?", "518"),
      electricBillNow: +prompt(
        "Показания ЭЛЕКТРИЧЕСТВА в этом месяце?",
        "13733"
      ),
      electricBillLast: +prompt(
        "Показания ЭЛЕКТРИЧЕСТВА в прошлом месяце?",
        "13675"
      ),
    };
  }
};

gasWasted: electricityWasted: gasCharges: electricityCharges;

const getCharges = () => {
  gasWasted = countWasted(gasNow, gasLast);
  gasCharges = countCharges(gasWasted, gasTax);
};

// Объявление функции. Создается переменная с ссылкой на функцию
function countWasted(a, b) {
  return a - b;
}

function countCharges(a, b) {
  return a * b;
}

// можно создать объект пара ключ. итоговыми значениями
const getCharges = () => {
  gasWasted = countWasted(gasNow, gasLast);
  electricityWasted = countWasted(electricBillNow, electricBillLast);
  gasCharges = countCharges(gasWasted, gasTax);
  electricityCharges = countCharges(electricityWasted, electricTax);
};

// let coldWaterCharges = countCharges(countWasted(coldWaterNow, coldWaterLast),  )
// coldWaterCharges = coldWaterCharges + ;

// Анонимная функция произведет подсчет после нажатия кнопки.
// она берет глобальные переменные
startProgramm.addEventListener("click", () => {
  countIsRunning = true;
  setObjValues();
  getCharges();
  // let monthCharges = base + heating + gasCharges + electricityCharges;
  const sumUpMonthCharges = (showingCharges, ...charges) => {
    let sum = 0;
    for (const num of charges) {
      sum += num;
    }
    showingCharges(sum);
  };
  const showCharges = (Charges) => {
    alert("Расходы на коммунальные услуги за прошлый месяц" + " - " + Charges);
  };
  sumUpMonthCharges(showCharges, base, heating, gasCharges, electricityCharges);

  alert(`Плата за ${gasWasted} к.м. газа составила - ${gasCharges.toFixed(2)}`);
  console.log(
    `Плата за ${electricityWasted} кВ. электроэнергии составила - ${electricityCharges.toFixed(
      2
    )}`
  );
});
