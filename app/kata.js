// app/kata.js
function add(a, b) {
  const aDigits = a.split("");
  const bDigits = b.split("");
  let sum = "";
  let carry = 0;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const aDigit = (a.length - 1) - i >= 0 ? Number(aDigits[(a.length - 1) - i]) : 0;
    const bDigit = (b.length - 1) - i >= 0 ? Number(bDigits[(b.length - 1) - i]) : 0;
    let digitSum = aDigit + bDigit + carry;
    if (digitSum > 9) {
      carry = 1;
      digitSum -= 10;
    } else {
      carry = 0;
    }

    sum = digitSum.toString() + sum;
  }

  return carry > 0 ? carry.toString() + sum : sum;
}

function trimLeadingZeros(n) {
  let digits = n.split("");
  if(digits.every(digit => digit === "0")) return "0";
  return n.substring(digits.findIndex(digit => digit !== "0"));
}

function multiply(a, b) {
  const aDigits = a.split("");
  const bDigits = b.split("");
  let product = "";
  for (let i = aDigits.length - 1; i >= 0; i--) {
    let subProduct = "";
    let carry = 0;
    const aDigit = Number(aDigits[i]);
    for (let j = bDigits.length - 1; j >= 0; j--) {
      const bDigit = Number(bDigits[j]);
      const digitProduct = aDigit * bDigit + carry;
      subProduct = (digitProduct % 10).toString() + subProduct;
      carry = Math.floor(digitProduct / 10);
    }

    if (carry > 0) subProduct = carry + subProduct;
    subProduct = subProduct + "0".repeat(aDigits.length - 1 - i);
    product = add(product, subProduct);
  }

  return trimLeadingZeros(product);
}

module.exports = multiply;
