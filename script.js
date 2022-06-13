// Assignment code here
var characterlength = 8;
var choiceArray = [];

var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // going to be either true or false

  if(correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

}

function generatePassword() {
// generatePassword will be based on the prompts
}

// Prompt asking how long would they like the password to be
function getPrompts() {
  choiceArray = [];

  characterLength = prompt("How many characters do you want your password to be? (8 - 128 characters)");

  if(isNaN(characterlength) || characterlength < 8 || characterLength > 128) { // This should all be false
    alert("Character length must be a number, 8 to 128 digits. Please attempt again.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}