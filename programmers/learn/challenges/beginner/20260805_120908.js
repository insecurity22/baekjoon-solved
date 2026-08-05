function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

// 1. 현재 풀이 (includes)
// - 문자열 포함 여부를 확인하는 목적에 가장 적합한 메서드다.
// - 가독성이 가장 좋고 불필요한 배열을 생성하지 않으며, 시간 복잡도는 O(n)이다.

// 2. indexOf()
// - 1번과 마찬가지지만 `=== -1`을 기억해야 하고, 의도가 `includes()`보다 직관적이지 않다. 

// return str1.indexOf(str2) === -1 ? 2 : 1;

// 3. split()
// - 배열을 생성하므로 불필요한 메모리를 사용하며, 포함 여부만 확인하는 목적 임에도 불구하고 문자열을 분리해 판단하므로 비효율적이다. 

// return str1.split(str2).length > 1 ? 1 : 2;