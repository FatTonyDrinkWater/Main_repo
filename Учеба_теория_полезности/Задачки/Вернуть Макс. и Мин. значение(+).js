function highAndLow(numbers) {
  const nums = numbers.split(" ").map((string) => parseInt(string));
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
