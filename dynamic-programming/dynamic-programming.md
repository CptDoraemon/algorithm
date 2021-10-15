Two ingredients that an optimization problem must have in order for 
dynamic programming to apply: 
**optimal substructure**, and **overlapping subproblems**.

### optimal substructure
A problem is said to have **optimal substructure** if an optimal solution can 
be constructed from optimal solutions of its subproblems. Suppose that each of the subproblem 
solutions to the subproblems is not optimal and if you could derive a 
contradiction, then optimal substructure might apply to this problem.

For optimal substructure to exists, the subproblems has to be independent to others,
that is, the solution to one subproblem does not affect the solution to another subproblem.


### overlapping subproblems
In contrast, a problem for which a divide-and-conquer approach is suitable usually generates 
brand-new problems at each step of the recursion.