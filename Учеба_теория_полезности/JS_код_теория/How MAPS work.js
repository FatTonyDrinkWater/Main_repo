const question = new Map();
question.set("question", "What is the capital of USA?");
question.set(1, "New-York");
question.set(2, "LA");
question.set("correct", "Washington");

question.set(true, "Correct answer");
question.set(false, "Wrong answe");

console.log(question.get('question'));
console.log(question.size);

if(question.has(2)) {
  question.delete("2");
}

question.clear();

question.forEach((value, key) => {
  console.log(`${key} is set to ${value}`);
});