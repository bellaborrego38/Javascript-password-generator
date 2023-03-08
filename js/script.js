// 1.prompt the user for the acceptance criteria
// a.password length B < 128
// b.lowercase, uppercase, numbers, special characters
// 2.validate the input
// 3.generate password based on criteria



var generateBtn = document.querySelector("#generate");

// tell the computer what all of our options are
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", "@", "#", "$"]


function generatePassword() {

    var userSelectedOptions = [];
    var password = '';

    console.log("Hey you clicked the button!")

    var characterAmount = ["How many characters do you want your password to contain?"]

   

    // ask the user for length of password/ store it in a var for later

    var passwordLength = window.prompt(characterAmount);
    console.log(passwordLength) 
  

    if(!(passwordLength >= 8 && passwordLength <= 128)) {
     passwordLength = window.confirm("The password length must be between 8 and 128!") 

     return null;
    }


    var includeSymbols = window.confirm("Click OK to confirm including special characters.");
    var includeNumbers = window.confirm("Click OK to confirm including numeric characters.")
    var includeLowercase = window.confirm("Click OK to confirm including lowercase characters.")
    var includeUppercase = window.confirm("Click OK to confirm including uppercase characters.")

    console.log(includeSymbols, includeNumbers, includeLowercase, includeUppercase);

    if(includeSymbols) {
      userSelectedOptions = [...userSelectedOptions,...specialCharacters];
    }

    if(includeNumbers) {
      userSelectedOptions = [...userSelectedOptions,...numbers];

    }

    if(includeLowercase) {
      userSelectedOptions = [...userSelectedOptions,...lowercaseLetters];
    }

    if(includeUppercase) {
      userSelectedOptions = [...userSelectedOptions,...uppercaseLetters]   
    }

    console.log(userSelectedOptions)


    for (var i = 0; i < passwordLength; i++) {
      let index = getRandom(userSelectedOptions.length)

      console.log(userSelectedOptions[index]);

      password = password+userSelectedOptions[index];
    }
    

    return password;

}



function getRandom(max) {

let result = Math.ceil(Math.random()*max)
return result;

}



function writePassword() {
    var  password = generatePassword();
    var passwordText = document.querySelector("#password");
    

    passwordText.value = password;

    userSelectedOptions = password;
    

}




generateBtn.addEventListener("click", writePassword)
   

    

//}

 // if the user wants special char 
 //if (wantsSpecial === true) {
    // -- put all the special char in the userSelectedOptions array
   // userSelectedOptions = userSelectedOptions.concat(specialCharacters);

//} if (wantsNumbers === true) {
   // userSelectedOptions = userSelectedOptions.concat(numbers);

//} if (wantsLowercase === true) {
   // userSelectedOptions = userSelectedOptions.concat(lowercaseLetters)

//} if (wantsUppercase) {
//   userSelectedOptions = userSelectedOptions.concat(uppercaseLetters)
//}


 // for each char(passwordlength) the user wants
    // -- gen a random number
    // -- use that number to grab a random character from the selected options
    // -- put random character into a string

    //for()

