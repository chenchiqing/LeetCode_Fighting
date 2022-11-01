var isIsomorphic = function(s, t) {
    let hash1 = new Map();
    let hash2 = new Map();
    for(let i = 0; i < s.length; i ++) {
        if(!hash1.get(s[i])) {
            hash1.set(s[i], t[i]);
        }
        if(!hash2.get(t[i])) {
            hash2.set(t[i], s[i]);
        }
        if(hash1.get(s[i]) != t[i] || hash2.get(t[i]) != s[i]) {
            return false;
        }
    }
    return true;
};