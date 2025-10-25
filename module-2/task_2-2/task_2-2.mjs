"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
    const p1math1 = 2+3*2-4*6
    const p1math2 = 2+(3*(2-4))*6
    printOut(p1math1);
    printOut(p1math2);
    printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
    const p2meter = 2534
    let p2inch = p2meter / 2.54
    console.log(p2inch)
printOut(p2inch.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
    let p3days = 3
    let p3hours = 12
    let p3minutes = 14
    let p3seconds = 45
    
    p3hours = p3hours + p3days*24
    p3minutes = p3minutes + p3hours*60
    p3minutes = p3minutes + p3seconds/60
printOut(p3minutes);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
    let p4minutes =6322.52
    let p4total = p4minutes*60
    
    let p4days = p4total / (24* 3600)
    p4total %=  (24 * 3600)

    let p4hours = p4total / 3600
    p4total %= 3600

    p4minutes = p4total / 60
    let p4seconds = p4total % 60


printOut("Days: " + p4days.toFixed(0));
printOut("Hours: " + p4hours.toFixed(0));
printOut("Minutes: " + p4minutes.toFixed(0));
printOut("Seconds: " + p4seconds.toFixed(0));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p5exchangeRate = 76/8.6
const p5usd = 54
const p5nok = p5usd * p5exchangeRate

printOut(p5nok.toFixed(0) + " NOK = " + p5usd.toFixed(0) + " USD");
printOut(p5usd.toFixed(0) + " USD = " + p5nok.toFixed(0) + " NOK");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const p6sentence = "There is much between heaven and earth that we do not understand."

printOut(p6sentence.length);
printOut(p6sentence[19]);
printOut(p6sentence[35] + p6sentence[36] + p6sentence[37] + p6sentence[38] + p6sentence[39] + p6sentence[40] + p6sentence[41] + p6sentence[42] + p6sentence[43]);
printOut(p6sentence.indexOf("earth"))
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p701 = "False"
if (5>3) {p701 = "True"}
let p702 = "False"
if (7>=7) {p702 = "True"}
let p703 = "False"
if ("a">"b") {p703 = "True"}
let p704 = "False"
if ("1"<"a") {p704 = "True"}
let p705 = "False"
if ("2500"<"abcd") {p705 = "True"}
let p706 = "False"
if ("arne"!="thomas") {p706 = "True"}
let p707 = "False"
if (2==5) {p707 = "True"}
let p708 = "False"
if ("abcd">"bcd") {p708 = "True"}

printOut(p701);
printOut(p702);
printOut(p703);
printOut(p704);
printOut(p705);
printOut(p706);
printOut(p707);
printOut(p708);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p801 = "254"
let p802 = "57.23"
let p803 = "25 kroner"

printOut(parseInt(p801));
printOut(parseFloat(p802));
printOut(parseFloat(p803));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random()*360) + 1
/* +1 for å fjerne sjansen for 0*/

printOut(r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let p10days = 131
let p10weeks = p10days/7
p10days = p10days % 7


printOut(p10weeks.toFixed(0));
printOut(p10days.toFixed(0));
printOut(newLine);