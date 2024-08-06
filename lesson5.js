// Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
export function getNextAge(age) {
  if (age === '') {
    return 0;
  }
  return Number.parseInt(age, 10) + 1;
}

// Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...
// However, whenever the text is 10 characters or less, the ellipsis should not be added because the text is not being trimmed!
export function getDescription(text) {
  console.log(text); // write something in the BROWSER and see it in the console
  if (text.length > 10) {
    return text.substring(0, 10) + '...';
  } else {
    return text;
  }
}

// Implement the function canVote such that it returns true whenever the age is 18 or above and false in all other scenarios. You should not use an if condition (or ternary).
function canVote(age) {
  return age >= 18;
}

// Sample usage
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(17)); // false

// Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
export function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number % 2);
    return 'even';
  }
  return 'odd';
}
