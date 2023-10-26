"use strict";

/*
let hasDriversLicense = false;
const passTest = true; 

if (passTest) hasDriversLicense = true; 
if (hasDriversLicense) console.log('I can drive :D')

// const private = 534;
// const interface = 'Audio';
*/

/*
function logger() {
    console.log('My name is Łukasz')
}

logger();
logger();
logger();
*/

/*
function fruitProcessor (apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(4,2);
console.log(appleOrangeJuice);
*/

/*
//function declatarion
function calcAge1(birthYear) {
    return 2037 - birthYear;
}


const age1 = calcAge1(1991);
console.log(age1);


//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}


const age2 = calcAge2(1991);
console.log(age2);


//arrow expression
const calcAge3 = birthYear => 2037 - birthYear;


const age3 = calcAge3(1991);
console.log(age3);



const yearUntilRetirement = (birthYear,firtsName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firtsName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(1991,'Lukasz'));
console.log(yearUntilRetirement(1980,'Bob'));
*/

/*
const calcAverage = (score1, score2, score3) =>(score1 + score2 + score3)/3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2*avgKoalas){
        console.log(`Dolphins wins 🏆 (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2*avgDolphins){
        console.log(`Koalas wins 🏆 (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`There was no winner (${avgKoalas} vs ${avgDolphins})`)
    }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael','Steven','Peter'];
console.log(friends);

const y = new Array(1991, 1994, 2000, 2021);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);


friends[2]='Jay';
console.log(friends);
//fiends = ['Bob','Alice'] //tak nie można


const firstName = 'Jonas';
const jonas = [firstName, 'Shmedtmann',2037-1991, 'teacher',friends];
console.log(jonas);


//Excercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = new Array (1990, 1967, 2002, 2010, 2018);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])]
*/

/*
const friends = ['Michael','Steven','Peter'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop();
const popped = friends.pop(); //Last
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


if (friends.includes('Peter')) {
    console.log('You have friend Peter');
}

if (friends.includes('Steven')) {
    console.log('You have friend Steven');
}
*/

/*
const calcTip = bill => bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
const bill = 100;
// const calcTip = function (bill){
//     return bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;
// }


// console.log(`The bill was ${bill}, the tip was ${calcTip}, and the total value ${bill+calcTip}`);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/
/*
const jonasArray = [
    'Jonas',
    'Shmetmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven']

];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmetmann',
    years: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
};
*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmetmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const keyName = 'Name';
console.log(jonas['first'+ keyName]);
console.log(jonas['last'+ keyName]);

// const interestedIn = prompt('What are in intrested in about Jonas? Choose between firstName, lastName, age, job and friends.');
// //console.log(interestedIn);


// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else {
//     console.log('Wrong request. Choose between firstName, lastName, age, job and friends.');
// }


jonas.location = 'Portugal';
jonas['twitter'] = '@jonasshmedtmann';
console.log(jonas);


console.log (`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)

*/

/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Shmetmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        //console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${this.hasDriversLicense ? 'a':'no'} drivers license.`;
    }
};

//console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));


console.log(jonas.calcAge());


console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// Challange
// 'Jonas is a 46-year old teacher, and he has a/no  drivers license'
console.log(jonas.getSummary());

*/

/*
const mark = {
    fullName: 'Mark Miller',
    name: 'Mark',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
     this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    name: 'John',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
     this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s BMI (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s BMI (${mark.bmi})`);
}

*/

/*



// console.log ('Lifting weights, repetition 1');
// console.log ('Lifting weights, repetition 2');
// console.log ('Lifting weights, repetition 3');
// console.log ('Lifting weights, repetition 4');
// console.log ('Lifting weights, repetition 5');
// console.log ('Lifting weights, repetition 6');
// console.log ('Lifting weights, repetition 7');
// console.log ('Lifting weights, repetition 8');
// console.log ('Lifting weights, repetition 9');
// console.log ('Lifting weights, repetition 10');

for(let rep = 1; rep <= 10; rep++ ) {
    console.log (`Lifting weights, repetition ${rep}`);
}
*/

/*
const jonas = [
    'Jonas',
    'Shmetmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];

const types = [];
// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);


for(let i = 0; i < jonas.length ; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push( typeof jonas[1] );
}

console.log(types);


const years = [1991,2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length ; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);



console.log("------------Only Strings------------");
for(let i = 0; i < jonas.length ; i++) {
    if (typeof jonas[i] !== 'string') continue;
    
    console.log(jonas[i], typeof jonas[i]);
}

console.log("------------Break with a number------------");
for(let i = 0; i < jonas.length ; i++) {
    if (typeof jonas[i] === 'number') break;
    
    console.log(jonas[i], typeof jonas[i]);
}
*/

/*
// /*
const jonas = [
    'Jonas',
    'Shmetmann',
    2037 - 1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true
];


//0, 1, ..., 4
//4, 3, ..., 0

for(let i = jonas.length -1 ; i >= 0 ; i--) {
    console.log(i, jonas[i]);
}


for (let excercise = 1; excercise <= 3; excercise++ ) {
    console.log(`----- Starting Excercise ${excercise}`);
    for(let rep = 1; rep <=5; rep++) {
        console.log(`Excercise ${excercise}. Lifting weight repetition ${rep}`);
    }
}
*/

// for(let rep = 1; rep <= 10; rep++ ) {
//     console.log (`FOR: Lifting weights, repetition ${rep}`);
// }

// let rep = 1;
// while(rep <= 10) {
//     console.log (`WHILE: Lifting weights, repetition ${rep}`);
//     rep ++;
// }

/*

let dice = Math.trunc(Math.random() * 6)+1;
console.log(dice);


while (dice !== 6) {
    console.log (`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6)+1;
    if(dice === 6) console.log (`You rolled a ${dice}. Loop is about to end...`);
}
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills, calcAverage(bills));
console.log(tips, calcAverage(tips));
console.log(totals, calcAverage(totals));
