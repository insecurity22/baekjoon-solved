# 8단계 수학 1 학습 메모

수학 1 단계를 풀면서 자주 쓰는 문법과 핵심 개념을 정리합니다.

## 1) B진법 문자열을 10진법으로 (`2745번`)

- B진법 문자열 N은 오른쪽부터 각 자리값에 𝐵^𝑖를 곱해 모두 더하면 10진수로 변환된다. 예를 들어 10진수라면 자리마다 10의 거듭제곱을 곱해 더한 값으로 `123 = 1×10^2 + 2×10^1 + 3×10^0`이다.
  - 진법에 따라 사용할 수 있는 숫자가 다르다.
    - 2진수: 0~1
    - 8진수: 0~7
    - 16진수: 0~9, A~F
    - 36진수: 0~9, A~Z
- 한 문자를 B진법에서 쓰는 수치(0~B-1)로 바꿀 때:
  - `'0'`~`'9'` → `Number(char)` (숫자 그대로 0~9)
  - `'A'`~`'Z'` → `char.charCodeAt(0) - 'A'.charCodeAt(0) + 10` (A=10, B=11, …, Z=35, 10~35)

```js
const base = Number(B);
let result = 0;
for (let i = 0; i < N.length; i++) {
  const char = N[N.length - i - 1];
  const value =
    char >= "0" && char <= "9"
      ? Number(char)
      : char.charCodeAt(0) - "A".charCodeAt(0) + 10;
  result += value * base ** i;
}
console.log(result);
```

```js
console.log(parseInt(N, base));
```
