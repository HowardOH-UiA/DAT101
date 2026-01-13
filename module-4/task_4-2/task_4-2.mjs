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
printOut(p8numberArray)

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
