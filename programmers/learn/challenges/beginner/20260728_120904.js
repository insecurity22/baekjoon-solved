function solution(common) {
    const last = common.length - 1;
    
    // 등차수열
    if((common[2] - common[1]) === (common[1] - common[0])) {
        const diff = common[1] - common[0];
        return common[last] + diff;
    }
    
    // 등비수열
    const ratio = common[1] / common[0];
    return common[last] * ratio;
}