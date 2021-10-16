**Context**  
note: subsequence is not substring  
Given a sequence  
X = <x1, x2, ..., xm>,  
another sequence   
Z = <z1, z2, ..., zk>   
is a subsequence of X if there exists a strictly
increasing sequence  <i1, i2, ..., ik> of indices of X such that for all 
j = 1, 2, 3, ..., k, we have xij = zj.  
For example, Z = <B, C, D, B> is a subsequence of 
X = <A, B, C, B, D, A, B>with corresponding index sequence <2, 3, 5, 7>.

**Theorem 15.1 (Optimal substructure of an LCS)**  
let X = <x1, x2, ..., xm> and Y = <y1, y2, ..., yn> be sequences,
and let Z = <z1, z2, ..., zk> be any LCS of X and Y.  
1. if xm = yn, then xm = yn = zk, and Zk-1 is an LCS of Xm-1 and Yn-1.
2. if xm != yn, and zk != xm, then Z is an LCS of Xm-1 and Y.
3. if xm != yn, and zk != yn, then Z is an LCS of Xm and Yn-1.

**recursive solution**
if xm = yn, we must find the LCS of Xm-1 and Yn-1;  
if xm != yn, we must solve 2 subproblems, find LCS of Xm-1 and Yn, and LCS of
Xm and Yn-1, whichever longer is LCS of X and Y.
