function solution(balls, share) {
    const factorial = num => {
        let result = 1n;
        for (let i = 2n; i <= BigInt(num); i++) {
            result *= i;
        }
        return result;
    }

    return factorial(balls) / (factorial(balls - share) * factorial(share));
}

// 1. 큰 수의 정밀도 손실을 방지하기 위해 BigInt 사용
// - 숫자 뒤의 n은 BigInt 타입을 의미

// 2. 재귀 함수로 팩토리얼을 구현한 간단한 풀이
// const factorial = num => num === 0 ? 1 : num * factorial(num - 1);
// function solution(balls, share) {
//     return Math.round(
//         factorial(balls) / factorial(balls - share) / factorial(share)
//     );
// }