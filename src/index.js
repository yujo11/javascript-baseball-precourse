import { result, input, button } from "./contants.js";
import handleInputValue from "./handleInputValue.js";
import getOtherNumber from "./getOtherNumber.js";
import judgment from "./Judgment.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    const { strike, ball } = judgment(computerInputNumbers, userInputNumbers);

    if (strike === 3) {
      return "정답입니다";
    } else if ((strike === 0, ball === 0)) {
      return "낫싱";
    } else {
      return `볼: ${ball}, 스트라이크: ${strike}`;
    }
  };
}

input.addEventListener("input", handleInputValue);

const baseballGame = new BaseballGame();

button.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = baseballGame.play(getOtherNumber(), input.value);
  result.textContent = message;

  if (message === "정답입니다") {
    const reTry = document.createElement("button");
    reTry.setAttribute("id", "game-restart-button");
    reTry.textContent = "재시작";
    result.nextElementSibling.append(reTry);

    reTry.addEventListener("click", () => {
      input.value = "";
      result.textContent = "";
      reTry.remove();
    });
  }
});
