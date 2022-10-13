var isSymmetric = function(root) {
    if(!root) return true;
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length > 0) {
        let left = queue.shift();
        let right = queue.shift();
        if(!left && !right) continue;
        if(!left || !right || left.val != right.val) {
            return false;
        }
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
};