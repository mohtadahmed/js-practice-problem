// Practice Problem 3
// You are given three numbers 13, 79, 45. Write a program that will print the largest number 

var number1 = 13;
var number2 = 79;
var number3 = 45;

if(number1 > number2){
    if (number1 > number3) {
        console.log("Largest Number is:", number1);
    }
    else{
        console.log("Largest Number is:", number3);
    }
}
else{
    if(number2 > number3){
        console.log("Largest Number is:", number2);
    }
    else{
        console.log("Largest Number is:", number3);
    }
}