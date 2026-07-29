function solution(sides) {
    const max = Math.max(...sides);
    const sum = sides.reduce((acc, cur) => acc + cur, 0) - max;
    return max < sum ? 1 : 2;
}

// 1. 정렬 후 가장 긴 변을 기준으로 판별
// const [a, b, long] = sides.sort((a, b) => a - b);
// return long < a + b ? 1 : 2;