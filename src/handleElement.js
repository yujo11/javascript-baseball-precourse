// 재시작 제안 요소를 건드림
const showSuggestion = () => {
  document.querySelector('#suggestion').style.display = 'block';
};

const hideSuggestion = () => {
  document.querySelector('#suggestion').style.display = 'none';
};

// 게임 결과에 따른 문자를 페이지에 출력
const printResult = (text = '') => {
  const $resultDiv = document.querySelector('#result');
  $resultDiv.textContent = text;
};

export { showSuggestion, hideSuggestion, printResult };
