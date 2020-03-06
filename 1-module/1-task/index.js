/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */


function factorial(n) {
  let result = 1;
  for (let i = Math.abs(n); i !== 0; i--){
    result *= i;
  }
  return (result);
}
