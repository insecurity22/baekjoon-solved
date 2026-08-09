function solution(array) {
    let countMap = new Map();
    
    // 등장 횟수 등록
    array.forEach((v) => countMap.set(v, (countMap.get(v) || 0) + 1));
    
    // 등장 횟수가 많은 순서로 정렬
    const sorted = [...countMap].sort((a, b) => b[1] - a[1]);
    const [first, second] = sorted;
    
    return second && first[1] === second[1] ? -1 : first[0];
}