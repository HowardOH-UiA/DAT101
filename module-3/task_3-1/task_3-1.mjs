"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 8;
if (wakeUpTime == 6) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime == 8){
  printOut("I can take the train to school.")
} else {
  printOut("I'll have to take the car to school.")
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p41 = 4
const p42 = 67
const p43 = -45
const p44 = 0


if (p41 > 0) {
  printOut(p41 + " is Positive")
} else if (p41 == 0) {
  printOut(p41 + " is Zero")
} else {
  printOut(p41 + " is Negative")
}

if (p42 > 0) {
  printOut(p42 + " is Positive")
} else if (p42 == 0) {
  printOut(p42 + " is Zero")
} else {
  printOut(p42 + " is Negative")
}

if (p43 > 0) {
  printOut(p43 + " is Positive")
} else if (p43 == 0) {
  printOut(p43 + " is Zero")
} else {
  printOut(p43 + " is Negative")
}

if (p44 > 0) {
  printOut(p44 + " is Positive")
} else if (p44 == 0) {
  printOut(p44 + " is Zero")
} else {
  printOut(p44 + " is Negative")
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
  let p6imageSize = (Math.floor(Math.random()*8) + 1)
  printOut("File Size = " + p6imageSize)
  
  if (p6imageSize < 4) {
    printOut("This image is to small");
  } else if (p6imageSize >= 6) {
    printOut("Image is too large")
  } else {
    printOut("Thank you")
  }

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("The month is: " + monthName);

if (monthName == "January" || monthName == "March" || monthName == "May" || monthName == "July" || monthName == "August" || monthName == "October" || monthName == "December") {
  printOut("This month has 31 days.")
} else if (monthName == "February") {
  printOut("This month has 28 days.")
} else {
  printOut("This month has 30 days.")
}

if (monthName.includes("r")) {
  printOut("You need to take Vitamin D.")
} else {
  printOut("You do not need to take Vitamin D")
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName == "March" || monthName == "May") {
  printOut("Sadly, we are closed this month, due to renovations.")
} else if (monthName == "April") {
  printOut("Our main office is closed, but we are open next door.")
} else {
  printOut("We are open as usual.")
} 

printOut(newLine);
