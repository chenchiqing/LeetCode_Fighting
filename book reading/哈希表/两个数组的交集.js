function intersection(nums1, nums2) {
    let a = [];
    for (let i of nums1) {
        if (nums2.includes(i) && !a.includes(i)) {
            a.push(i);
        }
    }
    return a;
};
