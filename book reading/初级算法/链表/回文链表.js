var isPalindrome = function(head) {
    if(head.next === null) return true;

    const firEnd = getHalf(head);//前半部分的最后一个结点
    const secStart = reverse(firEnd.next);//后半部分的第一个结点

    //双指针判断两个链表是否相等
    let n1 = head;
    let n2 = secStart;
    let res = true;
    while(n2 && res) {//回文判断
        if(n1.val !== n2.val) res = false;
        n1 = n1.next;
        n2 = n2.next;
    }

    firEnd.next = reverse(secStart);//恢复链表
    return res;
};
//找到中点
const getHalf = (node) => {
    let slow = node;
    let fast = node;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
//翻转链表
const reverse = (node) => {
    let [last, cur] = [null, node];
    while(cur) {
        [cur.next, last, cur] = [last, cur, cur.next];
    }
}