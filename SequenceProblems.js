// To get Single digit Random number
console.log("The Single digit number using Random function : " + Math.floor(Math.random() * 10));

// To get Dice number between 1 to 6
console.log("The Random number using Dice : " + (Math.floor(Math.random() * 6) + 1));

// Addition of two random dice numbers
let a = Math.floor(Math.random() * 6) + 1;
let b = Math.floor(Math.random() * 6) + 1;
console.log("The Addition of two random dice numbers is : " + (a+b));

// Sum and Average of five 2-digit random numbers 
let array = [Math.floor(Math.random() * 89) + 10,Math.floor(Math.random() * 89) + 10,Math.floor(Math.random() * 89) + 10,Math.floor(Math.random() * 89) + 10,Math.floor(Math.random() * 89) + 10];
let sum = 0;
for(i=0;i< array.length;i++)
{
    console.log(array[i]);
    sum += array[i];
}
let avg = sum / array.length;
console.log("Sum of the Numbers is: " + sum);
console.log("Average of the Numbers is: " + avg);

// Unit Conversion
let oneFootInInches = 12;
let oneInchInFoot = 1/oneFootInInches;
let inputInch = 42;
let convertInchToFoot = inputInch * oneInchInFoot;
console.log(inputInch + " inches is equals to " + convertInchToFoot + " feet" );