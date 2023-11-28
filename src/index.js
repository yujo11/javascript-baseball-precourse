const userInput = document.querySelector("#user-input");
const resultBtn = document.querySelector("#submit");
const resultLog = document.querySelector("#result");
const $computerResult = document.querySelector("#computer-result");
const numbers = [];
for (let i = 0; i < 9; i += 1) {
  numbers.push(i + 1);
}

const computerResult = [];
for (let i = 0; i < 3; i += 1) {
  const calc = Math.floor(Math.random() * numbers.length);
  computerResult.push(numbers[calc]);
  numbers.splice(calc, 1);
}
