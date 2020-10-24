'use strict'; //this should be the first thing that is in your file!

// Example of extra error loggging from use strict
/* let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriverLicense = true;
if (passedTest) console.log('I can drive)'); */

/*
=========================================
----------------Functions----------------
=========================================
*/
/* function logger() {
    console.log('My name is Bill');
}

logger();
logger();
logger(); */

function fruitProcessor(noOfApples, noOfOranges) {
    const juice = `Juice with ${noOfApples} apples and ${noOfOranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5,2);
console.log(appleOrangeJuice);