const lowestCommonAncestor = function(root, p, q) {
    if (!root) return false
    const l = lowestCommonAncestor(root.left, p , q)
    const r = lowestCommonAncestor(root.right, p, q)
    if (l && r || ((root.val === p.val || root.val === q.val) && (l || r))) {
      return root
    }
    return (l || r) || (root.val === p.val || root.val === q.val)
}
