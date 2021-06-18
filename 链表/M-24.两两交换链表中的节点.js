/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const four = new ListNode(4)
const three = new ListNode(3, four)
const two = new ListNode(2, three)
const one = new ListNode(1, two)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法一： 迭代
/* const swapPairs = function (head) {
  if (!head) return null
  if (!head.next) return head
  let virtualNode = new ListNode('*', head)
  let temp = virtualNode
  while (temp.next && temp.next.next) {
    let two = temp.next.next
    let one = temp.next
    temp.next = two
    one.next = two.next
    two.next = one
    temp = one
  }
  return virtualNode.next
} */
// 方法二： 递归
const swapPairs = function (head) { 
  if (!head || !head.next) return head
  let two = head.next
  head.next = swapPairs(two.next)
  two.next = head
  return two
}
swapPairs(one)