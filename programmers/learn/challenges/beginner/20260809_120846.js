function solution(n) {
    return Array.from({ length: n }, (_, i) => i + 1)
        .filter(n => {
            let divisorCount = 0;
            for(let i = 1; i <= n; i++) {
                if(n % i === 0) divisorCount++;
            }
            return divisorCount >= 3;
        }).length;
}