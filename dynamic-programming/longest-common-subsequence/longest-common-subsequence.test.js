const {
  recursive
} = require('./longest-common-subsequence');

const deepCompareArrayIgnoringOrder = (A, B) => {
  expect(A.sort()).toEqual(B.sort())
}

test('deep compare', () => {
  const A = [['A', 'B', 'C'], ['C', 'B', 'A']];
  const B = [['C', 'B', 'A'], ['A', 'B', 'C']];
  deepCompareArrayIgnoringOrder(A, B);
})

test('a', () => {
  const X = ['A', 'B', 'C', 'B', 'D', 'A', 'B'];
  const Y = ['B', 'D', 'C', 'A', 'B', 'A'];
  const LCS = recursive(X, Y);
  const solution = [['B', 'C', 'B', 'A'], ['B', 'D', 'A', 'B']]
  deepCompareArrayIgnoringOrder(LCS, solution)
})