
var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.queryselector("#password");

    passwordText.value = password;


}


generateBtn.addEventListener("click", writePassword);
