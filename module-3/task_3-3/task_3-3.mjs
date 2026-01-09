"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p1timeKeeper() {
    let p1currentTime = new Date();
    p1currentTime = p1currentTime.toLocaleString("no-NB", {timeZone: 'Europe/Oslo', weekday: "long", year: "numeric", month: "long", day: "numeric",});

    printOut("Current Date and Time: " + p1currentTime);
}

p1timeKeeper();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function p2doomsdayClock() {
    const p2_2XCO = new Date(2026,4,14,2);
    const p2options = {timeZone: 'Europe/Oslo', weekday: "long", year: "numeric", month: "long", day: "numeric",};
    const p2doomsdayTime = p2_2XCO - p2currentTime
    const p2doomsdayCountdown = Math.ceil(p2doomsdayTime / (1000 * 60 * 60 * 24));

    printOut("2XCO Release Date: " + p2_2XCO.toLocaleString("no-NB", p2options));
    printOut(newLine);
    printOut(`Time until Vi pummels me into the ground or something, idk I have only watched the show :): <p> ${p2doomsdayCountdown} days!!!!!</p>`);

}

function p2timeKeeper() {
    let p2currentTime = new Date();
    const p2options = {timeZone: 'Europe/Oslo', weekday: "long", year: "numeric", month: "long", day: "numeric",};
    const p2currentTimeNor = p2currentTime.toLocaleString("no-NB", p2options);
    
    printOut("Current Date and Time: " + p2currentTimeNor);
    return p2currentTime;
}

let p2currentTime = p2timeKeeper();
p2doomsdayClock();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p3circleMaster(p3radius) {
    const p3diameter = p3radius * 2;
    const p3circumference = 2 * Math.PI * p3radius;
    const p3area = Math.PI * (p3radius ** 2);

    printOut("Circle Radius: " + p3radius);
    printOut(newLine);
    printOut("Circle Diameter: " + p3diameter);
    printOut("Circle Circumference: " + p3circumference);
    printOut("Circle Area: " + p3area);
}

p3circleMaster(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p4rectangleMaster(p4width, p4height) {
    const p4circumference = 2 * (p4width + p4height);
    const p4area = p4width * p4height;

    printOut("Rectangle Width: " + p4width + " and Height: " + p4height);
    printOut(newLine);
    printOut("Rectangle Circumference: " + p4circumference);
    printOut("Rectangle Area: " + p4area);
}

p4rectangleMaster(5, 2);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p5temperatureMaster(p5temperature, p5temperatureUnit) {
    printOut(`Input Temperature: ${p5temperature} ${p5temperatureUnit}`);

    switch (p5temperatureUnit) {
        case "Celsius":
            const p5CtoK = Math.floor(p5temperature + 273.15);
            const p5CtoF = Math.floor(p5temperature * (9/5) + 32);
            printOut(`Converted to Kelvin: ${p5CtoK} | Converted to Fahrenheit: ${p5CtoF}`);
            printOut(newLine);
            break;
            
        case "Fahrenheit":
            const p5FtoK = Math.floor((p5temperature + 459.67) * (5/9));
            const p5FtoC = Math.floor((p5temperature - 32) / (9/5));
            printOut(`Converted to Kelvin: ${p5FtoK} | Converted to Celsius: ${p5FtoC}`);
            printOut(newLine);
            break;

        case "Kelvin":
            const p5KtoC = Math.floor(p5temperature - 273.15);
            const p5KtoF = Math.floor(p5temperature * (9/5) - 459.67);
            printOut(`Converted to Celsius: ${p5KtoC} | Converted to Fahrenheit: ${p5KtoF}`);
            printOut(newLine);
            break;

    }
}

p5temperatureMaster(-4, "Celsius");
p5temperatureMaster(50, "Fahrenheit");
p5temperatureMaster(142, "Kelvin");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p6salesTaxKiller(p6amount, p6taxGroup) {
    let p6taxRate = 25;
    switch (p6taxGroup) {
        case "Normal": 
            printOut(`Amount before tax: ${p6amount}kr | Tax Group: ${p6taxGroup} | Amount after tax: ${(100 * p6amount) / (p6taxRate + 100)}kr`);
            break;
        case "Food": 
            p6taxRate = 15;
            printOut(`Amount before tax: ${p6amount}kr | Tax Group: ${p6taxGroup} | Amount after tax: ${(100 * p6amount) / (p6taxRate + 100)}kr`);
            break;
        case "Hotel", "Transport", "Cinema":
            p6taxRate = 10;
            printOut(`Amount before tax: ${p6amount}kr  | Tax Group: ${p6taxGroup} | Amount after tax: ${(100 * p6amount) / (p6taxRate + 100)}kr`);
            break;
        default: 
            printOut("Unknown VAT group!");
    }           
}

p6salesTaxKiller(500, "Normal"); 
p6salesTaxKiller(1498, "Food"); 
p6salesTaxKiller(180, "Cinema"); 
p6salesTaxKiller(1000000, "Trolls"); 

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p7speedKing(p7speed, p7distance, p7time) {
    if (p7speed == null && p7time != null && p7distance != null) {
        p7speed = p7distance / p7time;
        printOut("Speed = Distance / Time");
    } else if (p7time == null && p7speed != null && p7distance != null) {
        p7time = p7distance / p7speed;
        printOut("Time = Distance / Speed");
    } else if (p7distance == null && p7speed != null && p7time != null) {
        p7distance = p7speed * p7time;
        printOut("Distance = Speed * Time");
    } else {
        printOut(NaN);
        printOut(newLine);
        return;
    }
    printOut(`Speed: ${p7speed} m/s | Distance: ${p7distance} m | Time: ${p7time} s`);
    printOut(newLine);
}

p7speedKing(10, null, 20);
p7speedKing(null, null, 20);
p7speedKing(160, 423, null);
p7speedKing(null, 32, 231);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p8stringMaster(p8mainString, p8MaxSize, p8character, p8beforeAfter) {
    //True = before, False = after
    while (p8mainString.length < p8MaxSize) {
        if (p8beforeAfter) {
            p8mainString = p8character + p8mainString;
        } else {
            p8mainString += p8character;
        }
    }
    printOut("String: " + p8mainString);
}

p8stringMaster("Greetings", 10, "a", true);
p8stringMaster("Tromsø", 16, "7", false);
p8stringMaster("Hamburger", 70, "r", true);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p9mathWizz() {
    let p9number = 1
    for (let p9counter = 1; p9counter <= 200; p9counter++) {
        let p9left = 0; let p9right = 0;
        for (let p9l = 0; p9l < p9counter + 1; p9l++) {
            p9left += p9number++;
        }
        for (let p9l = 0; p9l < p9counter; p9l++) {
            p9left += p9number++;
        }
        if (p9left === p9right) {
            printOut(`Error at line: ${p9counter}: ${p9left} does not equal ${p9right}`);
        }
    }
    printOut("Maths fun!");
}

p9mathWizz();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function p10mrRecursive(p10number) {
    printOut(`Original Number: ${p10number}`);
    let p10result = p10number;
    for (let p10counter = p10number; p10counter > 1; p10counter--) {
        p10result *= (p10counter - 1);
        console.log(p10result);
        console.log(p10counter);
    }
    printOut(`Factorial: ${p10result}`);
    printOut(newLine);
}

p10mrRecursive(5);
p10mrRecursive(13);
p10mrRecursive(415);
p10mrRecursive(4);

printOut(newLine);
