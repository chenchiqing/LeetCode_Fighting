var removeNthFromEnd = function(head, n) {
    let preNode = new ListNode(-1);
    preNode.next = head;
    let fast = preNode;
    let slow = preNode;
    while(n > 0) {
        fast = fast.next;
        n --;
    }
    while(fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return preNode.next;
};