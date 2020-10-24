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

/*
function fruitProcessor(noOfApples, noOfOranges) {
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

/* // Arrow function
const calcAge3 = birthYear => new Date().getFullYear() - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, fisrtName) => {
   const age = new Date().getFullYear() - birthYear;
   const retirement = 65 - age;
   // return retirement;
   return `${fisrtName} retires in ${retirement} years`
} */

/*
====================================
--Functions calling other fucntions-
====================================
*/

/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(noOfApples, noOfOranges) {
    const applePieces = cutFruitPieces(noOfApples);
    const orangePices = cutFruitPieces(noOfOranges);
    const juice = `Juice with ${applePieces} apples and ${orangePices} oranges`;
    return juice;
}

const myJuice = fruitProcessor(2, 3);
console.log(myJuice); */

/*
====================
--Functions Review--
====================
*/

/* const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const yearsUntilRetirement = function (birthYear, fisrtName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${fisrtName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${fisrtName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1940, 'Mike'));

 */

/*
======================
--Coding Challenge 1--
======================
*/

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const dolphins = [
  [44, 23, 71],
  [85, 54, 41],
];
const koalas = [
  [65, 54, 49],
  [23, 34, 27],
];

const calcAverage = scoresArr =>
  scoresArr.reduce((prev, cur) => (prev + cur) / scoresArr.length);

// Test Data 1
const teamOneAvg = calcAverage(dolphins[0]);
const teamTwoAvg = calcAverage(koalas[0]);

// Test Data 2
// const teamOneAvg = calcAverage(dolphins[1]);
// const teamTwoAvg = calcAverage(koalas[1]);

const findWinner = (teamOneAvg, teamTwoAvg) => {
  if (teamOneAvg >= teamTwoAvg * 2) {
    return `dolphins win with ${teamOneAvg} vs ${teamTwoAvg}`;
  } else if (teamTwoAvg >= teamOneAvg * 2) {
    return `koalas win with ${teamTwoAvg} vs ${teamOneAvg}`;
  } else {
    return 'No Winner';
  }
};

const winner = findWinner(teamOneAvg, teamTwoAvg);
console.log(winner);
