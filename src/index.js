import RandomNumber from "./RandomNumber.js";
import UserInput from "./UserInput.js";

export default function BaseballGame() {
  this.state = {
    randomNum: "", // 컴퓨터가 생성할 3자리 난수
    userNum: "", // 유저가 입력한 3자리 숫자
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  // 3자리 정수형 난수 생성 컴포넌트
  const randomNumber = new RandomNumber({
    // 3자리 난수 받아와 state 변경
    onReturnRandomNumber: (randomNum) => {
      this.setState({
        ...this.state,
        randomNum: randomNum,
      });
    },
  });

  // 유저의 숫자 입력을 받을 컴포넌트
  const userInput = new UserInput({
    // 유저의 3자리 숫자 받아와 state 변경
    onReturnUserNumber: (userNumber) => {
      if (userNumber) {
        this.setState({
          ...this.state,
          userNum: userNumber,
        });

        this.play(this.state.randomNum, this.state.userNum);

        // 컴퓨터의 난수 다시 생성
        randomNumber.render();
      }
    },
  });

  // 스트라이크 확인 함수
  const checkStrike = (computerInputNumbers, userInputNumbers) => {
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      }
    }

    return strike;
  };

  // 볼 체크 확인 함수
  const checkBall = (computerInputNumbers, userInputNumbers) => {
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {}
    }

    return ball;
  };

  // 게임 실행 함수
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log(computerInputNumbers, userInputNumbers);
    console.log(checkStrike(computerInputNumbers, userInputNumbers));

    return "결과 값 String";
  };

  // this.play();
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();
