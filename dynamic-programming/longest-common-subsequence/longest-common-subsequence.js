/**
 * @param A {Array<any>}
 * @param B {Array<any>}
 * @return {Array<Array<any>>}
 */
const recursive = (A, B) => {
  if (A.length === 1) {
    return B.includes(A[0]) ? [[A[0]]] : [[]]
  }
  if (B.length === 1) {
    return A.includes(B[0]) ? [[B[0]]] : [[]]
  }

  const ALast = A[A.length - 1];
  const BLast = B[B.length - 1];
  if (ALast !== BLast) {
    const ASub = recursive(A.slice(0, A.length - 1), B.slice());
    const BSub = recursive(A.slice(), B.slice(0, B.length - 1));
    if (ASub[0].length === BSub[0].length && ASub[0].length !== 0) {
      // TODO A & B may be the same ignoring the order
      return [...ASub, ...BSub]
    } else if (ASub[0].length > BSub[0].length) {
      return ASub
    } else if (ASub[0].length < BSub[0].length) {
      return BSub
    }
  }

  if (ALast === BLast) {
    const sub = recursive(A.slice(0, A.length - 1), B.slice(0, B.length - 1));
    return sub.map(arr => [...arr, ALast]);
  }
}

module.exports = {
  recursive
}