// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSet
var lowerChoice = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
var upperChoice = (lowerChoice.toUpperCase())
var numChoice = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
var charChoice = ("!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "\\", "]", "^", "_", "{", "|", "}", "~")
// Write password to the #password input
function writePassword() {

  function generatePassword() {
    var charNum = prompt("How many characters? (Must be between 8 and 128)")

    if (charNum < 8) {
      alert("Passwords must have no less than 8 characters.")
      return;
    } else if (charNum > 128) {
      alert("Passwords must have no more than 128 characters.")
      return;
    }
  
    var lowerCase = confirm("Would you like lowercase letters?")
    var upperCase = confirm("Would you like uppercase letters?")
    var numbers = confirm("Would you like numbers?")
    var specChar = confirm("Would you like special characters?")
  
    if (lowerCase && upperCase && numbers && specChar) {
      charSet = (lowerChoice, upperChoice, numChoice, charChoice)
    } else if (lowerCase && upperCase && numbers && !(specChar)) {
      charSet = (lowerChoice, upperChoice, numChoice)
    } else if (lowerCase && upperCase && !(numbers) && !(specChar)) {
      charSet = (lowerChoice, upperChoice)
    } else if (lowerCase && !(upperCase) && !(numbers) && !(specChar)) {
      charSet = (lowerChoice)
    }

    function passRandom() {
      Math.floor(Math.random()*charNum)
    }
  
  }
 

  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
