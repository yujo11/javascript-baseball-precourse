//각 자릿수 별로 난수 생성하여 이어붙인 후 숫자형 변환
//아직 자리 수 겹치지 않도록 구현 x
function generateNum() {
  let firstNum = String(Math.floor(Math.random() * 10));
  let secondNum = String(Math.floor(Math.random() * 10));
  let thirdNum = String(Math.floor(Math.random() * 10));

  return firstNum + secondNum + thirdNum;
}
