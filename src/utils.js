// 유저의 입력값을 받아옴
const getUserInput = () => {
  const $userInput = document.querySelector('#user-input');

  if (isNaN($userInput.value)) {
    $userInput.value = '';
    alert('올바른 값을 입력하세요.');
    return;
  }
  return $userInput.value;
};

// 게임 결과를 만들어 반환
const getResult = (computerNum, myNum) => {
  const hitData = {
    strike: 0,
    ball: 0,
    isWin: false,
  };

  for (const num of myNum) {
    const numIndex = myNum.indexOf(num);
    if (computerNum.indexOf(num) === numIndex) {
      hitData.strike += 1;
    } else if (computerNum.includes(num)) {
      hitData.ball += 1;
    }
  }
  return hitData;
};

// 게임이 이겼는지 확인
const checkGameWin = ({ strike }) => {
  return strike === 3 ? true : false;
};

// 게임 결과를 문자열 형식으로 반환
const formatResult = (gameResult) => {
  const { strike, ball } = gameResult;
  const resultTemplate = [];

  if (strike) resultTemplate.push(`${strike}스트라이크`);
  if (ball) resultTemplate.unshift(`${ball}볼`);

  return resultTemplate.length ? resultTemplate.join(' ') : '낫싱';
};

export { getResult, getUserInput, checkGameWin, formatResult };
