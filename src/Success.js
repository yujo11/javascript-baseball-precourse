export default function success({ $target, initialState }) {
  const $success = document.createElement('div');
  $success.style.visibility = 'hidden';

  $success.innerHTML = `
        <h3>'🎉 정답을 맞추셨습니다! 🎉'</h3>
        <span>게임을 새로 시작하시겠습니까?</span>
        <button class='restart'>게임 재시작</button>
      `;

  $target.appendChild($success);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  // 게임 재시작 함수
  const reStart = () => {
    const $reStartButton = document.querySelector('.restart');

    $reStartButton.addEventListener('click', (e) => {
      $success.style.visibility = 'hidden';
    });
  };

  this.render = () => {
    const { strike } = this.state.result;

    if (strike === 3) {
      $success.style.visibility = 'visible';
    } else {
      $success.style.visibility = 'hidden';
    }

    reStart();
  };
}
