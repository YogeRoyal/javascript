//check the given Strings are Anagrams or not. 
const readline = require('readline-sync');
const str1 = readline.question("Enter the first string: ");
const str2 = readline.question("Enter the second string: ");
if (str1.length!=str2.length)
{
    console.log("Invaild Input The Strings are not Anagram!")
} else {
    if (str1.split("").sort().join("")==str2.split("").sort().join(""))
    {
        console.log("given"+str1+str2+" are  Anagram!")
    } 
    else 
    {
        console.log("given"+str1+str2+" are not Anagram!")
    }
}