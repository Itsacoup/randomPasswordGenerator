// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCasedChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCasedChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numberChar = [
  '0',
  '1',
  '2',
  '3',
  '4',
  "5",
  '6',
  '7',
  '8',
  '9'
];




// this function writes the password when generate button is clicked
function writePassword() {
  // validation
  var passLength = parseInt(prompt("How many characters would you like your password to be?"))
  if (isNaN(passLength)) {
    alert("You must enter a number.")
    writePassword();
  }
  else if (passLength < 8) {
    alert("Passwords must be at least 8 characters long.")
    writePassword();
  }
  else if (passLength > 128) {
    alert("Passwords cannot be longer than 128 characters.")
    writePassword();
  }

  var passUp = confirm("Would you like upper case letters in your password?");
  var passLow = confirm("Would you like lower case letters in your password?");
  var passNum = confirm("Would you like numbers in your password?");
  var passSpec = confirm("Would you like special characters in your password?");
  console.log(passLength)
  console.log(passUp)
  console.log(passLow)
  console.log(passNum)
  console.log(passSpec)

  // this array populates with the true confirm statements and while be compared to later
  var passOption = []

  if (passUp) {
    passOption.push("up");
  }

  if (passLow) {
    passOption.push("low");
  }

  if (passNum) {
    passOption.push("num");
  }

  if (passSpec) {
    passOption.push("spec");
  }

  //final validation
  if (passOption == 0) {
    alert("You must select at least 1 character type, try again.")
    return;
  }

  //this is the mathmatical function that creates the random string of characters that will be the password
  function generatePassword() {
    var password = "";

    //this loop runs through the array we created above, conisting of place holders that denote which chartype array we will perform random math on
    for (var i = 0; i < passLength; i++) {
      var x = passOption[Math.floor(Math.random() * passOption.length)];
      //these are 4 seperate functions, one for each character type, as they are fired they return their value to concatenate to password
      function lowerCased() {
        var y = lowerCasedChar[Math.floor(Math.random() * lowerCasedChar.length)];
        return password += y;
      }

      function upperCased() {
        var y = upperCasedChar[Math.floor(Math.random() * upperCasedChar.length)];
        return password += y;
      }

      function number() {
        var y = numberChar[Math.floor(Math.random() * numberChar.length)];
        return password += y;
      }

      function special() {
        var y = specialChar[Math.floor(Math.random() * specialChar.length)];
        return password += y;
      }
      //this set of conidtions is what the loop is acting on, which ever string in the array is iterated, it will compare to match, and fire the appropriate of the 4 functions
      if (x == "up") {
        upperCased();
        console.log(password)
      }

      if (x == "low") {
        lowerCased();
        console.log(password)
      }

      if (x == "num") {
        number();
        console.log(password)
      }

      if (x == "spec") {
        special();
        console.log(password)
      }
    }
    return password
  }

  //this takes the return of generate password and appends it to the page
  document.getElementById("password").innerHTML = generatePassword(password);
}

//these event listerners fire the function and remove the readonly installed in the index
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", document.getElementById('password').removeAttribute('readonly'));
