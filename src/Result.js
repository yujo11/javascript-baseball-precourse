export default function Result({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const { strike, ball } = this.state.result;

    if (strike === 0 && ball === 0) $target.textContent = '낫싱';
    if (strike === 0 && ball !== 0) $target.textContent = `${ball} 볼`;
    if (strike !== 0 && ball === 0)
      $target.textContent = `${strike} 스트라이크`;
    if (strike !== 0 && ball !== 0)
      $target.textContent = `${ball} 볼 ${strike} 스트라이크`;
  };
}
