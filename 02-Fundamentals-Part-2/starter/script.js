'use strict'; //this should be the first thing that is in your file!

// Example of extra error loggging from use strict
/* let hasDriversLicense = false;
const passedTest = true;

if (passedTest) hasDriverLicense = true;
if (passedTest) console.log('I can drive)'); */

/*
=============
--Functions--
=============
*/
/* function logger() {
    console.log('My name is Bill');
}

logger();
logger();
logger(); */

/* function fruitProcessor(noOfApples, noOfOranges) {
    const juice = `Juice with ${noOfApples} apples and ${noOfOranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(5,2);
console.log(appleOrangeJuice); */


/*
================================================
-Functions declerations vs function expressions-
================================================
*/

/* const age1 = calcAge1(1989);
// function decleration - Hoisted: can be called before it is defined
function calcAge1(birthYear) {
    const year = new Date().getFullYear();
    return year - birthYear;
}

// function expression - Not hoisted
const calcAge2 = function (birthYear) {
    const year = new Date().getFullYear();
    return year - birthYear;
}

const age2 = calcAge2(1984);
console.log(age1, age2); */


/*
===================
--Arrow Functions--
===================
*/

// Arrow function
const calcAge3 = birthYear => new Date().getFullYear() - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, fisrtName) => {
   const age = new Date().getFullYear() - birthYear;
   const retirement = 65 - age;
   // return retirement;
   return `${fisrtName} retires in ${retirement} years`
}

