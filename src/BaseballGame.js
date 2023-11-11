// Controller
export default class BaseballGame {
  #DIGIT_LENGTH = 3;
  #referee;

  constructor(referee) {
    this.#referee = referee;
  }

  play(computerInputNumbers, userInputNumbers) {
    const isValidInput =
      this.#validateInputNumbers(computerInputNumbers) &&
      this.#validateInputNumbers(userInputNumbers);
    if (!isValidInput) return "";

    const judgement = this.#judge(computerInputNumbers, userInputNumbers);
    const result = this.#formatResult(judgement);

    return result;
  }

  // TODO: 널 오브젝트 패턴?? Judgeable을 validate하는 서비스로 추출
  #validateInputNumbers(inputNumbers) {
    const inputStr = String(inputNumbers);
    if (!this.#validateCorrectLength(inputStr)) return false;
    if (!this.#validateAllDigit(inputStr)) return false;
    if (!this.#validateDuplication(inputStr)) return false;

    return true;
  }

  #validateCorrectLength(input) {
    return input.length === this.#DIGIT_LENGTH;
  }

  #validateAllDigit(input) {
    return /^\d+$/.test(input);
  }

  #validateDuplication(input) {
    return new Set(input).size === inputStr.length;
  }

  // TODO: Judgeable 객체를 두 개를 비즈니스 로직에 따라 처리하는 Referee 서비스로 추출
  #judge(computerInputNumbers, userInputNumbers) {
    const set = new Set();
    let strike = 0;
    let ball = 0;
    const computerInputDigits = Array.from(
      String(computerInputNumbers),
      Number
    );
    const userInputDigits = Array.from(String(userInputNumbers), Number);

    for (let i = 0; i < computerInputDigits.length; i++) {
      if (computerInputDigits[i] === userInputDigits[i]) {
        strike += 1;
        continue;
      }
      set.add(computerInputDigits[i]);
    }

    for (const userInputDigit of userInputDigits) {
      if (set.has(userInputDigit)) ball += 1;
    }

    return { strike, ball };
  }

  // TODO: VO 객체(Judge) 내의 로직으로 분리
  #formatResult({ strike, ball }) {
    if (strike === 0 && ball === 0) return "낫싱";
    if (strike === this.#DIGIT_LENGTH) return "정답을 맞추셨습니다!";
    if (strike === 0) return `${ball}볼`;
    if (ball === 0) return `${strike}스트라이크`;
    return `${ball}볼 ${strike}스트라이크`;
  }
}
