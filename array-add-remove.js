// Practice Problem 1
/* You are given an array: 
var fruits = ["Apple", "Banana", "Orange"];
*/

// a) Find the index of "Banana" and replace "Banana" with "Mango".
// b) Remove "Orange" and add "Watermelon"


// Solution
// Assigned variable
var fruits = ["Apple", "Banana", "Orange"];

// finding the index of banana
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);

// replace the Banana with Mango
fruits[1] = "Mango";
console.log(fruits);

// removing orange
fruits.pop();
console.log(fruits);

// adding watermelon as the last element of array.
fruits.push("Watermelon");
console.log(fruits);