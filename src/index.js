import BaseballGame from "/src/BaseballGame.js";
import {
  convertDigitArrayToInt,
  generateNonDuplicateRandomIntArray,
} from "/src/utils.js";

const generateComputerInputNumbers = () =>
  convertDigitArrayToInt(generateNonDuplicateRandomIntArray(3, 1));

const userInputEl = document.querySelector("#user-input");
const submitBtnEl = document.querySelector("#submit");
const resultEl = document.querySelector("#result");

const baseballGame = new BaseballGame();
let computerInputNumbers = generateComputerInputNumbers();

const handleRestart = (e) => {
  userInputEl.disabled = false;
  userInputEl.value = null;
  userInputEl.focus();
  resultEl.innerHTML = "";
  computerInputNumbers = generateComputerInputNumbers();
};

const handleSubmit = (e) => {
  const userInputNumbers = Number(userInputEl?.value);
  const result = baseballGame.play(computerInputNumbers, userInputNumbers);

  if (!result) {
    alert("유효하지 않은 입력입니다.");
    userInputEl.focus();
    return;
  }
  if (result === "정답을 맞추셨습니다!") {
    userInputEl.disabled = true;

    const strongEl = document.createElement("strong");
    strongEl.textContent = result;
    resultEl.textContent = "";
    resultEl.appendChild(strongEl);

    const restartMention = document.createElement("span");
    restartMention.textContent = "게임을 새로 시작하시겠습니까?";

    const restartButtonEl = document.createElement("button");
    restartButtonEl.textContent = "게임 재시작";
    restartButtonEl.addEventListener("click", handleRestart);

    const restartWrapper = document.createElement("div");
    restartWrapper.appendChild(restartMention);
    restartWrapper.appendChild(restartButtonEl);

    resultEl.appendChild(restartWrapper);

    return;
  }

  resultEl.textContent = result;
};

submitBtnEl.addEventListener("click", handleSubmit);
