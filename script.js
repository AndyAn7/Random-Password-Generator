
// Write password to the #password input
function generatePassword() {
  
// Criterion for length of character output random password generator whereas a number between 8-128 input by user
  var length = 0 
  while ( length < 8 || length > 128 || typeof length !== 'number' || !length ) {

  // Prompt whence 'Generate' is clicked; parsing of integers; and log of length input by user is shown in console
    length = window.prompt("Please enter a length of at least 8 and up to 128 characters."); 
    length = parseInt(length);
    console.log(length);
      }
  // Confirmation prompt(s) asking/determining characters to be used via user preference
  var bLet = confirm("Would you like to include capital letters?")
  var sLet = confirm("Would you like to include lowercase letters?")
  var speshChar = confirm("Would you like to include special characters?")
  var intChar = confirm("Would you like to include numbers?")

  // Sets of arrays of characters to be culled then used/omitted in order to generate random password
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var intSelection = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

  // Conditionals that represent output of random characters that are determined by user input during prompt(s) portion of program; total of arrays, upperCase, lowerCase, special, and integer characters
  var passwordArray = [];
 
  if ( bLet ) {

    for(var i = 0; i < upperCase.length; i++) {

      passwordArray.push(upperCase[i]);

    }
    console.log(passwordArray)
  }
  if ( sLet ) {

    for(var i = 0; i < lowerCase.length; i++) {

      passwordArray.push(lowerCase[i]);

    }
    console.log(passwordArray)
  }
  if ( speshChar ) {

    for(var i = 0; i < special.length; i++) {

      passwordArray.push(special[i]);

    }
    console.log(passwordArray)
  }
  if ( intChar ) {

    for(var i = 0; i < intSelection.length; i++) {

      passwordArray.push(intSelection[i]);

    }
    console.log(passwordArray)
  }

  var passwordString = "";

  //Loop iterates password
  for (i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * passwordArray.length);
    console.log(random, passwordArray[random]);
    passwordString = (passwordString + passwordArray[random]);
    console.log(passwordString);
  }

  return passwordString;
}  
 
var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);