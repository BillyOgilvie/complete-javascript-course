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

/* const calcAverage = scoresArr =>
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
console.log(winner); */

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/* class Person {
  constructor(name, massKG, heightM) {
    (this.name = name), (this.massKG = massKG), (this.heightM = heightM);
  }

  calcBMI() {
    return (this.bmi = parseFloat(
      (this.massKG / this.heightM ** 2).toFixed(1)
    ));
  }
}

const people = [
  new Person('John Jonas', 105, 1.95),
  new Person('Mark Miller', 71, 1.7),
  new Person('Zacky Zane', 92, 1.5),
  new Person('Sally Smith', 60, 1.7),
  new Person('Mohammad Mahed', 120, 2.1),
  new Person('Derek Durk', 62, 1.7),
  new Person('Boris Bolton', 75, 1.85),
];

for (const el of people) {
  el.calcBMI();
}

let highest = people[0];
let lowest = people[0];
people.forEach(el => {
  if (el.bmi > highest.bmi) {
    highest = el;
  } else if (el.bmi < lowest.bmi) {
    lowest = el;
  }
});

console.log(`${highest.name} has the highest BMI, with a BMI of ${highest.bmi}
Their weight is ${highest.massKG}kg and their height is ${highest.heightM}`);
console.log(`${lowest.name} has the lowest BMI, with a BMI of ${lowest.bmi}
Their weight is ${lowest.massKG}kg and their height is ${lowest.heightM}m`); */

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calculateTip = bill => {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else if (bill >= 200) {
    percentage = 0.1;
  } else {
    return 'I hit an error';
  }
  return percentage * bill;
};

const tips = bills.map(cur => calculateTip(cur));

let totals = [];
for (let i = 0; i < bills.length; i++) {
  totals[i] = bills[i] + tips[i];
}

const avgTip = tips.reduce((cur, prev) => cur + prev) / tips.length;

console.log(tips);
console.log(bills);
console.log(totals);
console.log(avgTip);
