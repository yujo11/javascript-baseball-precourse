// 1. 컴퓨터측 세 자리의 난수를 생성하여 배열로 리턴하는 함수: getMyNumber
function getMyNumber() {
  const myNumber = [];

  //겹치지 않는 난수로 length:3의 배열 생성
  while (myNumber.length < 3) {
    const randomNumber = getRandomIntInclusive();

    if (!myNumber.includes(randomNumber)) {
      myNumber.push(randomNumber);
    }
  }

  return myNumber;

  function getRandomIntInclusive(min = 1, max = 9) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
}

// 2. 사용자의 입력값 세 자리를 배열로 리턴하는 함수: getUserNumber (확인 필요)

function getUserNumber() {
  const $userInput = document.querySelector("#user-input");
  const userInputValue = [...$userInput.value].map(Number);

  if (userInputValue.includes(NaN)) {
    alert("숫자만 입력해주세요.");
    return;
  }

  // TODO 숫자가 아닌 값에 대한 validation 필요

  return userInputValue;
}

// 3. myNumber과 userNumber을 비교하여 게임 실행 후 결과 출력: play
function play(myNumber, userNumber) {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (myNumber[i] === userNumber[i]) {
      strike++;
    }
  }

  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (myNumber[i] === userNumber[i]) {
      continue;
    }

    if (myNumber.includes(userNumber[i])) {
      ball++;
    }
  }

  //결과 출력 ()
  const $result = document.querySelector("#result");

  if (strike === 3) {
    $result.textContent = "축하합니다 정답을 맞추셨습니다.";
  } else if (strike || ball) {
    $result.textContent = `${strike} 스트라이크, ${ball} 볼`;
  } else {
    $result.textContent = "낫싱";
  }
}

const myNumber = getMyNumber();
const userNumber = getUserNumber();

// 4. 확인 버튼 클릭 시 play를 실행하는 이벤트 핸들러

const app = () => {
  const myNumber = getMyNumber(); // 최초에 생성된 3자리 난수

  const $submitButton = document.querySelector("#submit");
  $submitButton.addEventListener("click", () => {
    const userNumber = getUserNumber();

    console.log("myNumber", myNumber);
    console.log("userNumber", userNumber);

    play(myNumber, userNumber);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  app();
});
