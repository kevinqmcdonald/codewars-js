// app/kata.js

exports.countSmileys = (arr) => {
  const regex = new RegExp("^[;:][~-]?[\)D]$")
  return arr.filter(val => regex.test(val)).length;
}
