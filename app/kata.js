// app/kata.js

exports.spinWords = function spinWords(string) {
  let result = "";
  const words = string.split(" ")
  words.forEach(w => {
    if (w.length >= 5) {
      result += Array.from(w).reverse().join("")
    } else {
      result += w;
    }
    result += " ";
  })

  return result.trim();
}
