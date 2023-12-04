const generateNumbers = (min = 1, max = 9) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateWinningNumber = () => {
  const result = [];

  while (result.length < 3) {
    const randomNumber = generateNumbers();

    if (result.includes(randomNumber)) {
      continue;
    }

    result.push(randomNumber);
  }

  return result;
};

const play = (winningNumber, userInputValue) => {
  const userInputNumber = userInputValue.split("").map(Number);

  let strike = 0;
  let ball = 0;

  for (let i = 0; i < userInputNumber.length; i++) {
    if (userInputNumber[i] === winningNumber[i]) {
      strike++;
    } else if (winningNumber.includes(userInputNumber[i])) {
      ball++;
    }
  }

  const $result = document.querySelector("#result");

  if (strike === 3) {
    const $gameRestartButton = document.querySelector("#game-restart-button");
    $result.textContent =
      "정답을 맞추셨습니다 🎉 게임을 새로 시작하시겠습니까?";
    $gameRestartButton.style.display = "block";
  } else if (strike || ball) {
    $result.textContent = `${strike} 스트라이크 ${ball} 볼`;
  } else {
    $result.textContent = "낫싱";
  }
};

const baseballGame = () => {
  const winningNumber = generateWinningNumber();

  console.log("winningNumber", winningNumber);

  const $input = document.querySelector("#user-input");

  $input.addEventListener("keydown", (e) => {
    if (e.target.value.length >= 3) {
      if (e.key === "Enter" || e.key === "Backspace") return;

      e.preventDefault();
      alert("3자리수 이하의 숫자만 입력해 주세요");
    }
  });

  const $form = document.querySelector("#form");

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInputValue = event.target[0].value;
    if (userInputValue.length !== 3) {
      alert("세자리 숫자를 입력해 주세요");
      e.preventDefault();
    }

    play(winningNumber, userInputValue);
  });

  const $gameRestartButton = document.querySelector("#game-restart-button");
  $gameRestartButton.addEventListener("click", () => {
    console.log("리스타트");

    const $result = document.querySelector("#result");

    $result.textContent = "";
    $gameRestartButton.style.display = "none";
    baseballGame();
  });
};

baseballGame();
