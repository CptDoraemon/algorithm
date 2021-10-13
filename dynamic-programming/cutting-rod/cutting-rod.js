const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

// Recursive top-down implementation (inefficient):
function recursive(p, n) {
  if (n === 0) return 0;
  let q = -Infinity;
  for (let i=1; i<=n; i++) {
    q = Math.max(q, p[i] + recursive(p, n - i))
  }
  return q
}

module.exports = {
  p,
  recursive
}