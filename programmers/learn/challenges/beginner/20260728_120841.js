function solution(dot) {
    const [x, y] = dot;

    if (x > 0 && y > 0) return 1;
    if (x < 0 && y > 0) return 2;
    if (x < 0 && y < 0) return 3;
    return 4;
}

// 1. 더 간단한 풀이
// if (x > 0) {
//     return y > 0 ? 1 : 4;
// } else {
//     return y > 0 ? 2 : 3;
// }