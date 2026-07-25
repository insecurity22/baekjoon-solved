function solution(age) {
    return [...String(age)].map((value) => String.fromCharCode(+value + 97)).join('');
}

// 1. 문제 규칙을 직접 표현한 방식
// - 숫자 → 알파벳 변환 규칙을 그대로 표현해 의도를 이해하기 쉽다.

// function solution(age) {
//     const alphabet = "abcdefghij";
//     return String(age).split("").map(num => alphabet[num]).join("");
// }