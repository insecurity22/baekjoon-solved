function solution(n) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        count += 1;
        while(count % 3 === 0 || /3/.test(String(count))) {
            count += 1;
        }
    }
    return count;
}

// 1. 가독성 고려
// function solution(n) {
//     let count = 0;
//     let number = 0;
//     while (count < n) {
//         number++;
//         if (number % 3 !== 0 && !String(number).includes("3")) {
//             count++;
//         }
//     }
//     return number;
// }