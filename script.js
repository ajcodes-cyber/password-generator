// Pseudo Code
// 1. Prompt the user for password criteria
//    - Length must be between 8 to 128 characters
//    - Special, lowercase, uppercase, and number characters
// 2. Make sure the input is correct with the above criteria
// 3. Create or generate the password
// 4. Show the generated password on the page

// Assignment code here
var characterLength = 8;
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
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;

  } else {
      passwordText.value = "";

  }

}

function generatePassword() {
  // generatePassword will be based on the prompts presented to user
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length); // Random number that is rounded without a decimal
    password = password + choiceArray[randomIndex];

  }
  return password; // return this value back to var newPassword
}

// Prompt asking how long would they like the password to be
function getPrompts() {
  choiceArray = [];

  characterLength = prompt("How many characters do you want your password to be? (8 - 128 characters)");

  // This should all be false 
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { 
    alert("Character length must be a number, 8 to 128 digits. Please attempt again.");
    return false;
  }
  // lowercase prompt
  if (confirm("Would you like lowercase letters in your password?")) { 
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  // uppercase prompt
  if (confirm("Would you like uppercase letters in your password?")) { 
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  // special characters prompt
  if (confirm("Would you like special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  // numbers prompt
  if (confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}