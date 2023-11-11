'use strict';

import { createUserNumbers } from './check_user_num.js';
import { resultMessage } from './count.js';

const app = document.querySelector('#app');
const result = document.querySelector('#result');

// 1. 컴퓨터 난수 생성
const computerNumberArray = createComputerNumbers();
console.log(computerNumberArray);

function baseballGame(e) {
  e.preventDefault();
  // 2. 만약 사용자 입력값에 오류가 있다면 경고창을 띄우고, 없다면 배열로 받아오기
  const userNumberArray = createUserNumbers();
  // 3. 결과 메시지 출력하기
  const message = resultMessage(userNumberArray, computerNumberArray);
  result.textContent = message;
  // 4. 정답을 맞췄다면, 게임을 다시 시작할건지 물어보는 요소 생성
  if (message === '🎉정답을 맞추셨습니다!🎉') {
    askRestart();
  }
}
// 5. 이벤트 등록
app.addEventListener('submit', baseballGame);

// 3자리 난수 생성
function createComputerNumbers() {
  let set = new Set();
  while (set.size < 3) {
    const num = Math.floor(Math.random() * 10);
    if (num >= 1) {
      set.add(String(num));
    }
  }
  const computerNumbersArray = [...set];
  return computerNumbersArray;
}

// 게임을 재시작할 것인지 물어보는 html 요소 생성하기
function askRestart() {
  const askRestartBox = document.createElement('div');
  const askText = document.createElement('span');
  askText.textContent = '게임을 새로 시작하시겠습니까?';
  const restartBtn = document.createElement('button');
  restartBtn.textContent = '게임 재시작';
  restartBtn.addEventListener('click', () => {
    location.reload();
  });
  askRestartBox.append(askText, restartBtn);
  result.after(askRestartBox);
}
