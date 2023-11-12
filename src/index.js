import RandomNumber from './RandomNumber.js';
import UserInput from './UserInput.js';
import Result from './Result.js';
import Success from './Success.js';

export default function BaseballGame() {
  this.state = {
    randomNum: '', // 컴퓨터가 생성할 3자리 난수
    userNum: '', // 유저가 입력한 3자리 숫자
    result: '', // 컴퓨터와 유저가 선택한 숫자 결과
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  // 3자리 정수형 난수 생성 컴포넌트
  const randomNumber = new RandomNumber({
    // 3자리 난수 받아와 state 변경
    onReturnRandomNumber: (randomNum) => {
      // 컴퓨터가 생성한 난수가 중복이 있다면 다시 난수 생성
      if (new Set(randomNum).size === 3) {
        this.setState({
          ...this.state,
          randomNum: randomNum,
        });
      } else {
        randomNumber.render();
      }
    },
  });

  // 게임 성공 컴포넌트
  const success = new Success({
    $target: document.querySelector('#app'),
    initialState: {
      result: this.state.result,
    },
  });

  // 유저의 숫자 입력을 받을 컴포넌트
  new UserInput({
    // 유저의 3자리 숫자 받아와 state 변경
    onReturnUserNumber: (userNumber) => {
      if (userNumber) {
        this.setState({
          ...this.state,
          userNum: userNumber,
        });

        // 컴퓨터의 난수 생성
        randomNumber.render();

        // 유저가 입력한 숫자와 컴퓨터 숫자의 비교
        const gameResult = this.play(this.state.randomNum, this.state.userNum);

        result.setState({
          result: gameResult,
        });

        success.setState({
          result: gameResult,
        });
      }
    },
  });

  // 야구 경기 결과
  const result = new Result({
    $target: document.querySelector('#result'),
    initialState: {
      result: this.state.result,
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
      ball += [...userInputNumbers].filter(
        (userNumber, index) =>
          i !== index && userNumber === computerInputNumbers[i],
      ).length;
    }

    return ball;
  };

  // 게임 실행 함수
  this.play = function (computerInputNumbers, userInputNumbers) {
    console.log('컴퓨터:', computerInputNumbers, '유저:', userInputNumbers);

    const strike = checkStrike(computerInputNumbers, userInputNumbers);
    const ball = checkBall(computerInputNumbers, userInputNumbers);

    return { strike: strike, ball: ball };
  };
}

new BaseballGame();
