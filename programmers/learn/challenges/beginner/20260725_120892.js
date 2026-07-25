function solution(cipher, code) {
    let decrypted = '';
    for(let i = code - 1; i < cipher.length; i += code) {
        decrypted += cipher[i];
    }
    return decrypted;
}