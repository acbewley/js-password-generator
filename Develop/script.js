// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChoiceArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoiceArr = lowerChoiceArr.map(function (x) { return x.toUpperCase(); });
var numChoiceArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charChoiceArr = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "\\", "]", "^", "_", "{", "|", "}", "~"];
// Write password to the #password input
function writePassword() {

  function generatePassword() {
    //asks for length of password
    var charNum = prompt("How many characters? (Must be between 8 and 128)");
    
    if (charNum < 8) {
      alert("Passwords must have no less than 8 characters.");
      return;
    } else if (charNum > 128) {
      alert("Passwords must have no more than 128 characters.");
      return;
    }

    //prompts for character choice
    var lowerCase = confirm("Would you like lowercase letters?");
    var upperCase = confirm("Would you like uppercase letters?");
    var numbers = confirm("Would you like numbers?");
    var specChar = confirm("Would you like special characters?");
    var reqCharSet = [];
    
    //declares chosen characters and concatinates the arrays
    if (lowerCase) {
      reqCharSet = reqCharSet.concat(lowerChoiceArr);
    }
    if (upperCase) {
      reqCharSet = reqCharSet.concat(upperChoiceArr);
    }
    if (numbers) {
      reqCharSet = reqCharSet.concat(numChoiceArr);
    }
    if (specChar) {
      reqCharSet = reqCharSet.concat(charChoiceArr);
    }
    if (!lowerCase && !upperCase && !numbers && !specChar) {
      alert("You must choose a set of characters!");
      return;
    }

    //random number generation & loops for number of characters
    var newPass = "";

    for (var i = 0; i < charNum; i++) {
      var randomNumber = Math.floor(Math.random() * reqCharSet.length);
      var randomItem = reqCharSet[randomNumber];
      console.log(randomItem);
      newPass = newPass + randomItem;
    } return newPass;


  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
