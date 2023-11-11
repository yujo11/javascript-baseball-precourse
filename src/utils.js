export const convertDigitArrayToInt = (digitArr) => parseInt(digitArr.join(""));

export const generateRandomInt = (length = 1) => {
  const min = 10 ** (length - 1);
  const max = 10 ** length;

  return Math.floor(Math.random() * (max - min)) + min;
};

export const generateFixedSizeSet = (size = 1, generateValue) => {
  const set = new Set();
  while (set.size < size) {
    const value = generateValue();
    set.add(value);
  }
  return set;
};

export const generateNonDuplicateRandomIntArray = ({
  arraylength,
  digitCount = 1,
}) =>
  Array.from(
    generateFixedSizeSet(arraylength, () => generateRandomInt(digitCount))
  );
