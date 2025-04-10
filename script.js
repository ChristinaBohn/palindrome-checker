const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function clean (str) {
  const regex = /[\W_]/g;
  return str.replace(regex, '');
}

function wordExists() {
    const input = textInput.value;
    const string = clean(input);
    const lowerString = string.toLowerCase();
    const reverse = lowerString.split('').reverse().join('');

    if(reverse === lowerString){
      result.classList.remove('hidden');
      result.innerHTML = `${textInput.value} is a palindrome`;
    } else {
      result.classList.remove('hidden');
      result.innerHTML = `${textInput.value} is not a palindrome`;
    }
}

function palindrome() {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    wordExists();
  }
}

button.addEventListener("click", palindrome)



// function alert () {
//   if (textInput === "") {
//     alert("Please input a value")
//   }
// }

// checkButton.addEventListener("click", alert);

// function isPalindrome(str) {
//   var regex = /[\W_]/g;
//   var cleanedStr = str.toLowerCase().replace(regex, '');
//   var reverseStr = cleanedStr.split('').reverse().join(''); 
//   return reverseStr === cleanedStr;
// }

// function checkPalindrome (textInput) {
//   if (isPalindrome(textInput) === true) {
//     result.textContent = `${textInput} is a palindrome`;
//   } else if (isPalindrome(textInput) === false) {
//     result.textContent = `${textInput} is not a palindrome`;
//   } else {
//     result.textContent = "";
//   }
// }
// checkPalindrome(textInput);


