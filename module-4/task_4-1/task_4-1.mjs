"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";



const accounts = {
    Normal: "Brukskonto", 
    Savings: "Sparekonto", 
    Credit: "Kredittkonto", 
    Pension: "Pensjonskonto" 
}

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccount {
    #type = 0;
    #balance = 0;
    #withdrawLimit = 0;
    #currencyType = CurrencyTypes.NOK

    #currencyConverter(currencyType) {
        return CurrencyTypes.NOK.value / this.#currencyType.value * currencyType.value;  
    }

    constructor(accountType) {
        let printer = "";
        this.#type = accountType;
    }

    toString() {
        return this.#type;
    }

    setType(accountType) {
        this.#withdrawLimit = 0;
        printer = `Account changed from ${this.toString()}`;
        this.#type = accountType;
        printer += ` to ${this.toString()}`;
        printOut(printer);
    }

    setCurrencyType(currencyType) {
        if (currencyType != this.#currencyType) {
            printer = `Account currency changed from ${this.#currencyType.name}`;
            this.#currencyType = currencyType;
            printer += ` to ${this.#currencyType.name}`;
            printOut(printer);
            
            printer = `New balance: ${(currencyType.value * this.getBalance()).toFixed(2) + this.#currencyType.denomination}`;
            printOut(printer);
        } else {
            return
        }
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amountDW, currencyType = CurrencyTypes.NOK) {
        this.#withdrawLimit = 0;
        let exchangedValue = amountDW / this.#currencyConverter(currencyType)    
        this.#balance += exchangedValue
        printer = `Depositing ${amountDW.toFixed(2)} ${currencyType.name} to ${this.toString()}, new balance: ${this.#balance.toFixed(2) + this.#currencyType.denomination}`
        printOut(printer);
    }
    
    withdraw(amountDW, currencyType = CurrencyTypes.NOK) {
            switch (this.#type) {
                case accounts.Pension:
                    printOut(`Withdrawals are not allowed from ${accounts.Pension} accounts!`);
                    break;
                case accounts.Savings:
                    this.#withdrawLimit++
                    if (this.#withdrawLimit > 3) {
                        printOut(`${accounts.Savings} account have a maximum of 3 withdrawals!`);
                        break
                    }
                default:
                    let exchangedValue = amountDW / this.#currencyConverter(currencyType)    
                    this.#balance -= exchangedValue
                    printer = `Withdrawing ${amountDW.toFixed(2)} ${currencyType.name} from ${this.toString()}, new balance: ${this.#balance.toFixed(2) + this.#currencyType.denomination}`
                    printOut(printer);
                    console.log("def");
            }
    }



}


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const accountValues = Object.values(accounts);
let printer = accountValues.join(", ");

printOut(printer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myAccount = new TAccount(accounts.Normal);
printOut(`My account: ${myAccount.toString()}`);
myAccount.setType(accounts.Savings);
printOut(`My account: ${myAccount.toString()}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`Account balance: ${myAccount.getBalance().toFixed(2)}`);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(10);
myAccount.setType(accounts.Pension);
myAccount.withdraw(10);
myAccount.setType(accounts.Savings);
myAccount.withdraw(10);
printOut(`Account balance: ${myAccount.getBalance().toFixed(2)}`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(150)

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(12, CurrencyTypes.USD)
myAccount.withdraw(10, CurrencyTypes.GBP)
myAccount.setCurrencyType(CurrencyTypes.CAD)
myAccount.setCurrencyType(CurrencyTypes.INR)
myAccount.withdraw(150.11, CurrencyTypes.SEK)


printOut(newLine);
