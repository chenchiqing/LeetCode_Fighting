var lowestCommonAncestor = function(root, p, q) {
    if(!root || root.val == p || root.val == q) {
        return root;
    }

    let leftNode = root.left;
    let rightNode = root.right;
    if(!leftNode) return lowestCommonAncestor(rightNode, p, q);
    if(!rightNode) return lowestCommonAncestor(leftNode, p, q);

    if(leftNode && rightNode) {
        return root;
    }
};