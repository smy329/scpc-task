/** Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
 */

function gainTargetValue(sortedArr, targetValue) {
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i; j < sortedArr.length; j++) {
      sum = sortedArr[i] + sortedArr[j];
      if (sum === targetValue) {
        return [sortedArr[i], sortedArr[j]];
      }
    }
  }
  return;
}

console.log(gainTargetValue([1, 3, 6, 8, 11, 15], 9));
