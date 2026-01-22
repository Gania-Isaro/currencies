import input from "sync-input";
let shouldContinue = false;

function convertCurrency() {
    
    const currencies = {
        USD: 1,
        JPY: 150,
        EUR: 0.9,
        RUB: 90,
        GBP: 0.85,
    };

    // ${amount / currencies[currencyFrom] * currencies[currencyTo]}
    function convert(amount, currencyFrom, currencyTo) {
        // convert from to usd
        const usdAmount = amount / currencies[currencyFrom];
        // convert usd to to
        const result = usdAmount * currencies[currencyTo];
        return result.toFixed(2);
    }

    console.log(`We can convert:\n USD: ${currencies.USD}\n JPY: ${currencies.JPY}\n EUR: ${currencies.EUR}\n RUB: ${currencies.RUB}\n GBP: ${currencies.GBP}`);
    
    let currencyFrom;
    let currencyTo;

    while (true) {
    
        while (true) {

            currencyFrom = input("Enter the currency to convert from: ").toUpperCase();
            
            if (!(currencyFrom in currencies)) {
                console.log("Invalid currency to convert from, try again");
                continue;
            }
            
            break;
        }

    
        while (true) {
            
            currencyTo = input("Enter the currency to convert to: ").toUpperCase();

            if (!(currencyTo in currencies)) {
                console.log("Invalid currency to convert to, try again");
                continue;
            }

            break;

        }

        // same currency validation
        if (currencyFrom === currencyTo) {

            console.log("You are converting the same currency");
            continue;

        }

        break;

    }
   
    // amount validation
    let amount;
    while (true) {

        const rawAmount = input("Enter the amount to convert: ");
        amount = parseFloat(rawAmount);

        if (!isNaN(amount) && amount > 0) {
            break;  //valid input -> exit the loop
        }

        console.log("Invalid amount or less than or equal to 0");

    }

    console.log(`Results: ${amount} ${currencyFrom} is equal to ${convert(amount, currencyFrom, currencyTo)} ${currencyTo}`);

    shouldContinue = true;

}

function goodbyes() {

    console.log("Thank you for using the currency converter");
    console.log("Goodbye!");

}

console.log("Welcome to CURRENCY CONVERTER!");
while (true) {

    console.log(`What do you want to do${shouldContinue ? " next" : ""}?`);
    console.log(`1. Convert currency${shouldContinue ? " again" : ""}`);
    console.log("2. Exit");

    const choice = input("Enter your choice: ");

    if (choice === "1") {

        convertCurrency();

    } else if (choice === "2") {

        goodbyes();
        break;

    } else {

        console.log("Invalid choice, try again!");

    }

}
