const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(op, prevRes, opNum, newRes) {
  const logEntry = {
    op: op,
    prevRes: prevRes,
    number: opNum,
    afterRes: newRes,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calcType) {
  const enteredNumber = getUserNumberInput();
  
  const initialResult = currentResult;
  let mathOp;
  if (calcType === "ADD") {
    currentResult += enteredNumber;
    mathOp = "+";
  } else if (calcType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOp = "-";
  } else if (calcType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOp = "*";
  } else if (calcType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOp = "/";
  }
  
  createAndWriteLog(mathOp, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
