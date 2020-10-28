// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables
var specialCharacters 
var numberCharacters
var lowerCharacters
var upperCharacters

// arrays
var begin = "";
specialCharacters = ["!", "?", "@", "#", "$", "%", "^", "&", "_", "+", "-", "=", ";", ":", "`", ",", ".", "/", "|"]
numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upperCharacters = lowerCharacters.toUpperCase()







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
