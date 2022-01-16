// app/kata.js

// Insert code here
class Kata {
  towerBuilder(nFloors) {
    const tower = [];
    if (nFloors === 0) return tower;

    const levelLength = 2 * nFloors - 1;
    for (let i = 1; i <= nFloors; i++) {
      const stars = new Array(2 * i - 1).fill("*").join("");
      const spaces = new Array((levelLength - stars.length) / 2).fill(" ").join("");
      tower.push([spaces, stars, spaces].join(""));
    }

    return tower;
  }
}

module.exports = Kata;
