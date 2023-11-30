// take one input string as input and convert the last word to uppercase
const readline = require('readline-sync');
const str = readline.question("Enter the string: ");

function conlastword(str)
{
    let words = str.split(' ');

    if (words.length > 0) 
    {
      
      let lastWord = words[words.length - 1];
      lastWord = lastWord.toUpperCase();
      words[words.length - 1] = lastWord;
  
      let resultString = words.join(' ');
  
      return resultString;
    } 
    else 
    {
      return "Enter a valid input";
    }
}

console.log(conlastword(str));