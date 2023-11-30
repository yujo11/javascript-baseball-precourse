export default function handleInputValue(e) {
  const inputValue = parseInt(e.target.value);

  if (isNaN(inputValue)) {
    alert("숫자로 입력해주세요");
  } else if (e.target.value.length > 3) {
    alert("세자리 숫자까지 입력해주세요");
  } else {
    const gameValue = e.target.value.split("").map(Number);
    return gameValue;
  }
}
