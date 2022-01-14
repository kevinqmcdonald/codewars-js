// app/kata.js
class Kata {
  zero(operator) { return operator ? operator(0) : 0; }
  one(operator) { return operator ? operator(1) : 1; }
  two(operator) { return operator ? operator(2) : 2; }
  three(operator) { return operator ? operator(3) : 3; }
  four(operator) { return operator ? operator(4) : 4; }
  five(operator) { return operator ? operator(5) : 5; }
  six(operator) { return operator ? operator(6) : 6; }
  seven(operator) { return operator ? operator(7) : 7; }
  eight(operator) { return operator ? operator(8) : 8; }
  nine(operator) { return operator ? operator(9) : 9; }

  plus(rhs) { return function (lhs) { return lhs + rhs; } }
  minus(rhs) { return function (lhs) { return lhs - rhs; } }
  times(rhs) { return function (lhs) { return lhs * rhs; } }
  dividedBy(rhs) { return function (lhs) { return Math.floor(lhs / rhs); } }
}

module.exports = Kata;
