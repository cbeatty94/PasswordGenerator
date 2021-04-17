// Assignment Code
var generateBtn = document.querySelector('#generate');
var random =""
var newPass = "";


function generatePassword() {
    var pass = prompt('Enter the number of characters for desired password length between 8 and 128.')

    if (pass < 8 || pass > 128) {
        alert('Invalid! Try Again!')
        return generatePassword ();
    }
    if (isNaN(pass)) {
        alert("That is not a number! Please choose a number between 8 and 128!")
        return generatePassword();
    }
  return 'yourpassword';
}
// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password o= generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);