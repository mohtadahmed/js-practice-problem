//Practice Problem 2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a student.
// Inputed value: 75.25, 65, 80, 35.45, 99.50
// Print the result in 2 decimal places


var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;

console.log(totalMarks);

var averageMarks = (totalMarks / 5).toFixed(2)

console.log(parseFloat(averageMarks));