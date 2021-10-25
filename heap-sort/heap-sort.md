**Heap**

![6-1](./6-1.jpg?raw=true)

```
Parent(i)  
    return Math.floor(i/2)

Left(i)
    return 2i

Right(i)
    return 2i + 1
```

**Max-heap**  
A[Parent(i)] >= A[i]

**Min-heap**  
A[Parent(i)] <= A[i]

The MAX-HEAPIFY procedure, which runs in O(lg n) time, is the key to maintaining the max-heap property.


The BUILD-MAX-HEAP procedure, which runs in linear time, produces a max heap from an unordered input array.

The HEAPSORT procedure, which runs in O(n lg n) time, sorts an array in
place.

The MAX-HEAP-INSERT, HEAP-EXTRACT-MAX, HEAP-INCREASE-KEY,
and HEAP-MAXIMUM procedures, which run in O(lg n) time, allow the heap
data structure to implement a priority queue