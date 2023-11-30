
const prompt=require("prompt-sync")();
// Function to add two arrays and remove duplicates
function addArraysAndRemoveDuplicates(arr1, arr2) {
    // Concatenate the two arrays
    const combinedArray = arr1.concat(arr2);

    // Use a Set to remove duplicates
    const uniqueArray = [...new Set(combinedArray)];

    return uniqueArray;
}

// Take array input from the user
const userInput1 = prompt("Enter numbers for the first array separated by commas:");
const userInput2 = prompt("Enter numbers for the second array separated by commas:");

// Convert the input strings into arrays of numbers
const array1 = userInput1.split(',').map(Number);
const array2 = userInput2.split(',').map(Number);

// Add arrays and remove duplicates
const resultArray = addArraysAndRemoveDuplicates(array1, array2);

// Display the original arrays and the result array
console.log("First Array: ", array1);
console.log("Second Array: ", array2);
console.log("Array after adding and removing duplicates: ", resultArray);



// The concat method is used to concatenate the two arrays.
// A Set is used to automatically remove duplicates, and then the spread (...) operator 
// is used to convert the Set back to an array.
// The original arrays and the result array are then displayed