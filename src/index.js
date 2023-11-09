import BaseballGame from "./BaseballGame.js";

const concatPrimitiveIterToStr = (iter) =>
  Array.from(iter).reduce((prev, cur) => prev + cur, "");

const generateRandomInt = (length = 1) => {
  const min = 10 ** (length - 1);
  const max = 10 ** length;

  return Math.floor(Math.random() * (max - min)) + min;
};

const generateFixedSizeSet = (size = 1, generateValue) => {
  const set = new Set();
  while (set.size < size) {
    const value = generateValue();
    set.add(value);
  }
  return set;
};

const generateRandomIntArr = (length) =>
  Array.from(generateFixedSizeSet(length, generateRandomInt));

const computerInputNumbers = Number(
  concatPrimitiveIterToStr(generateRandomIntArr(3))
);
