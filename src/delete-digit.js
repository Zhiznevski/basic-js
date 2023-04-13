const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const res = [];
  arr = num.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] > arr[i + 1] ? res.push(arr[i]) : arr;
  }
  return res;
}

module.exports = {
  deleteDigit,
};
