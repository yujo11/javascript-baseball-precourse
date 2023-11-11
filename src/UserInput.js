export default function UserInput({ onReturnUserNumber }) {
  const $userInput = document.querySelector('#user-input');

  // 사용자 입력 데이터 확인 함수 (숫자만 입력 받을 수 있음)
  const inputNumberSubmit = () => {
    $userInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        onReturnUserNumber(checkUserInput(String(e.target.value)));
      }
    });
  };

  // 사용자 입력 검증 함수
  const checkUserInput = (text) => {
    if (typeof Number(text) !== 'number' || new Set(text).size !== 3) {
      alert('잘못된 형식의 입력입니다. 3자리의 숫자만 입력해주세요');
      $userInput.value = '';

      return false;
    } else {
      $userInput.value = '';

      return text;
    }
  };

  this.render = () => {
    inputNumberSubmit();
  };

  this.render();
}
