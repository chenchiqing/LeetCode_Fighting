// 我写的
var isAnagram = function(s, t) {
    if(!s || !t || s.length != t.length) {
        return false;
    }
    let hash1 = new Map();
    let hash2 = new Map();
    for(let str of s) {
        if(hash1.has(str)) {
            hash1.set(str, hash1.get(str) + 1);
        }else {
            hash1.set(str, 1);
        }
    }
    for(let str of t) {
        if(hash2.has(str)) {
            hash2.set(str, hash2.get(str) + 1);
        }else {
            hash2.set(str, 1);
        }
    }
    for(let i =0; i < s.length; i ++) {
        if(hash1.get(s[i]) !== hash2.get(s[i])) {
            return false;
        }
    }
    return true;
};

// 大佬的
var isAnagram = function(s, t) {
    function fun(string) {
        let arr = new Array(26).fill(0);
        for(let i = 0; i < string.length; i ++) {
            // 字母转ASCII码，对应位置的值+1
            let asc = string[i].charCodeAt() - 97;
            arr[asc] ++;
        }
        return arr.join('')
    }
    return s.length == t.length && fun(s) ==fun(t);
};