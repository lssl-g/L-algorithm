/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 方法一： 快慢指针
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* const hasCycle = function (head) {
  if (!head || !head.next) return false
  let one = head
  let two = head.next
  while (two != one) {
    if (!(two.next && two.next.next)) return false 
    two = two.next.next
    one = one.next
  }
  return true
} */

const hasCycle = function (head) { 
    let set = new Set()
    while(head) {
      if (set.has(head)) return true
      else set.add(head)
      head = head.next
    }
    return false
}
