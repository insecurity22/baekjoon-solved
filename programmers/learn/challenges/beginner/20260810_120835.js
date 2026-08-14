function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);
    return emergency.map((v) => sorted.indexOf(v) + 1); // indexOf(): 특정 값이 몇 번쨰 위치에 있는지
}