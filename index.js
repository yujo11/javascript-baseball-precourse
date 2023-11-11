//각 자릿수 별로 난수 생성하여 이어붙인 후 숫자형 변환
//아직 자리 수 겹치지 않도록 구현 x
function generateNum() {
  let firstNum = String(Math.floor(Math.random() * 10));
  let secondNum = String(Math.floor(Math.random() * 10));
  let thirdNum = String(Math.floor(Math.random() * 10));

  return firstNum + secondNum + thirdNum;
}

const myNumber = [1, 2, 3];
const userNumber = [3, 2, 6];

//myNumber과 userNumber의 각 자리수를 배열로 받아 게임 실행

function play(myNumber, userNumber) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    const index = myNumber.indexOf(userNumber[i]);

    if (!index) {
      continue;
    }

    if (i === index) {
      strike++;
    } else {
      ball++;
    }
  }

  //결과 출력 ()
  if (strike || ball) {
    console.log(`${strike} 스트라이크, ${ball - strike} 볼`);
  } else {
    console.log("낫싱");
  }
}
