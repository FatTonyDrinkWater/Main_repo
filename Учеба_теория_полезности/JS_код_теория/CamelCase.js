function camelCase(input) {
  // Разбиваем строчку на массив сепаратор - или _
  let result = input.split(/[_-]/);
  result.forEach((word, i, arr) => {
    word[i].toUpperCase();
  });
}

// camelCase("the-stealth-warior"); // theStealthWarrior
camelCase("The_stealth_warrior"); // TheStealthWarrior

result.forEach((element, i, arr) => {
  console.log(arr[i].charAt(0).toUpperCase());
});
function toCamelCase(input) {
  // Разбиваем строчку на массив сепаратор - или _
  let result = input.split(/[_-]/);
  console.log(result);
  let answer = [];
  result.forEach((element, i, arr) => {
    if (arr[0].charAt(0) === arr[0].charAt(0).toUpperCase()) {
      answer.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
  });
  console.log(answer);
  let output = answer.join("");

  return output;
}

toCamelCase("the-stealth-warior"); // theStealthWarrior
toCamelCase("The_stealth_warrior"); // TheStealthWarrior

function toCamelCase(input) {
  // Разбиваем строчку на массив сепаратор - или _
  let result = input.split(/[_-]/);
  console.log(`Result is: ${result}`);
  let output = [];
  if (result[0].charAt(0).toUpperCase()) {
    result.forEach((element) => {
      output.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
  } else {
    element.charAt(0).toUpperCase() + element.slice(1);
  }

  console.log(output);
  return output.join("");
}

// toCamelCase("the-stealth-warior"); // theStealthWarrior
toCamelCase("The_stealth_warrior"); // TheStealthWarrior
