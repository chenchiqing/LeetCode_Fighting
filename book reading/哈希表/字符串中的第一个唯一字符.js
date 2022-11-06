var firstUniqChar = function(s) {
    let hash = new Map();
    for(let i of s) {
        if(hash.has(i)) {
            hash.set(i, hash.get(i) + 1);
        }else {
            hash.set(i ,1);
        }
    }
    for(let i = 0; i < s.length; i ++) {
        if(hash.get(s[i]) == 1) {
            return i;
        }else {
            continue;
        }
    }
    return -1;
};