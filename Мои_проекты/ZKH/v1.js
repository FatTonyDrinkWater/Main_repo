const startBtn = document.getElementById("start");

let data;
let total;

const startCount = () => {
  data = {
    gasTax: 9.31,
    energyTax: 4.36,
    coldWaterTax: 47.5,
    hotWaterTax: 47.5,
    garbageCosts: 84.36,
    repair: 231,
    heating: 0,
    zkh: 902,
    getDiffer(a, b) { // сокращенная запись предпочтительна в большинстве случаев (:function(){})
      return a - b;
    },
    getCharges(a, b) {
      return a * b;
    },
    gasNow: +document.getElementById("gasnow").value,
    gasLast: +document.getElementById("gaslast").value,
    gasDiffer() {
      return this.getDiffer(this.gasNow, this.gasLast);
    },
    gasCharges() {
      return this.getCharges(this.gasTax, this.gasDiffer());
    },
    energyNow: +document.getElementById("energyNow").value,
    energyLast: +document.getElementById("energyLast").value,
    energyDiffer() {
      return this.getDiffer(this.energyNow, this.energyLast);
    },
    energyCharges() {
      return this.getCharges(this.energyTax, this.energyDiffer());
    },
    coldWaterNow: +document.getElementById("coldWaterNow").value,
    coldWaterLast: +document.getElementById("coldWaterLast").value,
    coldWaterDiffer() {
      return this.getDiffer(this.coldWaterNow, this.coldWaterLast);
    },
    coldWaterCharges() {
      return this.getCharges(this.coldWaterTax, this.coldWaterDiffer());
    },
    hotWaterNow: +document.getElementById("hotWaterNow").value,
    hotWaterLast: +document.getElementById("hotWaterLast").value,
    hotWaterDiffer() {
      return this.getDiffer(this.hotWaterNow, this.hotWaterLast);
    },
    hotWaterCharges() {
      return (
        this.getCharges(this.hotWaterTax, this.hotWaterDiffer()) +
        this.hotWaterDiffer() * 155.7
      );
    },
    getTotal(...charges) {
      total = 0;
      for (const num of charges) {
        total += num;
      }
      return total;
    }
  };
};

// const getNewInfo = () => {
//   data.gasDiffer = getDiffer(data.gasNow, data.gasLast);
//   data.gasCharges = getCharges(data.gasTax, data.gasDiffer);

//   data.energyDiffer = getDiffer(data.energyNow, data.energyLast);
//   data.energyCharges = getCharges(data.energyTax, data.energyDiffer);

//   data.coldWaterDiffer = getDiffer(data.coldWaterNow, data.coldWaterLast);
//   data.coldWaterCharges = getCharges(data.coldWaterDiffer, data.coldWaterTax);

//   data.hotWaterDiffer = getDiffer(data.hotWaterNow, data.hotWaterLast);
//   data.hotWaterCharges =
//     getCharges(data.hotWaterDiffer, data.hotWaterTax) +
//     data.hotWaterDiffer * 155;
// };

// function getDiffer(a, b) {
//   return a - b;
// }

// function getCharges(a, b) {
//   return a * b;
// }

// function getTotal(...charges) {
//   total = 0;
//   for (const num of charges) {
//     total += num;
//   }
//   return total;
// }

const render = () => {
  const renderHook = document.getElementById("result"); // Где
  renderHook.style.display = 'block';
  renderHook.innerHTML = `
  <h3>За месяц потрачено</h3>
  <p>${data.gasDiffer()} куб.м. газа, по тарифу ${data.gasTax} за 1 куб.м. на сумму ${data.gasCharges()} рублей</p>
  <p>${data.energyDiffer()} кВт по тарифу ${data.energyTax} на сумму ${data.energyCharges()} рублей</p>
  <p>${data.coldWaterDiffer()} куб.м. по тарифу ${data.coldWaterTax} за куб.м. на сумму ${data.coldWaterCharges()} рублей</p>
  <p>${data.hotWaterDiffer()} куб.м. на сумму ${data.hotWaterCharges()} рублей</p>
  <p>Расходы на вывоз мусора составили ${data.garbageCosts}</p>
  <p>Расходы на капитальный ремонт ${data.repair}</p>
  <p>Расходы на отопление ${data.heating}</p>
  <p>Расходы ЖКХ ${data.zkh}</p>
  <p>Общая сумма на комунальные платежи составила ${total.toFixed(2)}</p>
  `;
};

startBtn.addEventListener("click", () => {
  startCount();
  data.getTotal(
    data.garbageCosts,
    data.repair,
    data.zkh,
    data.heating,
    data.gasCharges(),
    data.energyCharges(),
    data.coldWaterCharges(),
    data.hotWaterCharges()
  );
  render();
  console.log(data);
});
