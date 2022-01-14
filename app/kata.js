// app/kata.js

// Insert code here
class Kata {
  countBits(n) {
    return n.toString(2).split("").filter(bit => bit === "1").length;
  }
}

module.exports = Kata;
