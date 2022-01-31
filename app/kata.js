// app/kata.js
class Word {
  constructor(word) {
    this.word = word;
    this.count = 1;
  }
}

function topThreeWords(text) {
  const words = [];
  text.split(" ").filter(w => w !== "").forEach(w => {
    const trimmedWord = new Word(w.toLowerCase().replace(/[^a-zA-Z']+|^'$/, ""));
    if (trimmedWord.word !== "") {
      let foundWord;
      if ((foundWord = words.find(word => word.word === trimmedWord.word)) !== undefined) {
        foundWord.count++;
      } else {
        words.push(trimmedWord);
      }
    }
  });

  return words.sort((w1, w2) => w2.count - w1.count)
    .slice(0, words.length > 2 ? 3 : undefined)
    .map(w => w.word);
}

module.exports = topThreeWords;
