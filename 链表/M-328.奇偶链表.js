/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  let odd =head
  if (!head) return null
  let even = head.next
  let curOdd = odd
  let curEven = even 
  while (curEven && curEven.next) {
    curOdd.next = curOdd.next.next
    curOdd = curOdd.next

    curEven.next = curEven.next.next
    curEven = curEven.next
  }
  curOdd.next = even
  return odd
}
