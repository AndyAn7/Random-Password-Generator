// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var length = 0 
  while ( length < 8 || length > 128 || typeof length !== 'number' || !length ) {

    length = window.prompt("Please enter a length of at least 8 and up to 128 characters."); 
    length = parseInt(length);
    console.log(length);
      }
    
  var bLet = confirm("Would you like to include capital letters?")
  var sLet = confirm("Would you like to include lowercase letters?")
  var speshChar = confirm("Would you like to include special characters?")
  var intChar = confirm("Would you like to include numbers?")

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var intSelection = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
 
  var totalConcat = upperCase.concat(lowerCase.concat(intSelection.concat(special)))

  var passwordArray = [];
  for(var i = 0; i < length; i++) {

  var totalConcatmagicIndex = Math.floor((Math.random() * totalConcat.length - 1))

  passwordArray.push(totalConcat[totalConcatmagicIndex]);
}
  if ( bLet ) {

    var upperCasemagicIndex = Math.floor((Math.random() * upperCase.length -1))

    passwordArray[0] = upperCase[upperCasemagicIndex]
  }
console.log(upperCasemagicIndex)
  if ( sLet ) {

    var lowerCasemagicIndex = Math.floor((Math.random() * lowerCase.length -1))

    passwordArray[1] = lowerCase[lowerCasemagicIndex]
  }

  if ( speshChar ) {

    var specialmagicIndex = Math.floor((Math.random() * special.length -1))

    passwordArray[2] = special[specialmagicIndex]
  }

  if ( intChar ) {

    var intSelectionmagicIndex = Math.floor((Math.random() * intSelection.length -1))

    passwordArray[3] = intSelection[intSelectionmagicIndex]
  }

  var printPassword = passwordArray.join("")
  var el = document.getElementById("password") 
  el.innerHTML = printPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
