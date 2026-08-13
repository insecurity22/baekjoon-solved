function solution(n) {
    let factorial = 1;
    let i = 1;
    
    while((factorial * (i + 1)) <= n) { // :next factorial
        i++;
        factorial *= i;
    }
    
    return i;
}