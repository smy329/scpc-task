/**Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
 */

function freqElement(arr) {
  const storedFreq = {};

  arr.forEach((element) => {
    storedFreq[element] = (storedFreq[element] || 0) + 1;
  });

  // Find the element with the highest frequency
  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in storedFreq) {
    if (storedFreq[element] > maxFrequency) {
      maxFrequency = storedFreq[element];
      mostFrequentElement = element;
    }
  }

  // Return the most frequent element
  return parseInt(mostFrequentElement);
}

console.log(freqElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
