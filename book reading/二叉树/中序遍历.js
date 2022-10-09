var inorderTraversal = function(root) {
    let res = [];
    if(!root) return res;
    let stack = [];
    while(stack.length || root) {
        if(root) {
            stack.push(root);
            root = root.left;
        }else {
            let node = stack.pop();
            res.push(node.val);
            root = node.right;
        }
    }
    return res;
};