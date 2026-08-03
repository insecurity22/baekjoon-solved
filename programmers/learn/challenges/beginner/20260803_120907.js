function solution(quiz) {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    return quiz.map((q) => {
        const [x, op, y, _, z] = q.split(' ');

        x = +x;
        y = +y;
        z = +z;

        return operators[op](x, y) === z ? 'O' : 'X';
    })
}