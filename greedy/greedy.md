Elements of the greedy strategy

**Greedy-choice property**

we can assemble a globally
optimal solution by making locally optimal (greedy) choices

In dynamic
programming, we make a choice at each step, but the choice usually depends on the
solutions to subproblems.

In a greedy algorithm, we make whatever choice
seems best at the moment and then solve the subproblem that remains. The choice
made by a greedy algorithm may depend on choices so far, but it cannot depend on
any future choices or on the solutions to subproblems.

**Optimal substructure**

A problem exhibits optimal substructure if an optimal solution to the problem
contains within it optimal solutions to subproblems.