Context: positive integer i denotes the length of a steel rod, 
p is an array so that p[1...n] denotes the prices for the length i.
For a positive integer n, cut it into i's, find the maximum revenue.

Recursive top-down implementation (inefficient):
```
CUT-ROD(p, n)
if n == 0
    return 0
q = -Infinity
for i = 1 to n
    q = max(q, p[i] + CUT-ROD(p, n - i))
``` 

To optimize:
1. top-down with memoization -> save the subproblem results into a hash table.
2. bottom-up -> sort the
                subproblems by size and solve them in size order, smallest first.

These two approaches yield algorithms with the same asymptotic running time,
except in unusual circumstances where the top-down approach does not actually
recurse to examine all possible subproblems. The bottom-up approach often has
much better constant factors, since it has less overhead for procedure calls.

```
BOTTOM-UP-CUT-ROD(p, n)
let r[0...n] be a new array
r[0] = 0
for j = 1 to n
    q = -Infinity
    for i = 1 to j
        q = max(q, p[i] + CUT-ROD(p, n - i))
    r[j] = q
return r[n]
``` 