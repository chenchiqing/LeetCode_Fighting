var containsDuplicate = function(nums) {
    let hash = new Map();
    for(let i of nums) {
        if(hash.has(i)) {
            return true;
        }else {
            hash.set(i, 1);
        }
    }
    return false;
};