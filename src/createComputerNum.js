function makeRandomIndex(arrayLength) {
  const randomIndex = Math.floor(Math.random() * arrayLength);

  return randomIndex;
}

const createComputerNum = () => {
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const computerNumPicks = [];
  for (let i = 0; i < 3; i++) {
    const selectedIdx = makeRandomIndex(numArray.length);
    computerNumPicks.push(String(numArray[selectedIdx]));
    numArray.splice(selectedIdx, 1);
  }
  const computerNum = computerNumPicks.join('');
  return computerNum;
};

export default createComputerNum;
