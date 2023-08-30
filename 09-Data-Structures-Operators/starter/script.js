'use strict';

// const arr = [2, 3, 4];
// const a = arr[0]; //WARN: alt + l duplikuje linijkę
// const b = arr[0];
// const c = arr[0];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

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

  // ES6 enhanced object literals
  // openingHours: openingHours,
  openingHours,

  // ES6 enhanced functions
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    //UWAGA: Parametry funkcji muszą dyć dokladnie takie same jak parametry obiektu podawanego do funkcji.
    //UWAGA: kolejność parametrów nie jest istotna.
    // console.log(obj);
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*

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



const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Property name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default values
console.log(restaurant.menu); //undefined
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//UWAGA: nie moemy tu napisać const ani let poniewaz zmienne są juz zadeklarowane jako let.
//UWAGA: dlatego wykorzystujemy pewne obejście. JS spodziewa się tutaj dostać blok kodu więc zapisujemy wszystko w nawiasie
//UWAGA: nalezy dopisać na końcu poprzedniej linijki średnik, poniewaz w innym przypadku VS Code dodaje nawias wewnątrz bloku kodu poprzedniej linijki
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  // starterIndex: 1,
});
*/

////////////////////////////
//9.105 SPREAD Operator
/*


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const almostGoodNewArr = [1, 2, arr];
console.log(almostGoodNewArr);
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//UWAGA: Iterables: Arrays, Strings, Maps. NOT Objects!!! \
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`)
console.log(`${[...str]} Schmedtmann`);
console.log([...`${[...str]} Schmedtmann`]);
console.log(...`${[...str]} Schmedtmann`);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2? '),
//   prompt('Ingredient 3? '),
// ];
//
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurantObj = {
  foundedIn: '1998',
  ...restaurant,
  founder: 'Giuseppe',
};
console.log(newRestaurantObj);
console.log(restaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Risorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

////////////////////////////
//9.106 REST Operator
/* 
//SPREAD, because on RIGHT side of =

const arr1 = [1, 2, [3, 4]];

//REST, because on LEFT side of =
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//UWAGA: REST zbiera TYLKO elementy za ostatnim podanym elementem. Tzn nie pobiera elementu pomiędzy pizza a risotoo
//UWAGA: dlatego rest powinien być ostatnim obiektem w destructuring assigment
//UWAGA: nie mozemy zrobić np tego const [pizza, , risotto, ...otherFood, bread] = [...restaurant.mainMenu,...restaurant.starterMenu,];

//Objects
const { sat, ...weekdaysNew } = restaurant.openingHours;
console.log(weekdaysNew);

//Functions
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
add();

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

////////////////////////////
//9.107 Short circuiting
/*
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || 'null');

console.log(undefined || 0 || '' || 'Hello' || 22 || null); //'Hello'
//UWAGA: operacje logiczne działają robiąc 'short circuiting' tzn w operacji OR sprawdzaja tylko do pierwszego argumentu dającego wartość true (truthy value),

console.log(undefined && 0 && '' && 'Hello' && 23 && null); //undefined
console.log(1 && true && ' ' && 'Hello' && 23); //23
//UWAGA: natomiast w przypadku operacji and sprawdza wartości az do momentu uzyskania falsy value lub do końca

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest1);

console.log('---AND---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
restaurant.orderKupa && restaurant.orderKupa('mushrooms', 'spinach');
*/

////////////////////////////
//9.108 NULLISH Coalescing Operator (??)
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//UWAGA: Nullish: null and undefined. NOT 0 or ''
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

 */

////////////////////////////
//9.109 Logical assignment operators
/* 
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANNONYMUS>';  //undefined
// rest2.owner = rest2.owner && '<ANNONYMUS>';  //<ANNONYMUS>
rest1.owner &&= '<ANNONYMUS>'; //nic
rest2.owner &&= '<ANNONYMUS>'; //<ANNONYMUS>

console.log(rest1);
console.log(rest2);

*/

////////////////////////////
//9.110 Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Couthinho', 'Perisic'];
console.log(players1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
//FIXME:
//BUG:
// const printGoals = function (...playerNames) {
//   let uniquePlayers = [];
//   let scoredPlayers = [];
//   for (let i = 0; i < playerNames.length; i++) {
//     const element = playerNames[i];
//     // console.log(`Passing to function: ${element}`);

//     if (game.scored.includes(element)) {
//       if (!uniquePlayers.includes(element)) {
//         uniquePlayers.push(element);
//       }
//     }
//   }

//   for (let i = 0; i < uniquePlayers.length; i++) {
//     const element = uniquePlayers[i];
//     // console.log(`Passing to function: ${element}`);

//     if (game.scored.values(element)) {
//       console.log(element);
//     }
//     // console.log(`Unique players:,`, uniquePlayers);
//     // console.log(`Scored players:,`, scoredPlayers);
//   }
// };

const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored`);

  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
  }
};

console.log('_________');
// printGoals(
//   'Lewandowski',
//   'Thiago',
//   'Couthinho',
//   'Perisic',
//   'Lewandowski',
//   'Gnarby',
//   'Lewandowski',
//   'Hummels'
// );

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
 */

////////////////////////////
//9.111 Looping arrays
/*
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log(menu.entries());
// console.log([...menu.entries()]);

 */

////////////////////////////
//9.112 Enhanced object literals
/*

 */

////////////////////////////
//9.113 optional chaining
/*
if (console.log(restaurant.openingHours.mon))
  console.log(restaurant.openingHours.mon.open);
if (console.log(restaurant.openingHours && restaurant.openingHours.mon))
  console.log(restaurant.openingHours.mon.open);

//With optionam chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  // const open = restaurant.openingHours[day]?.open || 'clsed';
  const open = restaurant.openingHours[day]?.open ?? 'clsed';
  console.log(`on ${day} we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.com',
  },
];
// const users = [];

//old way
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

//new way
console.log(users[0]?.name ?? 'User array empty');



 */

////////////////////////////
//9.114 Looping objects
/*
//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Object
const entries = Object.entries(openingHours);
console.log(entries);

//[key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}


 */

////////////////////////////
//9.115 Coding Challenge #3

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
for (const [goalNum, player] of game.scored.entries()) {
  console.log(`Goal ${goalNum + 1}: ${player}`);
}

//2
let oddSum = 0;
for (const odd of Object.values(game.odds)) {
  // console.log(odd);
  oddSum += odd;
}
// console.log(Object.values(game.odds).length);
const avgOdd = oddSum / Object.values(game.odds).length;
// console.log(`Avarage odd is ${avgOdd}`);
// console.log(`Avarage odd is ${Math.round(avgOdd * 100) / 100}`);
console.log(
  `Avarage odd is ${Math.round((avgOdd + Number.EPSILON) * 100) / 100}`
);

//3
for (const [team, value] of Object.entries(game.odds)) {
  const result = team == 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`   Odd of ${result}: ${value}`);
}

//BONUS
const scorers = {};
//UWAGA: nie ma potrzeby destrukturyzacji i uzywania entries
// for (const [goalNum,player] of game.scored.entries()) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }
for (const player of game.scored) {
  // if (scorers[player]) {
  //   scorers[player] += 1;
  // } else {
  //   scorers[player] = 1;
  // }
  //UWAGA: mozna to zapisać krocej
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


 */

////////////////////////////
//9.116 SETS
/*
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

////////////////////////////
//9.117 MAPS: Fundamentals
/*
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



// console.log(rest.get([1, 2]));
console.log(rest.get(arr));
*/

////////////////////////////
//9.118 MAPS: Iteration
/*
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
//9.120 Coding Challenge #3
/*
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
// for (const [min, event] of gameEvents) {
//   if (min < 45) {
//     console.log(`[FIRST HALF] ${min}: ${event}`);
//   } else {
//     console.log(`[SECOND HALF] ${min}: ${event}`);
//   }
// }

for (const [min, event] of gameEvents) {
  console.log(`[${min <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${min}: ${event}`);
}
*/

////////////////////////////
//9.121. Working With Strings - Part 1
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
//UWAGA: metoda slice zwraca wartości przed wartością wskazaną pod pozycją końcową BEZ NIEJ
console.log(airline.slice(4, 7));
console.log('abcdefghijklmnoprstuwxyz'.slice(4));

console.log(airline.slice(0, airline.indexOf(' '))); //zacznij od początku i zwróć do pozycji w której jest spacja BEZ NIEJ(spacji)
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //zacznij od pozycji w której jest spacja i przesuń o 1 i zwróc do końca

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seat
  const lastIndex = seat.slice(-1);
  const seatType =
    lastIndex === 'B' || lastIndex === 'E' ? 'Middle' : 'Window 🪟';
  console.log(`${seat} is ${seatType}`);
};

checkMiddleSeat('12A');
checkMiddleSeat('12B');
checkMiddleSeat('12C');
checkMiddleSeat('12D');
checkMiddleSeat('12E');
 */

////////////////////////////
//9.122. Working With Strings - Part 2
/*
const airline = 'TAP Air Portugal';
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//Fix capitalization in name
const passanger = 'jONaS'; //Jonas
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passanger, passangerLower, passangerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
console.log(email === loginEmail);

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//repalcing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);

const announcements = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcements.replace('door', 'gate'));
//UWAGA: Działa od niedawna
console.log(announcements.replaceAll('door', 'gate'));

//UWAGA: Regular expression
console.log(announcements.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//practice excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


 */

////////////////////////////
//9.123. Working With Strings - Part 3

///split and join
console.log('a+very+nice+string'.split('+'));
console.log('Lukasz Marszalek'.split(' '));

const [firstName, lastName] = 'Lukasz Marszalek'.split(' ');
console.log(firstName, lastName);

const nemName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(nemName);

//
const capitalizeName = function (name) {
  try {
    const namesSplit = name.toLowerCase().split(' ');
    const namesUpper = [];

    for (const nameWord of namesSplit) {
      namesUpper.push(nameWord[0].toUpperCase() + nameWord.slice(1));
    }
    return namesUpper.join(' ');
  } catch (e) {
    if (e instanceof TypeError) console.error(`${name} is not a typeof string`);
  }
};

// console.log(capitalizeName('jessica ann smith davis'));
// console.log(capitalizeName('joNas ShMeDtMann'));
// console.log(capitalizeName('LUKASZ MAREK MARSZALEK'));
// console.log(capitalizeName(1234));

const capitalizeNameSpecial = function (
  name,
  notCapitalizedWords = [
    'von',
    'van',
    'de',
    'le',
    'der',
    'den',
    'die',
    'di',
    'ter',
    'z',
  ]
) {
  try {
    const namesUpper = [];
    let current = '';

    //'marc-andré-felIPe-juan ter stegen von der gutierrez de silva-garcia'
    const namesFirstSplit = name.toLowerCase().split(' ');
    //['marc-andré-felipe-juan', 'ter', 'stegen', 'von', 'der', 'gutierrez', 'de', 'silva-garcia']
    const firstSplitLength = namesFirstSplit.length;
    for (const namePart of namesFirstSplit) {
      //'marc-andré-felipe-juan'
      const namesSecondSplit = namePart.split('-');
      //['marc', 'andré', 'felipe', 'juan']
      const secondSplitLength = namesSecondSplit.length;
      for (const [i, nameWord] of namesSecondSplit.entries()) {
        if (nameWord.includes(`'`)) {
          //'d'alembert'
          const ind = nameWord.indexOf(`'`);
          current =
            nameWord.slice(0, ind + 1) +
            nameWord[ind + 1].toUpperCase() +
            nameWord.slice(ind + 2);
          namesUpper.push(current);
          //'d'Alembert'
        } else if (nameWord.includes(`’`)) {
          //'d’alembert'
          const ind = nameWord.indexOf(`’`);
          current =
            nameWord.slice(0, ind + 1) +
            nameWord[ind + 1].toUpperCase() +
            nameWord.slice(ind + 2);
          namesUpper.push(current);
          //'d’Alembert'
        } else if (notCapitalizedWords.includes(nameWord)) {
          //'ter' przyimek z małą literą zostaje bez zmian
          namesUpper.push(nameWord);
          //'ter'
        } else if (i > 0 && i < secondSplitLength) {
          //jeśli imię bądz nazwisko jest wieloczłonowe
          const prev = namesUpper.pop();
          //prev = 'Marc'
          // current = prev + '-' + nameWord[0].toUpperCase() + nameWord.slice(1);
          //Marc-Andre
          current = nameWord[0].toUpperCase() + nameWord.slice(1);
          //Andre
          namesUpper.push([prev, current].join('-'));
          //Marc-Andre
        } else {
          current = nameWord[0].toUpperCase() + nameWord.slice(1);
          // namesUpper.push(nameWord[0].toUpperCase() + nameWord.slice(1));
          namesUpper.push(current);
          //Andre
        }
      }
    }
    // console.log(namesUpper.join(' '));
    return namesUpper.join(' ');
  } catch (e) {
    if (e instanceof TypeError) {
      console.error(`${name} is not a typeof string`);
      // console.log(e);
    } else {
      throw e; // re-throw the error unchanged
    }
  }
};

const rodzajniki = [
  'von',
  'van',
  //'de',
  'le',
  'der',
  'den',
  'die',
  'di',
  'ter',
  'z',
];

console.log('--------');
console.log(capitalizeNameSpecial('jean d’alembert'));
console.log(capitalizeNameSpecial(`jean d'alembert`));
console.log(capitalizeNameSpecial('jessica ann smith davis'));
console.log(capitalizeNameSpecial('joNas ShMeDtMann'));
console.log(capitalizeNameSpecial('LUKASZ MAREK MARSZALEK'));
console.log(capitalizeNameSpecial('maria teresa garcía ramírez de arroyo'));
console.log(capitalizeNameSpecial('maX von sydow', 'von'));
console.log(
  capitalizeNameSpecial(
    'marc-andré-felIPe-juan ter stegen von der gutierrez de silva-garcia'
  )
);
console.log(
  capitalizeNameSpecial(
    'marc-andré-felIPe-juan ter stegen von der gutierrez de silva-garcia',
    rodzajniki
  )
);
console.log(
  capitalizeNameSpecial('iga-maria-patrycja swiatek-piatek z kowalskich')
);
console.log(capitalizeNameSpecial(1234));

/*
 */

////////////////////////////
//9.120 Coding Challenge #4
/*
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
//
//Test data (pasted to textarea, including spaces):

underscore_case
 first_name
Some_Variable
   calculate_AGE
delayed_departure

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
*/

/*
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
*/
