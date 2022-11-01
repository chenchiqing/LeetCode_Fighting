var twoSum = function(nums, target) {
    let hash = new Map();
    for(let i = 0; i < nums.length;i ++) {
        if(hash.get(target - nums[i]) !== undefined) {
            return [i, hash.get(target - nums[i])]
        }
        hash.set(nums[i], i);
    }
};