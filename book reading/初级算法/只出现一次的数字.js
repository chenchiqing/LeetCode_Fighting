var singleNumber = function(nums) {
    // 利用HashMap
    let hashMap = new Map();
    nums.forEach(num => {
        if(hashMap.has(num)) {
            hashMap.set(num, hashMap.get(num) + 1);
        }else {
            hashMap.set(num, 1);
        }
        
    })
    let ans = 0;
    nums.forEach(num => {
        if(hashMap.get(num) == 1) {
            ans = num;
        }
    })
    return ans;
};

console.log(singleNumber([1,1,2,2,3]));