var mergeTwoLists = function(list1, list2) {
    let list = new ListNode(-1);
    let pre = list;
    while(list1 != null && list2 != null) {
        if(list1.val < list2.val) {
            pre.next = list1;
            list1 = list1.next;
        }else {
            pre.next = list2;
            list2 = list2.next;
        }
        pre = pre.next;
    }
    pre.next = list1 == null ? list2 : list1;
    return list.next;
};