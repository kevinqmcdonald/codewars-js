// app/kata.js

exports.longestConsec = (strarr, k) => {
  if (k <= 0 || k > strarr.length) return ""

  let start = 0;
  let max = strLen(strarr, 0, k);
  for (let i = 1; i < strarr.length; ++i) {
    const len = strLen(strarr, i, k);
    if (len > max) {
      max = len;
      start = i;
    }
  }

  return strarr.slice(start, start+k).join("");
}

function strLen(strarr, i, k) {
  return strarr.slice(i, i+k).join("").length;
}
