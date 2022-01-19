// app/kata.js
class Kata {
  add(a, b) {
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
}

module.exports = Kata;
