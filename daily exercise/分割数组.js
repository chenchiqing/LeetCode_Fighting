var partitionDisjoint = function(nums) {
    let flag = nums[0];
    let len = nums.length;
    let leftMax = nums[0];
    let leftPosition = 0;
    for(let i = 1; i < len; i ++) {
        flag = Math.max(flag, nums[i]);
        if(leftMax > nums[i]) {
            leftMax = flag;
            leftPosition = i;
        }

    }
    return leftPosition + 1;
};