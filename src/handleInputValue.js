export default function handleInputValue(e) {
  if (isNaN(e.target)) {
    alert("숫자로 입력해주세요");
  } else if (e.target.value.length > 3) {
    alert("세자리 숫자까지 입력해주세요");
  } else {
    return e.target.value;
  }
}
