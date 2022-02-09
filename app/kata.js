// app/kata.js
function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    // prevent infinite loops
    if (count === array.length) break;

    const currEl = array[i];
    if (currEl === 0 || currEl === "0") { // allow type coercion
      const tmp = array[i];
      for (let j = i; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }
      array[array.length - 1] = tmp;
      i--;
    }
    count++;
  }

  // the correctly sorted array should be returned.
  return array;
}

module.exports = removeZeros;
