const {
  recursive
} = require('./matrix-chain-multiplication');

test('a', () => {
  const dimensions = [10, 100, 5, 50];
  expect(recursive(dimensions, 1, 3)).toEqual(7500);
})

test('b', () => {
  const dimensions = [30, 35, 15, 5, 10, 20, 25];
  expect(recursive(dimensions, 1, 6)).toEqual(15125);
})