var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let res = [];
    let len = nums.length;
    for(let i = 0; i < len - 2; i ++) {
        // 过滤重复的target值
        if(i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        // target值大于0，则后续都大于0
        if(nums[i] > 0) {
            break;
        }
        let left = i + 1;
        let right = len - 1;
        let target = -nums[i];
        while(left < right) {
            let sum = nums[left] + nums[right];
            if(target == sum) {
                res.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] == nums[left + 1]) {
                    left ++;
                }
                while(left < right && nums[right] == nums[right -1 ]) {
                    right --;
                }
                left ++;
                right --;
            } else if(target < sum) {
                right --;
            } else {
                left ++;
            }
        }
    }
    return res;
};

threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);