We have a set S = {a1, a2, ..., an}
of n proposed activities that wish to use a resource, such as a lecture hall, which
can serve only one activity at a time.  
For activity ai, its start time is si, and end time is fi. The activity takes time
interval [si, fi).
Activity ai and aj are compatible if their time intervals do not overlap. **We wish to select a maximum-size
subset of mutually compatible activities.**

We assume that the activities are sorted
in monotonically increasing order of finish time:  
f1 <= f2 <= ... <= fn

**Optimal substructure**  
Sij -> set of activities start after activity ai ends and end before aj starts  
Aij -> maximum set in Sij
ak -> some activity in Sij  
Assume ak is in an optimal solution, then we have two subproblems: find max set
in Sik and Skj

**Making the greedy choice**  
However, we could choose an activity to add to our optimal solution without having
         to first solve all the subproblems
         
**Theorem 16.1**  
Consider any non-empty subproblem Sk, and let am to be an activity in Sk with the 
earliest finish time. Then am is included in some maximum-size subset of mutually
compatible activities of Sk.


