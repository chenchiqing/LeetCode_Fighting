var postorderTraversal = function(root) {
    let res = [];
    if(!root) return res;
    let stack = [];
    while(stack.length > 0 || root) {
       while(root) {
        stack.push(root);
        res.unshift(root.val);
        root = root.right;
       }
       root = stack.pop();
       root = root.left;
    }
    return res;
};