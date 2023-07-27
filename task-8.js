/** Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
 */

function secondSmallestNumber(arr) {
  const sortedArray = [...arr].sort();
  return sortedArray[1];
}

console.log(secondSmallestNumber([3, 7, 1, 4, 2, 9, 5]));
