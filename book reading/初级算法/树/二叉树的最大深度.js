// 广度
var maxDepth = function(root) {
    if(root == null) return 0;
    let max = 0;
    let arr = [];
    arr.push(root);
    while(arr.length) {
        let len = arr.length
        for(let i = 0; i < len; i ++) {
            let node = arr.shift();
            if(node.left) arr.push(node.left);
            if(node.right) arr.push(node.right);
        }
        max ++;
    }
    return max;

}; 

// 深度
var maxDepth = function(root) {
    if(root == null) {
        return 0;
    }else {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        return Math.max(left, right) + 1;
        
    }
    
};