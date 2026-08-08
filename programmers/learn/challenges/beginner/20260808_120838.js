const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    return letter.split(' ').map((m) => morse[m]).join('');
}

// 풀이: 5초 소요.

// reduce 풀이.
// return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '');