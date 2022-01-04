// app/kata.js

exports.angrams = (word, words) => {
  const res = [];
  for (const w of words) {
    if (sortLetters(w) === sortLetters(word)) {
      res.push(w);
    }
  }

  return res;
}

function sortLetters(str) {
  const arr = str.split("");
  const sorted = arr.sort();
  return sorted.join("");
}
