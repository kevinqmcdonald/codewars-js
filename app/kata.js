// app/kata.js
// This will multiply two numbers as strings in order
// to circumvent the 64-bit limit
function multiply(a, b) {
  const aDigits = a.split("");
  const bDigits = b.split("");
  let product = "";
  let carry = 0;
  for (let i = 0; i < aDigits.length; i++) {
    const aD
  }
}

function factorial(n) {
  // DP Factorial Algorithm
  const f = Array(n);
  f[0] = "1";
  for (let i = 1; i <= n; i++) {
    f[i] = multiply(`${i}`, f[i - 1]);
  }

  return f[n];
}

module.exports = factorial;
