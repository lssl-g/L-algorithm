/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* const isPalindrome = function(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr.join('') === arr.reverse().join('')
} */
const isPalindrome = function(head) {
  let arr = []
  
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) return false
  }
  return true
}