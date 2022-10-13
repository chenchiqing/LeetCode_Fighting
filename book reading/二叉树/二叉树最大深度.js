var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    return maxLen(maxDepth(root.left,), maxDepth(root.right)) + 1;
};

function maxLen(left, right) {
    if(left > right) {
        return left;
    }else {
        return right;
    }
}