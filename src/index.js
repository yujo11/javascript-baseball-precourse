let comNumbers; // 컴퓨터의 3자리 숫자를 담을 변수 선언

function setRandomNumber(num) {
  // 3자리 랜덤 숫자를 문자열로 리턴하는 함수
  num = "000"; // 기본 문자열 '000'설정
  while (
    // num의 100, 10, 1의 자리가 전부 다른 숫자가 되도록 작동하는 반복문
    num[0] === num[1] ||
    num[0] === num[2] ||
    num[1] === num[2]
  ) {
    let randomNumber = String(Math.floor(Math.random() * 1000)); // 3자리 숫자 랜덤숫자 문자열 생성
    if (randomNumber < 100 || randomNumber.indexOf("0") !== -1) {
      // 수가 100보다 작거나 0이 포함될 시 반복문 재시작
      continue;
    }
    return randomNumber; // 모든 조건에 맞으면 해당 숫자 문자열을 반환
  }
}

comNumbers = setRandomNumber(comNumbers); // 3자리 숫자 설정 함수 호출 후 comNumber에 대입

///////////////////////////////////////////////////////////////////////////////////////////

function newGame(e) {
  // 새로운 게임을 시작 함수
  resultContainer.innerHTML = ""; // 결과값 초기화
  comNumbers = setRandomNumber(comNumbers); // 컴퓨터 랜덤 변수 재설정
}

function submitAnswer(e) {
  // 버튼 대신 endter를 눌렀을 때
  if (e.which === 13) {
    // enter 또는 numpad 버튼을 눌렀을 때
    e.preventDefault(); // form 태그 안에 있는 버튼의 제출을 막는다.
    playGame(); // '확인' 버튼을 눌렀을 때 발생하는 이벤트를 실행한다.
  }
}

function countStrike(you, com) {
  // strike의 숫자를 반환하는 함수
  let count = 0; // 카운트 0 설정
  for (let i = 0; i < 3; i++) {
    if (you.indexOf(com[i]) !== -1 && you[i] === com[i]) {
      // 해당 인덱스를 컴퓨터가 가지고 있고 자리수가 같을때
      count++; // 카운트를 늘려준다.
    }
  }
  return count; // 카운트 반환
}

function countBall(you, com) {
  // Ball의 숫자를 반환하는 함수
  let count = 0; // 카운트 0 설정
  for (let i = 0; i < 3; i++) {
    if (you.indexOf(com[i]) !== -1 && you[i] !== com[i]) {
      // 해당 인덱스를 컴퓨터가 가지고, 자리수가 다를 때
      count++; //카운터를 늘려준다.
    }
  }
  return count; // 카운트 반환
}

function setResultText(strike, ball) {
  // 스트라이크와 볼을 계산하여 문자열 반환
  if (strike + ball === 0) return "낫싱";
  else if (strike !== 0 && ball !== 0) return `${ball}볼 ${strike}스트라이크`;
  else if (ball === 0 && strike !== 3) return `${strike}스트라이크`;
  else if (strike === 0) return `${ball}볼`;
  else if (strike === 3)
    return "정답을 맞추셨습니다.! \n 게임을 새로 시작하시겠습니까?";
}

function playGame(e) {
  // 버튼을 눌렀을 때,
  const userNumber = document.querySelector(".user-number-input").value; // 사용자 입력 숫자를 받음
  let strikeCount = countStrike(userNumber, comNumbers); // 스트라이크 대입
  let ballCount = countBall(userNumber, comNumbers); // 볼 카운트 대입
  let resultText = setResultText(strikeCount, ballCount); // 결과 문자열 대입

  let result = document.createElement("p"); // 결과를 출력할 p 태그 생성
  result.innerHTML = `당신의 입력 : ${userNumber}<br />결과 <br />${resultText}`; // 위 생성한 p 태그의 내용 입력
  answerInput.value = ""; // 입력 input value값 초기화
  resultContainer.append(result); // 결과 p태그를 결과값 컨테이너의 자식 요소로 추가한다.
  if (strikeCount === 3) {
    // 정답을 맞출 경우 게임 재시작 버튼을 추가한다.
    const reGameBtn = document.createElement("button"); // 게임 재시작 버튼 태그 생성
    reGameBtn.textContent = "게임 재시작"; // 버튼 내용
    resultContainer.append(reGameBtn); // 마찬가지로 결과컨테이너의 자식요소로 추가
    reGameBtn.addEventListener("click", newGame); // 새로 생성한 게임 재시작 버튼에 새게임 이벤트를 등록한다.
  }
}

const answerInput = document.querySelector(".user-number-input"); // 정답을 입력할 input태그
const btn = document.querySelector(".button"); // 정답을 확인할 button 태그
const resultContainer = document.querySelector(".result-container"); // 정답 비교 결과를 저장할 컨테이너

answerInput.addEventListener("keydown", submitAnswer); // 버튼 대신 enter키를 눌렀을 때 작동하는 이벤트핸들러
btn.addEventListener("click", playGame); // 버튼을 눌렀을 때 숫자를 비교하는 이벤트 핸들러
