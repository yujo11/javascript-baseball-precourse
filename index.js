//컴퓨터측 세 자리의 난수를 생성하는 함수
function getMyNumber() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  const myNumber = [];

  //겹치지 않는 난수로 length:3의 배열 생성
  for (let i = 0; i < 3; i++) {
    const randomNumber = getRandomNumber();
    while (!myNumber.includes(randomNumber)) {
      myNumber.push(randomNumber);
    } //두 자리 수 나오는 문제 해결 팰요
  }
  return myNumber;
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
