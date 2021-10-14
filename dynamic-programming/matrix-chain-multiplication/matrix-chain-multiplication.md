**Context:**  
matrix A has row x column of p x q  
matrix B has row x column of m x n  
1. one can only multiply A and B only if q = m
2. the time to compute AxB is denominated by pqn

**Example:**  
we have a chain <A1, A2, A3> of 3 matrices, the dimensions are 
10x100, 100x5, and 5x50 respectively.  
One can compute their product in the way of either:  
1. ((A1A2)A3) -> time needed 10x100x5 + 10x5x50 = 5000 + 2500 = 7500
2. (A1(A2A3)) -> time needed 100x5x50 + 10x100x50 = 25000 + 50000 = 75000  

Approach 2 is 10 times slower than 1.

**The problem:**   
Denote a chain of matrices <A1, A2, ..., An>, where for i = 1, 2, ..., n, matrix Ai
has dimension p[i-1]xp[i], fully parenthesize the product A1A2...An in a way that 
minimizes the number of scalar multiplications.