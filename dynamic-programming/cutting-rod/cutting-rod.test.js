const {
  p,
  recursive
} = require('./cutting-rod');

const maxRevenue = [0, 1, 5, 8, 10, 13, 17, 18, 22, 25, 30];

describe('Recursive top-down implementation (inefficient)', () => {
  for (let n=1; n<maxRevenue.length; n++) {
    test(`rod length ${n}`, () => {
      expect(recursive(p, n)).toBe(maxRevenue[n])
    })
  }
})