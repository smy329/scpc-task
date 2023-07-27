/** Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation */
function calc(num1, num2, operation) {
  let result = 0;
  switch (operation) {
    case '+':
      result = num1 + num2;
      return result;
    case '-':
      result = num1 - num2;
      return result;
    case '*':
      result = num1 * num2;
      return result;
    case '/':
      result = num1 / num2;
      return result;

    default:
      return;
  }
}

console.log(calc(10, 5, '/'));
