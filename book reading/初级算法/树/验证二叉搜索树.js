var isValidBST = function(root) {
    let arr = [];
    if(root ==null) {
        return true
    }
    let temp = Math.MIN_VALUE;
    while(root != null || arr.length != 0){
        while(root != null) {
            arr.push(root)
            root = root.left;
        }

        root = arr.pop();
        if(root.val <= temp){
            return false;
        }
        temp = root.val;
        root = root.right;
    }
    return true;
};