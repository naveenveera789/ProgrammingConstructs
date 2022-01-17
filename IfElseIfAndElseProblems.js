// Digits Place
function displayUnit(num)
{
    if(num == 1) console.log("Unit");
    else if(num == 10) console.log("Ten");
    else if(num == 100) console.log("Hundred");
    else if(num == 1000) console.log("Thousand");
    else if(num == 10000) console.log("Ten Thousand");
    else if(num == 100000) console.log("Lakh");
    else if(num == 1000000) console.log("Ten Lakhs");
    else if(num == 10000000) console.log("Crore");
    else if(num == 100000000) console.log("Ten Crores");
        else console.log("Enter correct number");
}
var readline = require("readline-sync");
let num = readline.question("Enter a number like 1,10,100...  : ");
displayUnit(parseInt(num));


// Number to Word
function getWord(number) 
{
    if (number == 0) console.log("Zero");
    else if (number == 1) console.log("One");
    else if (number == 2) console.log("Two");
    else if (number == 3) console.log("Three");
    else if (number == 4) console.log("Four");
    else if (number == 5) console.log("Five");
    else if (number == 6) console.log("Six");
    else if (number == 7) console.log("Seven");
    else if (number == 8) console.log("Eight");
    else if (number == 9) console.log("Nine");
       else console.log("Invalid Number");
}
let number = readline.question("Enter the number between 0-9 : ");
getWord(parseInt(number));


// Display Week Day
function displayDay(dayNumber) 
{
    if (dayNumber == 1) console.log("Sunday");
    else if (dayNumber == 2) console.log("Monday");
    else if (dayNumber == 3) console.log("Tuesday");
    else if (dayNumber == 4) console.log("Wednesday");
    else if (dayNumber == 5) console.log("Thursday");
    else if (dayNumber == 6) console.log("Friday");
    else if (dayNumber == 7) console.log("Saturday");
        else console.log("Invalid number.");
}
let dayNumber = readline.question("Enter the number of day between 1 to 7 : ");
displayDay(parseInt(dayNumber));