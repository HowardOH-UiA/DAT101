"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let p1counter1 = ""

for  (let p1value1 = 1; p1value1 <= 10; p1value1++) {
    p1counter1 += p1value1 + " ";
}

let p1counter2 = ""

for  (let p1value2 = 10; p1value2 >= 1; p1value2--) {
    p1counter2 += p1value2 + " ";
}

printOut(p1counter1);
printOut(p1counter2)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p2rightNumber = 34
let p2machineGuess = 0
let p2guessAmount = 0


while (p2rightNumber !== p2machineGuess) {
    p2machineGuess = (Math.floor(Math.random() * 1000000)) + 1
    p2guessAmount++;
}

printOut("The number was: " + p2rightNumber);
printOut("It took " + p2guessAmount + " guesses.");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p3rightNumber = 34
let p3machineGuess = 0
let p3guessAmount = 0
const p3guessTimeStart = performance.now();

while (p3rightNumber !== p3machineGuess) {
    p3machineGuess = (Math.floor(Math.random() * 1000000)) + 1
    p3guessAmount++;
}

const p3guessTimeEnd = performance.now()
let p3GuessTimeTotal = p3guessTimeEnd - p3guessTimeStart

printOut("The number was: " + p3rightNumber);
printOut("It took " + p3guessAmount + " guesses.");
printOut("That means " + p3GuessTimeTotal + " milliseconds")

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p4primes = "";

for (let p4checker = 2; p4checker <= 200; p4checker++) { 
  let p4number = 2;
  let p4isPrime = true;

  while (p4number * p4number < p4checker) { 
    if (p4checker % p4number === 0) {
      p4isPrime = false;
      break;
    }
    p4number++;
  }

  if (p4isPrime) {
    p4primes += p4checker + " ";
    }
}


printOut(p4primes);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let r = 1; r <= 7; r++) {
    let p5row = ""
    for (let k = 1; k <= 9; k++)  {
        p5row += "K" + k + "R" + r + " "
    }
    printOut(p5row)
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p6score1 = (Math.floor(Math.random() * 236) + 1)
const p6score2 = (Math.floor(Math.random() * 236) + 1)
const p6score3 = (Math.floor(Math.random() * 236) + 1)
const p6score4 = (Math.floor(Math.random() * 236) + 1)
const p6score5 = (Math.floor(Math.random() * 236) + 1)





printOut(p6grade1);
printOut(p6grade2);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

