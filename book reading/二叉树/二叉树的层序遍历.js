var levelOrder = function(root) {
    let res = [];
    if(root) return res;
    // 初始化一个空队列
    let queue = [];
    queue.push(root);
    while(queue.length > 0) {
        ans.push([]);
        let len = queue.length;
        for(let i =0; i < len; i ++) {
            let node = queue.shift();
            ans[ans.length - 1].push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return res;
};