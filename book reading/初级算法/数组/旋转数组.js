var rotate = function(nums, k) {
    // k的值可能比nums.length大
    k %= nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};

let reverse = function(arr, left, right) {
    while(left < right) {
        [arr[left ++] ,arr[right --]] = [arr[right], arr[left]];
    }
}
console.log(rotate([1,2,3,4,5,6,7]));