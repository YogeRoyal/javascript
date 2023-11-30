//Program to Shift each character by 1 position. 
const readline = require('readline-sync');
const str = readline.question("Enter a String: ");
const str1 = str.split("")
for (var i = 0;i<str1.length;i++) {
    if (i+1==str1.length) 
    {
        str1[i]=str[0]
    }
    else
    {
    str1[i]=str1[i+1]
    }
}
console.log(str1.join(""))