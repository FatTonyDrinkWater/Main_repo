const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swapBtn = document.getElementById("swap");

// fetch exhange rate and update the DOM
function calculate() {
  const currency_One = currencyEl_one.value;
  const currency_Two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_One}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_Two];
      rateEl.innerText = `1 ${currency_One} = ${rate.toFixed(
        2
      )} ${currency_Two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swapBtn.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
