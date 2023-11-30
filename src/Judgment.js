export default function judgment(rightAnswer, answer) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < rightAnswer.length; i++) {
    if (rightAnswer[i] === answer[i]) {
      strike++;
    } else if (rightAnswer.includes(answer[i])) {
      ball++;
    }
  }
}
