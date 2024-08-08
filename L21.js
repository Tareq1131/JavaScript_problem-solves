function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);  // Create a dummy node to act as the head of the merged list
    let current = dummy;  // Pointer to the current node in the merged list

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;  // Append the smaller node to the merged list
            list1 = list1.next;  // Move the pointer of list1
        } else {
            current.next = list2;  // Append the smaller node to the merged list
            list2 = list2.next;  // Move the pointer of list2
        }
        current = current.next;  // Move the pointer of the merged list
    }

    // Attach the remaining nodes of list1 or list2
    current.next = (list1 === null) ? list2 : list1;

    return dummy.next;  // The merged list starts from the next node of dummy
};
