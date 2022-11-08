var containsNearbyDuplicate = function(nums, k) {
    let hash = new Map();
    for(let i = 0; i < nums.length; i ++) {
        if(hash.has(nums[i])) {
            let diff =i - hash.get(nums[i]);
            if(diff <= k) {
                return true;
            }else {
                hash.set(nums[i], i);
            }
        }else {
            hash.set(nums[i], i);
        }
    }
    return false;
};