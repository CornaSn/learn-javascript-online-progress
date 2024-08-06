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
