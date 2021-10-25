**Binary-search-tree property:**

Let x be a node in a binary search tree. If y is a node in the left subtree
of x, then y.key <= x.key. If y is a node in the right subtree of x, then
y.key >= x.key

**Deleting Node**  
Supposing we are deleting node z:  
1. If z has no child, just delete it.
2. If z has only one child, then replace z with its child. 
Assume z's parent is y. if z is y's left child, which means z and all of its
descendents are smaller than y, so z's only child is smaller than y and it will
be a valid left child of y.
3. if z has 2 children. 
    * asd