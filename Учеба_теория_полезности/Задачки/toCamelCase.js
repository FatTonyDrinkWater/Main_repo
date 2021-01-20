function toCamelCase(input) {
  let result = input.split(/[_-]/);
  let output = [];
  if (result[0].charAt(0) === result[0].charAt(0).toUpperCase()) {
    console.log("Заглавная");
    result.forEach((element) => {
      output.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    output = output.join("");
  } else if (result[0].charAt(0) === result[0].charAt(0).toLowerCase()) {
    console.log("Маленькая");
    output.push(result[0]);
    result.slice(1).forEach((element) => {
      output.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    output = output.join("");
  }
  return output;
}

toCamelCase("the-stealth-warior");
toCamelCase("The_stealth_warrior");

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
