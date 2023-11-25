import createComputerNum from './createComputerNum.js';
import { showSuggestion, hideSuggestion, printResult } from './handleElement.js';
import { getResult, getUserInput, checkGameWin, formatResult } from './utils.js';

// 게임을 진행할 변수 데이터
const numArray = [null, null];

// 게임 초기화
const resetGame = () => {
  numArray[0] = createComputerNum();
  const $userInput = document.querySelector('#user-input');
  $userInput.value = '';
  const $result = document.querySelector('#result');
  $result.textContent = '';
  hideSuggestion();
};

// 게임 진행
const play = () => {
  const userNum = getUserInput();
  if (!userNum) return;

  numArray[1] = userNum;

  // 비교 수행
  const gameResult = getResult(numArray[0], numArray[1]);

  if (checkGameWin(gameResult)) {
    printResult('🎉 정답을 맞추셨습니다!🎉');
    showSuggestion();
    return;
  }

  printResult(formatResult(gameResult));
};

// 게임 초기화 실행
resetGame();

const $submitButton = document.querySelector('#submit');
$submitButton.addEventListener('click', play);

const $restartButton = document.querySelector('#game-restart-button');
$restartButton.addEventListener('click', resetGame);
