var levelOrder = function(root) {
    const ans = [];
    if(!root) {
        return ans;
    }
    // 初始化队列
    let queue = [];
    queue.push(root);
    while(queue.length != 0) {
        ans.push([]);
        let len = queue.length;
        for(let i = 0; i < len; i ++) {
            let node = queue.shift();
            ans[ans.length - 1].push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return ans;
};