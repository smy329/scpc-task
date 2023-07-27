/**Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh" */

function revStr(str) {
  const result = str.split('').reverse().join('');
  return result;
}

console.log(revStr('hello world'));
