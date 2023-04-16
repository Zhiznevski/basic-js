let count = 1;
function calculateDepth(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += 1;
    } else count;
    calculateDepth(arr[i]);
  }
  return count;
}
console.log(calculateDepth([[[[[]]]]]));

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array

 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
