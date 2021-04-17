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

    if (pass => 8 && pass <= 128) {
        low = confirm('Would you like to use lowercase letters in your password?')
        cap = confirm('Would you like to use capitalized letters in your password?')
        num = confirm('Would you like to use numbers in your password?')
        char = confirm('Would you like to use special characters in your password?')

        if (low === false && cap === false && num === false && char === false)
        alert('You need to choose at least one option!')
        return generatePassword ();
    }

    if (low === true) {
        charLower = "abcdefghijklmnopqrstuvwxyz"
    }
    else {
        charLower = ""
    }

    if (cap == true) {
        charCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else {
        charCap = ""
    }

    if (num == true) {
        numbers = '0123456789'
    }
    else {
        numbers = ''
    }

    if (char = true) {
        charSpecial = '<=>?@[\]^_`{|}~!\“#$%&‘()*+,-./:;'
    }
    else {
        charSpecial = ''
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