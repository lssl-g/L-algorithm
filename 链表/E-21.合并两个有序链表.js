/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let start = new ListNode('*')
  let curr = start
  while (l1 || l2) {
    if (!l1) {
      curr.next = l2
      break
    }
    if (!l2) {
      curr.next = l1
      break
    }
    if (l1.val > l2.val) {
      curr.next = l2
      l2 = l2.next
    } else {
      curr.next = l1
      l1 = l1.next
    }
    curr = curr.next
  }
  return start.next
}
