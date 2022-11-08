var intersect = function(nums1, nums2) {
    let hash = new Map();
    let res = [];
    for(let i of nums1) {
        if(hash.has(i)) {
            hash.set(i, hash.get(i) + 1);
        }else {
            hash.set(i, 1);
        }
    }
    for(let i of nums2) {
        if(hash.has(i) && hash.get(i) > 0) {
            res.push(i);
            hash.set(i, hash.get(i) - 1);
        }
    }
    return res;

};