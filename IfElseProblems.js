// Flip Coin
let coinToss = Math.random();
if(coinToss >= 0.5)
{
    console.log("Heads!!!");
}
else
{
    console.log("Tails!!!");
}

// Maximum and Minimum value in Five 3-digit random numbers
let maxvalue = 0;
let minvalue =1000;
for (i=1; i<=5; i++)
{
    num = Math.floor(Math.random() * 999);
    console.log(num);
    if(maxvalue < num)
        maxvalue = num;
    if(minvalue > num)
        minvalue = num;
}
console.log("Maximum value :" + maxvalue);
console.log("Minimum value :" + minvalue);

// Leap Year
var readline = require("readline-sync");
let year = readline.question("Enter a year : ");
if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 100))
  console.log(year + " is a leap year");
else console.log(year + " is not a leap year");


// Day and Month
console.log("Select a date between March 20 and June 20");
let date = readline.question("Enter date in numbers : ");
let month = readline.question("Enter month in words : ");
if (month == "march" && date >= 20 && date < 31) console.log("True");
else if(month =="april" && date < 30) console.log("True");
else if(month =="may" && date < 31) console.log("True");
else if(month =="june" && date < 20) console.log("True");
else
    console.log("False");