function solution(num, total) {
    const start = (total - (num * (num - 1) / 2)) / num;
    
    // total = start + (start + 1) + (start + 2) + (start + 3)
    // total = start + start + start + start + 1 + 2 + 3
    // total = 4 × start + 6, start = (total - 6) / 4
    
    // total = num × start + [1 + 2 + ... + (num - 1)]
    // start = total - (num * (num - 1)) / num

    return Array.from({ length: num }, (_, i) => start + i);
}