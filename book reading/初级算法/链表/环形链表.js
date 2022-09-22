var hasCycle = function(head) {
    if(head == null && head.next == null) {
        return false;
    }
    let node = head;
    let hash = new Map();
    while(node) {
        if(hash.has(node)) {
            return true;
        }
        hash.set(node, true);
        ndoe = ndoe.next
    }
    return false;
};