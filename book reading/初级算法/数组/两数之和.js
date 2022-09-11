var twoSum = function(nums, target) {
    let len = nums.length;
    let hash = new Map();
    for(let i = 0; i < len; i ++) {
        if(hash.has(target - nums[i])) {
            return [i, hash.get(target - nums[i])];
        }
        hash.set(nums[i], i);
    }
};

console.log(twoSum([1,2,3,4,5,6], 7))