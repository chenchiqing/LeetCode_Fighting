function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {
    if(!preorder) return null;
    let root = new TreeNode(preorder[0]);

    let index = inorder.findIndex((number) => number == root.val);
    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
    root.right = buildTree(preorder.slice(index + 1, preorder.length), inorder.slice(index + 1, inorder.length));

    return root;
};