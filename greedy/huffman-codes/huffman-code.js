/**
 * @typedef c {{
 *    frequency: number,
 *    left?: c,
 *    right?: c,
 *    code?: string
 * }} a codeword
 */

/**
 * @param {Array<c>} C
 */
const huffman = (C) => {
  C.sort((a, b) => {
    return a.frequency - b.frequency
  });

  while(C.length > 1) {
    const left = C.shift();
    const right = C.shift();
    const newNode = {
      frequency: left.frequency + right.frequency,
      left,
      right
    }
    C.unshift(newNode)
  }

  return C
}

const C = [
  {
    code: 'f',
    frequency: 5
  },
  {
    code: 'e',
    frequency: 9
  },
  {
    code: 'c',
    frequency: 12
  },
  {
    code: 'b',
    frequency: 13
  },
  {
    code: 'd',
    frequency: 16
  },
  {
    code: 'a',
    frequency: 45
  }
];

console.log(JSON.stringify(huffman(C)))