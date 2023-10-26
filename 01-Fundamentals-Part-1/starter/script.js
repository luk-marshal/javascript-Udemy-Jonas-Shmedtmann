/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;





const markBMI = markMass/markHeight**2;
const johnBMI = johnMass/(johnHeight*johnHeight);
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI>johnBMI;
console.log(markHigherBMI);

*/

/*
const firstName = 'Lukasz';
const job = 'programmer';
const birthYear = 1994;
const year = 2037;

const lukasz = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!';
console.log(lukasz);

const lukaszNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(lukaszNew);

console.log("String with \n\
multiple \n\
lines")

console.log(`String with
multiple
lines`)

*/

/*
const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}

let century;
const birthYear = 1994; 
if (birthYear <= 2000) {
    century = 20; 
} else {
    century = 21;
}

console.log(century);
*/

/*

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;


const markBMI = markMass/markHeight**2;
const johnBMI = johnMass/(johnHeight*johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher that John's BMI (${johnBMI}).`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher that Mark's BMI (${markBMI}).`)
}

*/

/*
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Lukasz'));
console.log(typeof NaN);

console.log(String(23), 23);
*/

/*
const age = 18;
if (age === 18) console.log('You just became adult :D (strict)');

if (age == 18) console.log('You just became adult :D (loose)');
*/

/*
const favourite = Number(prompt("What is your favourite number?"));
console.log(typeof favourite);
console.log(favourite);


if(favourite === 23) {
    console.log("Great! 23 is an amazing number!")
} else if (favourite === 7) {
    console.log("Great! 7 is also a cool number!")
} else if (favourite === 9) {
    console.log("Great! 9 is also a cool number!")
} else {
    console.log("Your number is not 23 or 7 or 9!")
}

if(favourite !== 23 ) {
    console.log('Why not the 23?')
}    
*/

/*
//Coding Challenge #3
// const avgDolphins = (96 + 108 + 89)/3;
// const avgKoalas = (88 + 91 + 110)/3;

// const avgDolphins = (97 + 112 + 101)/3;
// const avgKoalas = (109 + 95 + 123)/3;

// const avgDolphins = (96 + 108 + 89)/3;
// const avgKoalas = (88 + 91 + 110)/3;

const avgDolphins = (97 + 112 + 101)/3;
const avgKoalas = (109 + 95 + 106)/3;


console.log(avgDolphins,avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('Delfiny wygrały')
}
else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log('Koale wygrały')
}
// else if(avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
//     console.log('Remis')
// }
else if(avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log('Remis')
}
else {
    console.log('Nie wyłoniono zwycięzcy')
}
*/

/*
const day = 'sunday';

switch (day){
    case 'monday':
        console.log ('Poniedziałek');
        console.log ('coś tam');
        break;

    case 'tuesday':
        console.log ('Wtorek');
        break;

    case 'wednesday':
        console.log ('Środa');
        break;
    
    case 'thursday':
        console.log ('Czwartek');
        break;

    case 'friday':
        console.log ('Piątek');
        break;

    case 'saturday':
    case 'sunday':
        console.log ('Enjoy the weekend');
        break;

    default: 
        console.log ('Not a valid date');
}
*/

/*
const age = 23; 
age >=18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >=18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = 'wine 🍷';
}
else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine 🍷' : 'water 💧'}`);
*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
