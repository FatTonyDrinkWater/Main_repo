for (let line = "#"; line.length <= 7; line += "#") {
  console.log(line);
}

for (let i = 0; i <= 100; i++) {
  console.log(i);
  if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log(fizz);
  }
}

for (let i = 0; i <= 100; i++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
