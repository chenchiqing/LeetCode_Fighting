var reverseList = function(head) {
    let [last, cur] = [null, head];
    while(cur) {
        [cur.next, last, cur] = [last, cur, cur.next];
    }
    return last;
};