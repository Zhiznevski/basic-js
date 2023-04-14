const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4,5]) => [1, 2, 4, 5]
 * 
 * --discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next duplicates the next element of the array in the transformed array.
--double-prev duplicates the previous element of the array in the transformed array.
 */
function transform(arr) {
  res = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "string" &&
      !arr[i].includes("discard") &&
      !arr[i].includes("double")
    ) {
      res.push(arr[i]);
    }
    if (typeof arr[i] !== "string") {
      res.push(arr[i]);
    } else if (
      arr[i] &&
      arr[i] === "--discard-prev" &&
      arr[i - 2] !== "--discard-next"
    ) {
      res.pop();
    } else if (arr[i + 1] && arr[i] === "--double-next") {
      res.push(arr[i + 1]);
    } else if (arr[i - 1] && arr[i] === "--double-prev") {
      res.push(arr[i - 1]);
    } else if (
      arr[i - 1] &&
      arr[i - 1] === "--discard-next" &&
      arr[i + 1] !== "--double-prev"
    ) {
      res.pop();
    }
  }
  return res;
}

module.exports = {
  transform,
};
