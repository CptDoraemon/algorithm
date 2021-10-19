const s = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12];  // start time of activity ai
// end time of activity ai
// note that this array is sorted
const f = [4, 5, 6, 7, 9, 9, 10, 11, 12, 14, 16];

const recursive = (s, f, k, n) => {
  // k is index k that defines subproblem Sk
  // n is the size of original problem

  let indexEndsEarliest = -Infinity;
  const startTime = k === 0 ? -Infinity : f[k-1];
  for (let i=k; i<s.length; i++) {
    if (s[i] >= startTime) {
      indexEndsEarliest = i
      break;
    }
  }

  if (indexEndsEarliest !== -Infinity) {
    if (indexEndsEarliest + 1 > n) {
      return null
    }
    const sub = recursive(s, f, indexEndsEarliest + 1, n);
    return sub === null ? [
      [s[indexEndsEarliest], f[indexEndsEarliest]]] :
      [[s[indexEndsEarliest], f[indexEndsEarliest]], ...sub];
  } else {
    return null
  }
}

console.log(recursive(s, f, 0, 11))