export default function RandomNumber({ onReturnRandomNumber }) {
  // 정수 난수 생성 함수
  const createRandomNumber = () => {
    let tempNumber = '';

    for (let i = 0; i < 3; i++) {
      tempNumber += Math.floor(Math.random() * 10);
    }

    return tempNumber;
  };

  // 렌더 함수
  this.render = () => {
    onReturnRandomNumber(createRandomNumber());
  };

  this.render();
}
