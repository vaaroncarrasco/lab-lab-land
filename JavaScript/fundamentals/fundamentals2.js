
/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/






// let allScoresDolphins = [44, 23, 71];
// let allScoresKoalas = [65, 54, 49];

// console.log(allScoresDolphins[allScoresDolphins.length -1]);

// const calcAverageScore = (allScores) => {
//     let sum = 0;
//     allScores.forEach(score => sum += score);
//     return sum / allScores.length;
// }

// const finalScoreDolphins = calcAverageScore(allScoresDolphins);
// const finalScoreKoalas = calcAverageScore(allScoresKoalas);

// const checkWinner = (scoreTeamA, scoreTeamB) => {
//     console.log(scoreTeamA, scoreTeamB)
//     // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
//     if ((scoreTeamA/2) >= scoreTeamB) {
//         console.log(`Dolphins: ${finalScoreDolphins} vs Koalas ${finalScoreKoalas} | Dolphins WIN!`);
//     } else if ((scoreTeamB/2) >= scoreTeamA) {
//         console.log(`Dolphins: ${finalScoreDolphins} vs Koalas ${finalScoreKoalas} | Koalas WIN!`);
//     } else {
//         console.log('No wins ...');
//     }
// }

// checkWinner(finalScoreDolphins, finalScoreKoalas);

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill 
value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/



/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


*/

// const calcBMI = (mass, height) =>  mass / (height * height);

// let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() { 
//         return this.bmi = this.mass / (this.height * this.height) 
//     },
// };

// let john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() { 
//         return this.bmi = this.mass / (this.height * this.height) 
//     }
// };

// mark.calcBMI();
// john.calcBMI();


// console.log(mark.bmi < john.bmi ? `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s` : `${mark.fullName}'s BMI(${mark.bmi})  is higher than ${john.fullName}'s (${john.bmi})`);

/*

CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Use the calcTip function we wrote before (included in the starter code) to calculate tips and 
total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

Write a function calcAverage which takes an array called arr as an argument. 
This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge
 */

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return (bill * (15/100))
    } else {
        return (bill * (20/100))
    }
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

bills.forEach( bill => {
    tips.push(calcTip(bill));
    totals.push(calcTip(bill) + bill)
    console.log(`The bill was ${bill}, the tip ${calcTip(bill)}, total was ${bill + calcTip(bill)}`);
});

const calcAverageFromArray = (arr) => {
    let sum = 0;
    for (i = 0; arr.length > i; i++) {
        sum += arr[i];
    }
    return (sum / arr.length);
}

console.log('Average bill was' + calcAverageFromArray(totals));
