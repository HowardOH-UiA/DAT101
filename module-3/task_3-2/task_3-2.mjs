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
for (let g = 1 ; g<=5; g++) {
    let p6totalScore = Math.floor(Math.random() * 236) + 1;
    let p6scorePercentage = (p6totalScore/236) * 100

    if (p6scorePercentage >= 89) {
        printOut("A: " + p6scorePercentage.toFixed(1) + " %")
    }
    else if (p6scorePercentage >= 77) {
        printOut("B: " + p6scorePercentage.toFixed(1) + " %")
    }
    else if (p6scorePercentage >= 65) {
        printOut("C: " + p6scorePercentage.toFixed(1) + " %")
    }
    else if (p6scorePercentage >= 53) {
        printOut("D: " + p6scorePercentage.toFixed(1) + " %")
    }
    else if (p6scorePercentage >= 41) {
        printOut("E: " + p6scorePercentage.toFixed(1) + " %")
    }
    else {
        printOut("F: " + p6scorePercentage.toFixed(1) + " %")
    }
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p7throwCounter = 0;
let p7masterSwitch = 0;
let p7straightCheck = false; let p7houseCheck = false; let p7towerCheck = false; let p7yahtzeeCheck = false;


while (p7masterSwitch != 4) {
    p7throwCounter++;
    let p7dice1 = Math.floor(Math.random() * 6) + 1;
    let p7dice2 = Math.floor(Math.random() * 6) + 1;
    let p7dice3 = Math.floor(Math.random() * 6) + 1;
    let p7dice4 = Math.floor(Math.random() * 6) + 1;
    let p7dice5 = Math.floor(Math.random() * 6) + 1;
    let p7dice6 = Math.floor(Math.random() * 6) + 1;
    const p7diceGroup = [p7dice1, p7dice2, p7dice3, p7dice4, p7dice5, p7dice6];

    if (p7straightCheck == false) {
        p7straight ();
        console.log("Straight");
    } 
    
    if  (p7houseCheck == false) {
        p7house ();
        console.log("House");
    }

    if  (p7towerCheck == false) {
        p7tower ();
        console.log("Tower");
    }

    if  (p7yahtzeeCheck == false) {
        p7yahtzee ();
        console.log("Yahtzee");
    }

    /*Straight Check */
    function p7straight () {
        let p7straightDuplicateKiller = new Set(p7diceGroup).size === 6;
            if (p7straightDuplicateKiller) {
                p7straightCheck = true;
                
                printOut("");
                printOut(p7diceGroup[0] + " " + p7diceGroup[1] + " " + p7diceGroup[2] + " " + p7diceGroup[3] + " " + p7diceGroup[4] + " " + p7diceGroup[5]);
                printOut("Amount of throws for a full straight: " + p7throwCounter);

                p7masterSwitch++
            }
    }
    /*House Check */
    function p7house () {
        p7diceGroup.sort();
        if (p7diceGroup[0] === p7diceGroup[1] && p7diceGroup[2] === p7diceGroup[3] && p7diceGroup[4] === p7diceGroup[5]) {
            p7houseCheck = true;

            printOut("");
            printOut(p7diceGroup[0] + " " + p7diceGroup[1] + " " + p7diceGroup[2] + " " + p7diceGroup[3] + " " + p7diceGroup[4] + " " + p7diceGroup[5]);
            printOut("Amount of throws for a full house: " + p7throwCounter);

            p7masterSwitch++;
        }
    }
    /*Tower Check */
    function p7tower () {
        p7diceGroup.sort();
        let p7towerDuplicateKiller = new Set(p7diceGroup).size === 2;
        if (p7towerDuplicateKiller) {
            if (p7diceGroup[0] == p7diceGroup[1] && p7diceGroup[5] == p7diceGroup[4]) {
                if (p7diceGroup[0] === p7diceGroup[1] && p7diceGroup[2] === p7diceGroup[3] && p7diceGroup[4] === p7diceGroup[5] && p7diceGroup[1] === p7diceGroup[2] && p7diceGroup[0] != p7diceGroup[5]) {
                    p7towerCheck = true;
                    
                    printOut("");
                    printOut(p7diceGroup[0] + " " + p7diceGroup[1] + " " + p7diceGroup[2] + " " + p7diceGroup[3] + " " + p7diceGroup[4] + " " + p7diceGroup[5]);
                    printOut("Amount of throws for a tower: " + p7throwCounter);

                    p7masterSwitch++; 
                }
                else if (p7diceGroup[0] === p7diceGroup[1] && p7diceGroup[2] === p7diceGroup[3] && p7diceGroup[4] === p7diceGroup[5] && p7diceGroup[3] === p7diceGroup[4] && p7diceGroup[0] != p7diceGroup[5]) {
                    p7towerCheck = true;
                    
                    printOut("");
                    printOut(p7diceGroup[0] + " " + p7diceGroup[1] + " " + p7diceGroup[2] + " " + p7diceGroup[3] + " " + p7diceGroup[4] + " " + p7diceGroup[5]);
                    printOut("Amount of throws for a tower: " + p7throwCounter);

                    p7masterSwitch++; 
                }  
            }
        }
    }
    /*Yahtzee Check */
    function p7yahtzee () {
        let p7yahtzeeDuplicateKiller = new Set(p7diceGroup).size === 1;
        if (p7yahtzeeDuplicateKiller) {
            p7yahtzeeCheck = true;
            
            printOut("");
            printOut(p7diceGroup[0] + " " + p7diceGroup[1] + " " + p7diceGroup[2] + " " + p7diceGroup[3] + " " + p7diceGroup[4] + " " + p7diceGroup[5]);
            printOut("Amount of throws for a Yahtzee!: " + p7throwCounter);

            p7masterSwitch++
        }
    }
}

printOut(newLine);
