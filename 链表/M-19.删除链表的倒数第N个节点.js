/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  let start = new ListNode('*', head)
  let foch = start
  const arr = []
  while (foch) {
    arr.push(foch)
    foch = foch.next
  }

  let pre = arr[arr.length - n - 1]
  pre.next = arr[arr.length - n].next
  return start.next
}
