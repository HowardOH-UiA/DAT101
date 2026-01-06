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
