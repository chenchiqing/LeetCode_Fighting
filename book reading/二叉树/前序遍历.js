var preorderTraversal = function(root) {
    let res = [];
    if(!root) return res;
    let stack = [root];
    while(stack.length > 0) {
        let target = stack.pop();
        res.push(target.val);
        if(target.right) {
            stack.push(target.right);
        }
        if(target.left) {
            stack.push(target.left);
        }
    }
    return res;
};