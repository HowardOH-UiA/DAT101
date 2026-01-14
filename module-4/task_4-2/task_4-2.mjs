"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p1numberArray = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9 ,10, 
    11, 12, 13, 14, 15, 
    16 ,17 ,18, 19, 20
]

for (let p1x = 0; p1x <= p1numberArray.length; p1x++) {
    printOut(p1numberArray[p1x])
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(p1numberArray.join(";"))

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p3string = "Hei på deg, hvordan har du det?"
const p3array = p3string.split(" ")
let p3printer = ""

for (let p3x = 0; p3x <p3array.length; p3x++) {
    const p3wordStorage = p3array[p3x]
    p3printer += `ID: ${p3x + 1} = ${p3wordStorage} ${newLine}`
}

printOut(p3printer)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p4nameArray = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function p4nameKiller(p4chosenArray, p4textTBK) {
    if (p4chosenArray.includes(p4textTBK)) {
        const p4nameChecker = p4chosenArray.indexOf(p4textTBK)
        p4chosenArray.splice(p4nameChecker, 1)
        printOut(p4chosenArray.join(" | "))
        printOut(`${p4textTBK} was removed from the list.`)
    } else {
        printOut(`${p4textTBK} is not found within array.`)
    }
}

p4nameKiller(p4nameArray, "Kari")

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p5nameArrayBoys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]
//Added a copy of girl-array because of deleted name in part 4 :)
const p5nameArrayGirls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

const p5masterArray = p5nameArrayBoys.concat(p5nameArrayGirls)
printOut(p5masterArray.join(" -- "))

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class p6TBook {
    #Title
    #Author
    #ISBN

    constructor(aTitle, aAuthor, aISBN) {
        this.#Title = aTitle
        this.#Author = aAuthor
        this.#ISBN = aISBN
    }

    toString() {
        return `Title: ${this.#Title}, Author: ${this.#Author}, ISBN: ${this.#ISBN}`
    }
}

const p6book1 = new p6TBook("Pride and Prejudice", "Jane Austen", "23849832747394237")
const p6book2 = new p6TBook("1984", "George Orwell", "1209371794733545")
const p6book3 = new p6TBook("Shadow of The Sith", "Adam Christopher", "72387912349719234")

const p6bookList = [p6book1, p6book2, p6book3]

for (const p6printMaster of p6bookList) {
    printOut(p6printMaster.toString())
    printOut(newLine)
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p7EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"}
};

const p7keyMaster = Object.keys(p7EWeekDays)

for (let p7keyCounter of p7keyMaster) {
    const p7printer = p7EWeekDays[p7keyCounter]
    printOut(`Key: ${p7keyCounter} Value: ${p7printer.value} Name: ${p7printer.name}`)
    printOut(newLine)
}


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p8numberArray =[]
for (let p8x = 0; p8x < 20; p8x++ ) {
    p8numberArray.push((Math.floor(Math.random() * 20) +1))
}

p8numberArray.sort((a, b) => a-b)
printOut(p8numberArray.join("--"))

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p9frequencyCounter = {}
let p9printer = ""

//Simply counting the frequencies, not sorting.
for(let p9x = 0; p9x < p8numberArray.length; p9x++) {
    if (p9frequencyCounter[p8numberArray[p9x]]) {
        p9frequencyCounter[p8numberArray[p9x]] += 1
    } else {
        p9frequencyCounter[p8numberArray[p9x]] = 1
    }
}
for (const p9selectedNumber in p9frequencyCounter) {
    p9printer += `${p9selectedNumber} has a frequency of ${p9frequencyCounter[p9selectedNumber] + newLine}`
}

printOut(p9printer)
p9printer = ""



//Sorting the frequencies
function p9fSort(a, b){
  if(p9frequencyCounter[b] === p9frequencyCounter[a]){
    return a - b;
  }

  return p9frequencyCounter[b] - p9frequencyCounter[a];
}


const p9keys = Object.keys(p9frequencyCounter);
p9keys.sort(p9fSort);
const p9frequencyValue = [];
for(let p9y = 0; p9y < p9keys.length; p9y++){
  const p9value = parseInt(p9keys[p9y]);
  p9frequencyValue.push(p9value);
}

for(let p9z = 0; p9z < p9frequencyValue.length; p9z++){
  const p9selectedNumber2 = p9frequencyValue[p9z];
  p9printer += `${p9selectedNumber2} has a frequency of ${p9frequencyCounter[p9selectedNumber2] + newLine}`;
}

printOut(p9printer);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p10rows = 9;
const p10columns = 5;
const p10table = [];
for(let p10x = 0; p10x < p10rows; p10x++){
  const p10rowList = [];

  for(let p10y = 0; p10y < p10columns; p10y++){
    p10rowList.push(`Row ${p10x + 1}, Column ${p10y + 1}`);
  }

  p10table.push(p10rowList);
}

let p10printer = "";
for(let p10z = 0; p10z < p10rows; p10z++){
  for(let p10a = 0; p10a < p10columns; p10a++){
    
    p10printer += p10table[p10z][p10a] + " --- ";
  }
  p10printer += newLine;
}
printOut(p10printer);

printOut(newLine);
