function solution(s) {
    let stack = [];

    s.split(' ').forEach((v) => {
        if(v === "Z") stack.pop();
        else stack.push(+v);
    })

    return stack.reduce((acc, cur) => acc + cur, 0)
}