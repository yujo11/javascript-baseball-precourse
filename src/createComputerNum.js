function makeRandomIndex(arrayLength) {
  const randomIndex = Math.floor(Math.random() * arrayLength);

  return randomIndex;
}

const createComputerNum = () => {
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let computerNum = '';
  for (let i = 0; i < 3; i++) {
    const selectedIdx = makeRandomIndex(numArray.length);
    computerNum += String(numArray[selectedIdx]);
    numArray.splice(selectedIdx, 1);
  }
  return computerNum;
};

export default createComputerNum;
