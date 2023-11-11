export { createUserNumbers };

const userInput = document.querySelector('#user-input');

// 만약 사용자 입력값에 오류가 있다면 경고창을 띄우고,
// 오류가 없다면 사용자 입력값 배열로 받아오기
function createUserNumbers() {
  const userEnterNumbers = userInput.value;
  if (userEnterNumbers === '') {
    alert('숫자를 입력해주세요.');
    userInput.focus();
    return;
  } else if (
    !isOnlyThreeDigitNumber(userEnterNumbers) ||
    !isNonOverlap(userEnterNumbers)
  ) {
    alert('1에서 9 사이의 중복되지 않는 숫자 3개를 입력해주세요.');
    userInput.focus();
    return;
  } else {
    const str = new String(userEnterNumbers);
    const userNumbers = [...str];
    return userNumbers;
  }
}

// 입력값에 오류가 없는지 확인
// - 입력값이 3자리 숫자인지 확인
function isOnlyThreeDigitNumber(value) {
  const regExp = /^[1-9]{3}$/;
  return regExp.test(value);
}

// - 입력값에 중복이 없는지 확인
function isNonOverlap(value) {
  const str = new String(value);
  const set = new Set();
  for (let num of str) {
    set.add(num);
  }
  if (set.size < 3) {
    return false;
  }
  return true;
}
