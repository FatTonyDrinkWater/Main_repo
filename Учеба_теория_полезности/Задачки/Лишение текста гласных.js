// Функция, заменяет набор элементов пустой строкой и возвращает строку.
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

disemvowel("This website is for losers LOL!");
