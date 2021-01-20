// Принимает строку. Делает реверс любого слова >= 5 символов. Возвращает новую строку
function spinWords(str) {
  //reverse слова, длинна которых больше 5 символов
  let arr = str.split(" ");
  arr.forEach((element, i) => {
    if (element.length >= 5) {
      let reversedEl = element.split("").reverse().join("");
      arr.splice(i, 1, reversedEl);
    }
  });
  return arr.join(" ");
}

spinWords("somebody once told me");

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}

function spinWords(str) {
  return str
    .split(" ")
    .map((w) => (w.length < 5 ? w : w.split("").reverse().join("")))
    .join(" ");
}
