var hasPathSum = function(root, targetSum) {
    if(root == null) return false;
    let nodeArr = [root];
    let valArr = [0];
    while(nodeArr.length > 0) {
        let curNode = nodeArr.shift();
        let curVal = valArr.shift();
        curVal += curNode.val;
        if(!curNode.left && !curNode.right && curVal == targetSum) {
            return true;
        }
        if(curNode.left) {
            nodeArr.push(curNode.left);
            valArr.push(curVal);
        }
        if(curNode.right) {
            nodeArr.push(curNode.right);
            valArr.push(curVal);
        }
    }
    return false;
};