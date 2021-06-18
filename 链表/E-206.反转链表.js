/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const one = new ListNode(1)
const two = new ListNode(2)
const three = new ListNode(3)
const four = new ListNode(4)
const five = new ListNode(5)
one.next = two
two.next = three
three.next = four
four.next = five
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法一： 迭代
const reverseList = function (head) {
  let pre = null
  while (head) {
    const temp = head.next
    head.next = pre
    pre = head
    head = temp
  }
  return pre
}
reverseList(one)