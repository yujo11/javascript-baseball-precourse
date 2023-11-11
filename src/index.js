// 컴퓨터가 뽑는 숫자 생성
function comNumber() {
  const empty = new Set(); // 중복을 제거하기 위한 Set
  while (empty.size < 3) {
    const com = Math.floor(Math.random() * 9) + 1; // 1 - 9 까지의 숫자 랜덤 생성
    empty.add(com);
  }
  return Array.from(empty); // set으로 뽑힌 값 배열로 반환
}

let threeNumber = comNumber(); // 컴퓨터가 뽑은 3개의 숫자
const input = document.querySelector("#user-input");

function answer(e) {
  let inputValue = e.target.value; // 입력값 변수에 저장
  e.target.value = ""; //입력후 초기화
  if (
    inputValue.length !== 3 || // 입력값 길이 체크
    new Set(inputValue).size !== 3 || // 입력값 중복 체크
    isNaN(Number(inputValue)) // 입력값이 숫자로 변환이 안될시 실행
  ) {
    alert("유효하지 않는 입력값");
    e.target.value = ""; // 잘못된 입력값이면 입력값 비우기
    return;
  }

  const inputArray = Array.from(inputValue).map(Number); // 배열화 후 문자열인 요소들 숫자로 재배치
  let strikeCount = threeNumber.filter((el, i) => el === inputArray[i]).length;
  let findBall = 0;
  for (let i = 0; i < 3; i++) {
    // 인풋 숫자가 컴퓨터가 뽑은 세개의 숫자에 포함되어있는지 유무 확인
    const existence = threeNumber.includes(inputArray[i]);
    if (existence) {
      findBall++;
    }
  }

  let resultMessage = "";
  if (strikeCount === 3) {
    resultMessage = `정답입니다.`;
    const app = document.querySelector("#app");
    const button = document.createElement("button");
    button.classList.add("restart");
    button.textContent = "다시 시작하기";
    app.append(button);
    button.addEventListener("click", reset);
  } else if (strikeCount > 0 || findBall > 0) {
    resultMessage = `${strikeCount}스트라이크, ${findBall - strikeCount}볼`; // 볼 = 스트라이크가 아닌 포함되어있는 개수
  } else if (strikeCount === 0 && findBall === 0) {
    resultMessage = "낫싱";
  }

  // 결과 태그 생성
  const result = document.querySelector("#result");
  const span = document.createElement("span");
  const br = document.createElement("br");
  span.textContent = resultMessage;
  result.append(span);
  result.append(br);
}

function reset() {
  threeNumber = comNumber();
  const result = document.querySelector("#result");
  result.innerHTML = "";
  input.value = "";

  const app = document.querySelector("#app");
  const restartButton = document.querySelector(".restart");
  if (restartButton) {
    app.removeChild(restartButton);
  }
}

input.addEventListener("change", answer); // input 값의 change 이벤트 발생
