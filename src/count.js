export { resultMessage };

// 각각의 경우 숫자 카운트하기
function strikeCounter(userNumberArray, computerNumberArray) {
  let strikeCount = 0;
  for (let i = 0; i < 3; i++) {
    if (userNumberArray[i] === computerNumberArray[i]) {
      strikeCount++;
    }
  }
  return strikeCount;
}

function ballCounter(userNumberArray, computerNumberArray) {
  let ballCount = 0;
  for (let i = 0; i < 3; i++) {
    if (
      computerNumberArray.includes(userNumberArray[i]) &&
      userNumberArray[i] !== computerNumberArray[i]
    ) {
      ballCount++;
    }
  }
  return ballCount;
}

function isNothing(userNumberArray, computerNumberArray) {
  for (let num of userNumberArray) {
    if (computerNumberArray.includes(num)) {
      return false;
    }
  }
  return true;
}

// 카운트한 숫자를 메시지로 만들기
function strikeOrSuccessMessage(userNumberArray, computerNumberArray) {
  const strikeCount = strikeCounter(userNumberArray, computerNumberArray);
  const message =
    strikeCount === 3
      ? '🎉정답을 맞추셨습니다!🎉'
      : strikeCount > 0
      ? `${strikeCount} 스트라이크`
      : '';
  return message;
}

function ballMessage(userNumberArray, computerNumberArray) {
  const ballCount = ballCounter(userNumberArray, computerNumberArray);
  const message = ballCount > 0 ? `${ballCount} 볼` : '';
  return message;
}

function nothingMessage(userNumberArray, computerNumberArray) {
  const Nothing = isNothing(userNumberArray, computerNumberArray);
  const message = Nothing ? '낫싱' : '';
  return message;
}

// 최종 메시지 만들기
function resultMessage(userNumberArray, computerNumberArray) {
  const stirkeOrSuccessMsg = strikeOrSuccessMessage(
    userNumberArray,
    computerNumberArray
  );
  const ballMsg = ballMessage(userNumberArray, computerNumberArray);
  const nothingMsg = nothingMessage(userNumberArray, computerNumberArray);
  const message = ballMsg + stirkeOrSuccessMsg + nothingMsg;
  return message;
}
