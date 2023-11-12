export default function UserInput({ onReturnUserNumber }) {
  const $userInput = document.querySelector('#user-input');
  const $userClickButton = document.querySelector('#submit');

  // 사용자 입력 데이터 전송 함수(input)
  const inputNumberSubmit = () => {
    $userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        onReturnUserNumber(checkUserInput(String(e.target.value)));
      }
    });
  };

  // 사용자 입력 데이터 전송 함수(버튼)
  const inputNumberButtonClick = () => {
    $userClickButton.addEventListener('click', (e) => {
      onReturnUserNumber(checkUserInput(String($userInput.value)));
    });
  };

  // 사용자 입력 검증 함수(3자리의 숫자만 입력 받을 수 있음)
  const checkUserInput = (text) => {
    if (
      Number(text) < 0 ||
      typeof Number(text) !== 'number' ||
      new Set(text).size !== 3
    ) {
      alert('잘못된 형식의 입력입니다. 3자리의 정수만 입력해주세요');
      $userInput.value = '';

      return false;
    } else {
      $userInput.value = '';

      return text;
    }
  };

  this.render = () => {
    inputNumberSubmit();
    inputNumberButtonClick();
  };

  this.render();
}
