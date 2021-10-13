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

