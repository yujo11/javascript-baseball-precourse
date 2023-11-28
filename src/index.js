const userForm = document.querySelector('#user-form');
const userInput = document.querySelector("#user-input");
const resultBtn = document.querySelector("#submit");
const resultLog = document.querySelector("#result");
const restartLog = document.querySelector('#restart')
const restartBtn = document.getElementById('restart-btn');
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
console.log(computerResult); // console.log로 정답 출력
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
  if(!checkInput(value)){
    return;
  }
if(computerResult.join('')===value){
  resultLog.textContent = `🎉정답을 맞추셨습니다!🎉`;
  restartLog.textContent = `게임을 새로 시작하시겠습니까?`;
  restartBtn.style.display = 'inline';
  return;
}
tries.push(value); // 한번 시도한 값 재시도 불가능
});

restartBtn.addEventListener('click',()=>{
  window.location.reload(); 
});