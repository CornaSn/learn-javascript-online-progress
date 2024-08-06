// Complete the function convertNumberToString such that it converts the number it receives into a string.
function convertNumberToString(number) {
  return number.toString();
}

// Sample usage
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

// Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
export function getNextAge(age) {
  return Number.parseInt(age, 10) + 1;
}

// Complete the function getDivisionRemainderBy2 such that it returns the division remainder of the number it receives by 2
export function getDivisionRemainderBy2(number) {
  return number % 2;
}
