function solution(order) {
    return [...String(order)].reduce((acc, cur) => cur.match(/3|6|9/) ? acc + 1 : acc, 0) // = 3|6|9는 [369]와 결과가 완전히 같다.
}

// 1. 가장 간단한 방법
// - 3, 6, 9에 해당하는 문자만 찾아 개수를 세고, match() 결과가 없으면 null을 반환하므로 빈 배열로 처리한다.

// return (String(order).match(/[369]/g || []).length;

// 2. 이외 방법

// 1) filter
// return [...String(order)].filter(v => ["3", "6", "9"].includes(v)).length;
// return Array.from(order.toString()).filter(v => ['3', '6', '9'].includes(v)).length;
// return order.toString().split("").filter(v => v === "3" || v === "6" || v === "9").length;

// 2) 반복문
// let count = 0;
// for (const num of String(order)) {
//     if (num === "3" || num === "6" || num === "9") count++;
// }
// return count;

// 3) replace 방법
// return String(order).replace(/[0-2|4-5|7-8]/g, "").length;

// 4) 현재 풀이: 문자열을 순회하며 3, 6, 9에 매칭되면 개수를 증가시킨다.