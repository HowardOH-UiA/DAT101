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
const p2guessTimeStart = performance.now();

while (p2rightNumber !== p2machineGuess) {
    p2machineGuess = (Math.floor(Math.random() * 1000000)) + 1
    p2guessAmount++;
}

const p2guessTimeEnd = performance.now()
let p2GuessTimeTotal = p2guessTimeEnd - p2guessTimeStart

printOut("The number was: " + p2rightNumber);
printOut("It took " + p2guessAmount + " guesses.");
printOut("That means " + p2guessTimeEnd + " milliseconds")

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 let p4checker = 2
 let p4primes = ""


 while (p4checker <= 200) {
    let skib = true
    for (let p4loopy = 2; p4loopy <= p4checker; p4loopy++) {
        if (p4checker % p4loopy === 0) {
            skib = false
            break;
        }
        p4checker++
    }
    if (skib) {
        p4primes += p4checker + " "
    }
    }
    
    
 

printOut(p4primes);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
