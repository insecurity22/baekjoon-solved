function solution(angle) {
    if(0 < angle && angle < 90) return 1;
    if(angle === 90) return 2;
    if(90 < angle && angle < 180) return 3;
    if(angle === 180) return 4;
}

// 1. filter 활용
// return [0, 90, 91, 180].filter(x => angle >= x).length;