var containsDuplicate = function(nums) {
    let hash = new Set();
    for(let i of nums) {
        if(hash.has(i)) {
            return true;
        }
        hash.add(i);
    }
    return false;
};