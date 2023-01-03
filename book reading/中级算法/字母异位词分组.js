var groupAnagrams = function(strs) {
    let hash = new Map();
    for(let str of strs) {
        let item = Array.from(str);
        console.log(item);
        let key = item.sort().join('');
        console.log(key);
        let arr = hash.get(key) ? hash.get(key): new Array();
        arr.push(str);
        hash.set(key, arr);
    }
    return Array.from(hash.values());
};

groupAnagrams(['cba']);
