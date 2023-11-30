// take a string and reverse it
const readline = require('readline-sync');
const str = readline.question("Enter the string: ");

function reverseString(str) {
    
    let ch = str.split('');
    let revCh = ch.reverse();
    let revStr = revCh.join('');
  
    return revStr;
  }
  console.log(reverseString(str));
  