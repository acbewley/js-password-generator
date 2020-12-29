// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
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
  
  console.log(lowerCase)
  console.log(upperCase)
  console.log(numbers)
  console.log(specChar)


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
