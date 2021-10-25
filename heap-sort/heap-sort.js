// O(lg n)
/**
 * It assumes that the binary tree rooted at left(i) and right(i) are max heaps,
 * but A[i] might be smaller than its children
 * @param {number[]} A The input array
 * @param {number} i The order, starts with 1
 */
const maxHeapify = (A, i) => {
  // let's assume index starts with 0, order starts with 1
  const nodeOrder = i;
  const nodeIndex = i - 1;
  const node = A[nodeIndex];

  const leftOrder = nodeOrder * 2
  const leftIndex = leftOrder - 1;
  const left = A[leftIndex];

  const rightOrder = nodeOrder * 2 + 1
  const rightIndex = rightOrder - 1;
  const right = A[rightIndex];

  const heapSize = A.length;
  let max = node;

  if (leftOrder <= heapSize && left > max) {
    max = left
  }
  if (rightOrder <= heapSize && right > max) {
    max = right
  }

  if (max === node) {
    // pass
  } else if (max === left) {
    [A[nodeIndex], A[leftIndex]] = [A[leftIndex], A[nodeIndex]];
    maxHeapify(A, leftOrder)
  } else if (max === right) {
    [A[nodeIndex], A[rightIndex]] = [A[rightIndex], A[nodeIndex]];
    maxHeapify(A, rightOrder)
  }

  return A
}

// O(n)
const buildMaxHeap = (A) => {
  const heapSize = A.length;
  for (let i = Math.floor(heapSize / 2); i>=1; i--) {
    A = maxHeapify(A, i);
  }
  return A
}

// O(nlg n)
const heapSort = (A) => {
  // const maxHeapified = buildMaxHeap(A);
  // for (let i=A.length-1; i>=1; i--)
}

module.exports = {
  maxHeapify,
  buildMaxHeap,
  heapSort
}