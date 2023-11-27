export default function getOtherNumber(otherNumber) {
  var otherNumber = [];
  var gameNumber = Math.floor(Math.random() * 9) + 1;

  while (otherNumber.length < 3) {
    if (!otherNumber.includes(gameNumber)) {
      otherNumber.push(gameNumber);
    }
  }
  console.log(otherNumber);
  return otherNumber.join("");
}
