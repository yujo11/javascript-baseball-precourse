const userForm = document.querySelector('#user-form');
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

const tries = [];
function checkInput(input) {
if (input.length !== 3){
  return alert('3자리 숫자를 입력해 주세요.');
}
if (new Set(input).size !==3){
  return alert('중복되지 않게 입력해 주세요');
}
if (tries.includes(input)){
  return alert('이미 시도한 값입니다.');
}
return true;
}


userForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const value = userInput.value;
  userInput.value = '';
  if(checkInput(value)) {
    tries.push(value);
  } else{

  }
})