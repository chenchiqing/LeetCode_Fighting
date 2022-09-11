var intersect = function(nums1, nums2) {
    // hashmap
    let ans = [];
    let hash = new Map();
    nums1.forEach(num => {
        if(hash.get(num)) {
            hash.set(num, hash.get(num) + 1);
        }else {
            hash.set(num, 1);
        }
        
    })
    nums2.forEach(num => {
        if(hash.get(num)) {
            ans.push(num);
            hash.set(num, hash.get(num) - 1);
        }
    })
    return ans;
};