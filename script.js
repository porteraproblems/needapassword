// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// variables
var specialCharacters
var numberCharacters
var lowerCharacters
var upperCharacters
var begin

// arrays
specialCharacters = ["!", "?", "@", "#", "$", "%", "^", "&", "_", "+", "-", "=", ";", ":", "`", ",", ".", "/", "|"]
numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upperCharacters = lowerCharacters.toUpperCase()

//next section

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  var begin = parseInt(prompt("Please indicate how many characters you want from 8 - 128."));
  if (!begin) {
    alert("Please pick a vaild number. Try again.")
  }

  else if (begin < 8 || begin > 128) {
    alert("Please pick a vaild number. Try again.");
    begin = parseInt(prompt("Please indicate how many characters you want from 8 - 128."));
    specialCharacters = confirm("Do you want include special characters?");
    numberCharacters = confirm("Do you want to include  numbers?");
    lowerCharacters = confirm("Do you want to use lower case letters?");
    upperCharacters = confirm("Do you want to use upper case letters?");
  }

  else {
    specialCharacters = confirm("Do you want include special characters?");
    numberCharacters = confirm("Do you want to include  numbers?");
    lowerCharacters = confirm("Do you want to use lower case letters?");
    upperCharacters = confirm("Do you want to use upper case letters?");
  }

  if (!specialCharacters && !numberCharacters && !lowerCharacters && !upperCharacters) {
    alert("Invald. You need to pick at least one field.")
    specialCharacters = confirm("Do you want include special characters?");
    numberCharacters = confirm("Do you want to include  numbers?");
    lowerCharacters = confirm("Do you want to use lower case letters?");
    upperCharacters = confirm("Do you want to use upper case letters?");
  }


}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
