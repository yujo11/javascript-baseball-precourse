// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }
// new BaseballGame();

const userInput = document.getElementById("user-input");
const btnSubmit = document.getElementById("submit");
const Msgresult = document.getElementById("result");

// 인풋 세자리 겹치지 않는 숫자로 제한
function maxLengthCheck(userInput) {
  if (userInput.value.length > userInput.maxLength) {
    userInput.value = userInput.value.slice(0, userInput.maxLength);
  }
}

//겹치지 않는 세자리 난수 생성
let computerrArr = [];
let num;

function computerInputNumbers() {
  while (computerrArr.length < 3) {
    num = Math.floor(Math.random() * 9);
    if (!computerrArr.includes(num)) {
      computerrArr.push(num);
    }
  }

  return computerrArr;
}

// 인풋 버튼 클릭이벤트 함수
btnSubmit.addEventListener("click", userInputNumbers);

// 사용자 인풋을 배열안에 넣는 함수
let userArray = [];
function userInputNumbers() {
  let inputValue = userInput.value;
  for (let i = 0; i < inputValue.length; i++) {
    userArray.push(inputValue[i]);
  }
  userInput.value = null;

  play(userArray, computerInputNumbers());
}

// 게임결과를 문자열로 나타내는 함수
function play(userArray, computerrArr) {
  const CountScore = {
    strike: 0,
    ball: 0,
  };

  for (let num of userArray) {
    const indexNum = userArray.indexOf(num);
    console.log(computerrArr.indexOf(num));

    if (computerrArr.indexOf(num) === indexNum) {
      CountScore.strike += 1;
    } else if (computerrArr.includes(num)) {
      CountScore.ball += 1;
    }
  }
  console.log(userArray, computerrArr);
  console.log(CountScore);
}
