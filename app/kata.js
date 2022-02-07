// app/kata.js
function hamming(n) {
  const h = Array(n).fill(1);
  let h2 = 2;
  let h3 = 3;
  let h5 = 5;
  let i = 0, j = 0, k = 0;

  for (let ix = 1; ix < n; ix++) {
    h[ix] = Math.min(h2, Math.min(h3, h5));
    if (h[ix] === h2) h2 = 2 * h[++i];
    if (h[ix] === h3) h3 = 3 * h[++j];
    if(h[ix] === h5) h5 = 5 * h[++k];
  }

  return h[n-1];
}

module.exports = hamming;
