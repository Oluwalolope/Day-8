//GETTING A REFERENCE FOR THE INPUT FORM
const inputForm = document.querySelector('.inputs');

//GETTING A REFERENCE FOR THE CLEAR BUTTON
const clearInput = document.querySelector('button');

//GETTING A REFERENCE FOR THE OUTPUT FIELD
const outputField = document.querySelector('.output');


//Function for checking if a word is a palindrome
const palindromeTester = (arr) => {
    return arr.map(word => {
        let wordObj = {
          word: word.split('').reverse().join(''),
          isPalindrome: word === word.split('').reverse().join('')
        };
        return wordObj;
    });
}

//Function for cleaning text
const cleanText = (text) => {
  //Remove punctuation using regex and convert to lowercase
  let cleanText = text.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, '').toLowerCase();

  //Split the cleaned text into individual words
  let words = cleanText.split(/\s+/);
  return words;
};

//Listen for when the input field is submitted
inputForm.addEventListener('submit', (e) => {
  e.preventDefault(); //Prevent the page from refreshing
  let inputWord = inputForm.querySelector('#word').value.trim();
  
  //if the user adds multiple words seperated by punctuation marks
  let cleanedInput = cleanText(inputWord);
  
  let testedWords = palindromeTester(cleanedInput);
  console.log(testedWords);
  generateOutput(testedWords); //Output the result
});

//Function for clearing the input field
clearInput.addEventListener('click', () => {
  //Reset the input field
  inputForm.reset();
});

//Function to generate the results in the output
const generateOutput = (testedWords) => {
//   let cleanWord = testedWords;

  //Clear the output field after submission
  outputField.innerHTML = '';

  //Output each word from the clean sentence
  testedWords.forEach((testedWord) => {
    testedWord.isPalindrome
      ? (outputField.innerHTML += `<div class='true'>${testedWord.word}</div>`)
      : (outputField.innerHTML += `<div class='false'>${testedWord.word}</div>`);
  });
};

let arr1 = ['mom', 'racecar', 'luffy'];
console.log(palindromeTester(arr1));