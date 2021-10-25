const {
  maxHeapify,
  buildMaxHeap,
  heapSort
} = require('./heap-sort');

test('max heapify', () => {
  // see figure 6-2 for reference
  const A = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
  const i = 2;
  const maxHeapified = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];

  expect(maxHeapify(A, i)).toEqual(maxHeapified);
})

test('build max heap', () => {
  const A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
  const maxHeap = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];

  expect(buildMaxHeap(A)).toEqual(maxHeap);
})

// test('heap sort', () => {
//   const A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
//   const sorted = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16];
//
//   expect(heapSort(A)).toEqual(sorted);
// })