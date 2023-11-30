// count char in string and do not consider 
const readline = require('readline-sync');
const str = readline.question("Enter the first string: ");
function countCharactersWithoutSpaces(str)
{
    let count = 0;
    for (let i = 0; i < str.length; i++)      // Check if the current character is not a space
    {
    if (str[i] !== ' ') 
    {
        count++;
    }
    }
    return count;
}
console.log(countCharactersWithoutSpaces(str));