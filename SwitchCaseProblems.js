// Number to Word
var readline = require("readline-sync")
let number =readline.question("Enter a number between 0-9 : ");
switch (number) 
{
    case "0":
        console.log("Zero");
      break;
    case "1":
        console.log("One");
      break;
    case "2":
        console.log("Two");
      break;
    case "3":
        console.log("Three");
      break;
    case "4":
        console.log("Four");
      break;
    case "5":
        console.log("Five");
      break;
    case "6":
        console.log("Six");
        break;
    case "7":
        console.log("Seven");
      break;
    case "8":
        console.log ("Eight");
      break;
    case "9":
        console.log("Nine");
      break;
    default:
        console.log("Please enter a single digit number");
      break;
}


// Display Week Day
let weekDay =readline.question("Enter the number of day between 1 to 7 : ");
switch (weekDay) 
{
    case "1":
        console.log("Sunday");
        break;
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Wednesday");
        break;
    case "5":
        console.log("Thursday");
        break;
    case "6":
        console.log("Friday");
        break;
    case "7":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Input! Please enter the number between 1-7 ");
        break;
}


// Digits place
let digit =readline.question("Enter a number like 1,10,100...  : ");
switch (digit) 
{
    case "1":
        console.log("Unit");
        break;
    case "10":
        console.log("Ten");
        break;
    case "100":
        console.log("Hundred");
        break;
    case "1000":
        console.log("Thousand");
        break;
    case "10000":
        console.log("Ten Thousand");
        break;
    case "100000":
        console.log("Lakh");
        break;
    case "1000000":
        console.log("Ten Lakhs");
        break;
    case "10000000":
        console.log("Crore");
        break;
    case "100000000":
        console.log("Ten Crores");
        break;
    default:
        console.log("Invalid Option");
        break;
}


// Unit Conversion
let num = readline.question("Enter a number : ")
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");
choice = readline.question("Enter your choice : ")
switch (choice) 
{
    case "1":
        let feetInch = num * 12;
        console.log(feetInch);
        break;
    case "2":
        let feetMeter = num / 3.2808;
        console.log(feetMeter);
        break;
    case "3":
        let inchFeet = num / 12;
        console.log(inchFeet);
        break;
    case "4":
        let meterFeet = num * 3.2808;
        console.log(meterFeet);
        break;
    default:
        console.log("Invalid choice");
        break;
}