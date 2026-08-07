function solution(A, B) {
    let str = [...A];
    let count = 0;
    
    while(str.join('') !== B) {
        str.unshift(str.pop());
        count++;
        
        if(count > A.length) return -1;
    }
    
    return count;
}

// 1. 가장 간단한 구현
// - B를 두 번 이어 붙인 문자열에서 A의 위치를 찾아 이동 횟수를 구하는 방식으로, 가장 간결하게 구현할 수 있다.

// return (B + B).indexOf(A);

// 2. 배열 회전
// - 문자열을 배열로 변환해 한 칸씩 회전시키며 B와 비교하는 방식이다.

// function solution(A, B) {
//     let arr = [...A];

//     for (let i = 0; i <= A.length; i++) {
//         if (arr.join("") === B) return i;

//         arr.unshift(arr.pop());
//     }

//     return -1;
// }