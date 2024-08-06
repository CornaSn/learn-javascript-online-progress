// Complete the function getCharCount such that it returns the number of characters in the str parameter that it receives.
function getCharCount(str) {
  return str.length;
}

// Sample usage
console.log(getCharCount('Sam')); // 3
console.log(getCharCount('Alex 123')); // 8
console.log(getCharCount('Charley is here')); // 15

// Complete the function shoutMyName such that it returns the name parameter it receives all in upper case.
function shoutMyName(name) {
  return name.toUpperCase();
}

// Sample usage
console.log(shoutMyName('Sam')); // "SAM"
console.log(shoutMyName('Charley')); // "CHARLEY"
console.log(shoutMyName('alex')); // "ALEX"

// Complete the function lowerName such that it returns the name parameter it receives all in lower case.
function lowerName(name) {
  return name.toLocaleLowerCase();
}

// Sample usage
console.log(lowerName('Sam')); // "sam"
console.log(lowerName('ALEX')); // "alex"

// Complete the function getFirstCharacter such that it returns the first character of the name parameter it receives.
function getFirstCharacter(name) {
  return name[0];
}

// Sample usage
console.log(getFirstCharacter('Amsterdam')); // "A"
console.log(getFirstCharacter('Japan')); // "J"

// Complete the function getLastCharacter such that it returns the last character of the name parameter it receives.
function getLastCharacter(name) {
  return name.at(-1);
}

// Sample usage
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"

//Complete the function skipFirstCharacter such that it returns all the characters except the first one from the text parameter it receives.
function skipFirstCharacter(text) {
  return text.substring(1);
}

// Sample usage
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"

//Complete the function concatInitials such that it returns the firstNameInitial followed by the lastNameInitial.
function concatInitials(firstNameInitial, lastNameInitial) {
  return firstNameInitial + lastNameInitial;
}

// Sample usage
console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"

// Complete the function sayHello such that it interpolates the variable name into a string "Hello name".
function sayHello(name) {
  return `Hello ${name}`;
}

// Sample usage
console.log(sayHello('Alex')); // "Hello Alex"
console.log(sayHello('Anja')); // "Hello Anja"

// Complete the function getFullName such that it returns the full name of the person using interpolation.
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// Sample usage
console.log(getFullName('Anja', 'Schüller')); // "Sam Doe"
console.log(getFullName('Alex', 'Blue')); // "Alex Blue"

function getMultilineString() {
  return `I am learning JavaScript
  and I found it to be
  quite fun!`;
}

// Sample usage
console.log(getMultilineString());

export function renderTableRow(label, value) {
  console.log(label, value);
  return `<tr>
  <td>${label} </td>
  <td>${value}</td>
</tr>`;
}

// Complete the function capitalize such that it capitalizes the word parameter it receives. There's no capitalize method in JavaScript, so you have to write it yourself.
function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// Sample usage
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"
