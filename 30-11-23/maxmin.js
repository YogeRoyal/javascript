// Take array input from the user
const userInput = prompt("Enter numbers separated by commas:");

// Convert the input string into an array of numbers
const inputArray = userInput.split(',').map(Number);

// Check if the inputArray is not empty
if (inputArray.length > 0) {
    // Find the maximum and minimum values
    const max = Math.max(...inputArray);
    const min = Math.min(...inputArray);

    // Display the array, maximum, and minimum values
    console.log("Array: ", inputArray);
    console.log("Maximum value: ", max);
    console.log("Minimum value: ", min);
} else {
    console.log("Please enter a valid array of numbers.");
}

// This code uses the Math.max and Math.min functions along with the spread (...) operator to 
// find the maximum and minimum values in the array. The user is prompted to enter numbers separated by commas,
//  and the input is then converted into an array of numbers. Finally, the array, maximum, and 
//  minimum values are displayed.

// Remember to handle cases where the user might enter non-numeric values or an empty input.