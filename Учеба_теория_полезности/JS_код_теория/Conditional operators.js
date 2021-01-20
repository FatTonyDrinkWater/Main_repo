// ЕСЛИ (условие=тру) {что сделать}
if (2*4 == 7) {
    console.log("Verno");
} else {
    console.log("Neverno");
}

let num = 50;
if (num < 49) {
    console.log("Neverno")
} else if (num > 100) {
    console.log("Too much")
} else {
    console.log("Verno")
}
// Тернарный оператор
(num == 50) ? console.log("Verno") : console.log("neverno");
// Конструкция SWITCH. Удобнее чем писать множество УСЛОВИЙ
// Исключительно проверка на равенство. НЕ РАБОТАЕТ С ОПЕРАТОРАМИ СРАВНЕНИЯ
let num1 = 49;
switch (num1) {
    case 49:
        console.log("Neverno");
        break; // Отгараживает одно условие от другого
    case 100:
        console.log("Mnogo");
        break;
    case 89: // Просто значение. а не num == 89;
        console.log("Verno");
        break;
    default: // Если ни одно из условий не выполнилось.
        console.log("ERROR");
        break;
}