var firstUniqChar = function(s) {
    let hash = new Map();
    for(let str of s) {
        // console.log(str);
        if(hash.has(str)) {
            hash.set(str, hash.get(str) + 1);
        }else {
            hash.set(str, 0);
        }
        console.log(hash.get(str));
    }
    for(let str of s) {
        if(hash.get(str) == 0) {
            return s.indexOf(str);
        }
    }
    return -1;
};

firstUniqChar("leetcode");