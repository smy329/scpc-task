/** Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */
function romanToInteger(romanNumeral) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentValue = romanValues[romanNumeral[i]];
    const nextValue = romanValues[romanNumeral[i + 1]];

    if (nextValue > currentValue) {
      result = result + (nextValue - currentValue);
      i++; // Skip the next symbol since we've already processed it
    } else {
      result = result + currentValue;
    }
  }

  return result;
}

// Example usage:
// console.log(romanToInteger('IX')); // Output: 9
console.log(romanToInteger('XXV')); // Output: 21
