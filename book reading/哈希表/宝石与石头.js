var numJewelsInStones = function(jewels, stones) {
    let hash = new Map();
    let res = 0;
    for(let item of jewels) {
        hash.set(item, 1);
    }
    for(let item of stones) {
        if(hash.has(item)) {
            res += 1;
        }
    }
    return res;
};