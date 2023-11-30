// Function to swap adjacent elements in an array

const prompt=require("prompt-sync")();


function swapAdjacentElements(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        // Swap elements at even indices with the next element (odd indices)
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}

// Take array input from the user
const userInput = prompt("Enter numbers separated by commas:");

// Convert the input string into an array of numbers
const inputArray = userInput.split(',').map(Number);

// Check if the number of elements is odd and remove the last element
if (inputArray.length % 2 !== 0) {
    console.log("Removing the last element since the number of elements is odd.");
    inputArray.pop();
}

// Display the original array
console.log("Original Array: ", inputArray);

// Swap adjacent elements
swapAdjacentElements(inputArray);

// Display the array after swapping adjacent elements
console.log("Array after swapping adjacent elements: ", inputArray);
