export default function getOtherNumber() {
  var otherNumber = [];

  while (otherNumber.length < 3) {
    var gameNumber = Math.floor(Math.random() * 9) + 1;

    if (!otherNumber.includes(gameNumber)) {
      otherNumber.push(gameNumber);
    }
  }

  return otherNumber;
}
