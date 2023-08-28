'use strict';

const arr = [2, 3, 4];
const a = arr[0]; //WARN: alt + l duplikuje linijkę
const b = arr[0];
const c = arr[0];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 enhanced object literals
  // openingHours,
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//IMPORTANT: old way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//IMPORTANT: new way
[main, secondary] = [secondary, main];
console.log(main, secondary);

//IMPORTANT: Receive 2 return values from a funcition
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//IMPORTANT: Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//IMPORTANT: Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);      //8 9 undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1
/*
////////////////////////////
//9.116 SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
//ordersSet.clear();
console.log(ordersSet);
// console.log(ordersSet[0]); //zawsze zwróci undefined

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);
console.log('jonasschmedtmann'.length);
*/

/*
////////////////////////////
//9.117 MAPS: Fundamentals

const rest = new Map();
rest.set('name', 'Calssico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vagetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

// rest.set([1, 2], 'Test');
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
*/

/*
// console.log(rest.get([1, 2]));
console.log(rest.get(arr));

////////////////////////////
//9.118 MAPS: Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(answer === question.get('correct')));

//Converting Map to Array
console.log(...question);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/

////////////////////////////
//9.120 Coding Challange #3

// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1
// const events = new Set([...gameEvents.values()]); //Żle
const events = [...new Set(gameEvents.values())]; //Dobrze
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `"An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `"An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  if (min < 45) {
    console.log(`[FIRST HALF] ${min}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${min}: ${event}`);
  }
}
*/

////////////////////////////
//9.120 Coding Challange #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
//
//Test data (pasted to textarea, including spaces):
/*
underscore_case
 first_name
Some_Variable
   calculate_AGE
delayed_departure
*/
//
// Should produce this output (5 separate console.log outputs):
// underscoreCase   ✅
// firstName        ✅✅
// someVariable     ✅✅✅
// calculateAge     ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
//
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
//
//Afterwards, test with your own test data!
//
// GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const input = textArea.value;
//   const toLower = input.toLowerCase();

//   const inputNewLine = toLower.split('\n');
//   for (let str of inputNewLine) {
//     let strSplit = str.split('_');
//     console.log(
//       strSplit[0] + strSplit[1][0].toUpperCase() + strSplit[1].slice(1) + '\t✅'
//     );
//   }
// });

button.addEventListener('click', function () {
  const text = textArea.value;
  const rows = text.split('\n');
  for (let [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    // console.log(row, first, second);

    // console.log(first + second[0].toUpperCase() + second.slice(1) + '\t✅');
    // console.log(
    //   `${first}${second[0].toUpperCase() + second.slice(1)}\t${'✅'.repeat(
    //     rows.size
    //   )}`
    // );

    const camelCase = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}\t${'✅'.repeat(rows.size)}`;

    const log = `${camelCase.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`;

    console.log(log);
  }
});
