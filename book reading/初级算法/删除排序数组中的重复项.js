var removeDuplicates = function(nums) {
    let len = nums.length;
    let left = 0;
    let right = 1;
    if(!len) {
        return 0;
    }
    while(right < len) {
        if(nums[left] != nums[right]) {
            left += 1;
            nums[left] = nums[right];
        }
        right ++;
    }
    return left + 1;
};

console.log(removeDuplicates([0,0,0,1,1,2,3]));