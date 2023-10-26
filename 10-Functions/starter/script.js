'use strict';

/////
//UWAGA: ONLY IMPORTANT NOTES

/*
const createBooking = function (a, b, c) {
  console.log(a, b, c);
};

//UWAGA: nie można tak pomijać
// createBooking('LH555', , 800);
//UWAGA: zamiast tego stosujemy undefined
createBooking('LH555', undefined, 1000);

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //   book: function () {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Lukasz Marszałek');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//UWAGA: Nie zadziała poniewaz funkcja nie ma swojego 'this' keyword
// book(23, 'Sara Williams');

//UWAGA: Dlatego wykorzystujemy metodę call, która za pierwszy argument przyjmuje odnościk do obiektu, do którego będzie pozniej odnosic 'this' keyword
book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Marry Cooper');

//UWAGA: Metoda aply działa tak samo tylko przyjmuje argumenty jako array
const flightData = [538, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//robi to samo. Bardziej nowoczesne podejście
//UWAGA: //UWAGA: TAK ROBIMY a NIE tak jak u góry
book.call(swiss, ...flightData);
console.log(swiss);

//Bind method
// book.call(eurowings, 23, 'Sara Williams');
//UWAGA: zamiast robić call mozemy zrobic bind i wykorzystywać metodę częsciej
const bookEW = book.bind(eurowings);
//UWAGA: bindujemy bookEW jako book wewnątrz objektu eurowings
//UWAGA: //UWAGA: book wewnątrzbook.bind(xxx) odnosi się do const book = lufthansa.book; które przypisuje dopiero konkretną fukcję

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings);
//UWAGA: podobnie jak wyzej bindujemy bookEW23 do objektu euriowings ale podojąc dodatkowo argument dla lotu 23
const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
console.log(eurowings);

console.log('\n');

//With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//UWAGA: takie zastosowanie jak ponizej jest bledne, poniewaz this keyword odnosi się do przycisku buy a nie do objektu lufthansa
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

//UWAGA: //UWAGA: //UWAGA: w tym przypadku stosujemy bind
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT =value => value + value * 0.23

console.log('VAT:', addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
console.log(addTaxRate(0.23)(100));

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
 

*/

///////////////////////////////////////
// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, 
and an array with the number of replies for each option. 
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. 
  The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
    The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. 
    For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
    Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
  The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', 
  simply display the results array as it is, using console.log(). This should be the default option. 
  If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! 
So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      // prompt(`
      //     What is your favourite programming language?
      //     0: JavaScript
      //     1: Python
      //     2: Rust
      //     3: C++
      //     (Write option number)`)

      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    if (
      typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.options.length
    ) {
      this.answers[answer]++;
    } else {
      alert('Wrong number selected');
    }

    poll.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // console.log(`"Poll results are ${this.answers.replace(/,/g, ', ')}"`);
      // console.log(
      //   `"Poll results are ${String(this.answers).replace(/,/g, ', ')}"`
      // );
      console.log(`"Poll results are ${this.answers.join(', ')}"`);
    }
  },
};

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll));

const test1 = [5, 2, 3];
const test2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call({ answers: test1 });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call(test2);
poll.displayResults.call(test2, 'string');
*/

//////////////
//10.136. Immediately Invoked Function Expressions (IIFE)
/*

const runOnce = function () {
  console.log('This function never run again');
};

// runOnce();

//IFFE
(function () {
  console.log('This function never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate); //Nie zadziała

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var isNotPrivate = 46;
}

console.log(isNotPrivate); //Zadziała ponieważ użyliśmy var
console.log(isPrivate);   //NIE zadziała ponieważ użyliśmy const. const i let tworzą własny scope wewnątrz bloków i nie są dostępne poza tym blokiem kodu.

*/

//////////////
//10.137. Closures
/*

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    return console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
 */

/*


//Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  let b = 777;

  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGrup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGrup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

boardPassengers(180, 3);
 */

/////////////////////////
//Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓 
Your tasks: 
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again! 
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example. 
 
 
 
 
 
GOOD LUCK 😀

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
*/
