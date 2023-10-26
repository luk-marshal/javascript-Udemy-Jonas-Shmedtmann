'use strict';
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//UWAGA:
// const movements = [-200, -450, -400, -3000, -650, -130, -70, -1300];
const movements = account1.movements;

//147
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    //
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    ?.filter((mov, i, arr) => mov < 0)
    ?.reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  } else {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.focus();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const receiverAcc = accounts.find(
    acc => inputTransferTo.value === acc.username
  );

  const amount = inputTransferAmount.value;

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.focus();
  updateUI(currentAccount);
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
  }
  updateUI(currentAccount);
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//142.Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE                                //NIE WPŁYWA na początkowy array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE                                //WPŁYWA na początkowy array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE                               //WPŁYWA na początkowy array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);
console.log(...letters);

//JOIN
console.log(letters.join('-'));
*/

/////////////////////////////////////////////////
//143.The new at Method
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array value
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/

/////////////////////////////////////////////////
//144.Looping Arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}

console.log('---FOR EACH---');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
  // console.log(arr);
});

*/

/////////////////////////////////////////////////
//145.forEach with Maps and Sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/////////////////////////////////////////////////
//146.PROJECT: "Bankist" APP

/*
//In app
 */

/////////////////////////////////////////////////
//148. Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
// const dataJulia = [3, 5, 2, 12, 7];
// const dataKate = [4, 1, 15, 8, 3];
const dataJulia = [9, 16, 6, 8, 3];
const dataKate = [10, 5, 6, 1, 4];

//1
const dataJuliaCorrect = dataJulia.slice(1, -2);
console.log(dataJuliaCorrect);

//2
const dataBoth = [...dataJuliaCorrect, ...dataKate];
// const dataBoth = dataJuliaCorrect.concat(dataKate);
console.log(dataBoth);


//3
dataBoth.forEach(function (years, i) {
  if (years < 3) {
    console.log(`Dog ${i + 1} is still a puppy 🐶`);
  } else {
    console.log(`Dog ${i + 1} is an adult, and is ${years} years old`);
  }
});

 */

/////////////////////////////////////////////////
//149. Data Transformations: map, filter, reduce
/**/

/////////////////////////////////////////////////
//150.The map Method
/*
const eurToUSd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSd;
// });

//to samo
const movementsUSD = movements.map(mov => mov * eurToUSd);

console.log(movements);
console.log(movementsUSD);

for (const mov of movements) movementsUSD.push(mov * eurToUSd);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

*/

/////////////////////////////////////////////////
//151.Computing usernames

/*
//w apce

console.log(accounts[0]?.username); //undefined
//createUsernames(accounts);
console.log(accounts[0]?.username); //'js'
 */

/////////////////////////////////////////////////
//152.Filter method
/*

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov, i, arr) => mov < 0);
console.log(withdrawals);
*/

/////////////////////////////////////////////////
//153. Reduce method
/*
console.log(movements);
const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//reszta w aplikacji

//max value
console.log(movements);
// const maxLimit = movements.reduce((acc, cur) => (cur > acc ? cur : acc));
const maxLimit = movements.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  movements[0]
  );
console.log(maxLimit);
*/

/////////////////////////////////////////////////
//154.Coding Challenge #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages = []) {
  // let humanAge = [];
  //
  //1
  // for (const dogAge of ages) {
  //   if (dogAge <= 2) {
  //     humanAge.push(dogAge * 2);
  //   } else {
  //     humanAge.push(16 + dogAge * 4);
  //   }
  // }
  const humanAge = ages.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  console.log(`Human age: ${humanAge}`);

  //2
  const filtered = humanAge.filter(age => age >= 18);
  console.log(`Filtered: ${filtered}`);

  //3
  const avgAge = filtered.reduce((sum, age) => sum + age) / filtered.length;
  console.log(`Average age: ${avgAge}`);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
 */

/////////////////////////////////////////////////
//155. the magic of chaining methods
/*
const eurToUSd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositsUSD);

//UWAGA: tak mozna sprawdzić jesli zrobimy błąd
// const totalDepositsUSDErr = movements
//   .filter(mov => mov < 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUSd;
//   })
//   // .map(mov => mov * eurToUSd)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(totalDepositsUSDErr);

//reszta w apce
 */

/////////////////////////////////////////////////
//156.Coding Challenge #3
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge2 = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((sum, age, i, arr) => {
      console.log(arr);
      return sum + age / arr.length;
    }, 0);
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
 */

/////////////////////////////////////////////////
//157 find method
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//using forof
let accountAlt;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    accountAlt = acc;
  }
}
console.log(accountAlt);
 */

/////////////////////////////////////////////////
//158 implementing login

//in app
/*
 */

/////////////////////////////////////////////////
//159 implementing transfers

//in app
/*
 */

/////////////////////////////////////////////////
//160 findIndex method

//in app
/*
 */

/////////////////////////////////////////////////
//161 some and every

/*
console.log(movements);
console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -130));

//some
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//every
const everyDeposits = movements.every(mov => mov > 0);
console.log(everyDeposits);

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const deposits = mov => mov > 0;
console.log(movements.some(deposits));
console.log(movements.every(deposits));
console.log(movements.filter(deposits));
*/

/////////////////////////////////////////////////
//162 flat and flatMap
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [[1,2], 3, 4, [5,6], 7, 8]
console.log(arrDeep.flat(1)); // [[1,2], 3, 4, [5,6], 7, 8]
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeep.flat(3)); //[1, 2, 3, 4, 5, 6, 7, 8]


const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalMovements1 = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalMovements1);

const overalMovements2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalMovements2);

const overalMovements3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalMovements3);

 */

/////////////////////////////////////////////////
//163 sorting arrays
/*

//strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners); //['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort()); //['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners); //['Adam', 'Jonas', 'Martha', 'Zach']
//UWAGA: Sort zmienia oryginalny array

//Numbers
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
//UWAGA: UWAGA: W przypadku sortu z numerami funkcja zamienia numery na wartość tekstową i dopiero sortuje, dlatego nie działa to tak jak mona się spodziewać
//UWAGA: jesli return < 0  A, B
//UWAGA: jesli return > 0  B, A

console.log(
  movements.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
  })
); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

console.log(movements.sort((a, b) => a - b)); //[-650, -400, -130, 70, 200, 450, 1300, 3000]
console.log(movements.sort((a, b) => b - a)); //[3000, 1300, 450, 200, 70, -130, -400, -650]

//reszta w apce
 */

/////////////////////////////////////////////////
//164
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

x.fill(1, 3, 6);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

const hundredDices = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);

console.log(hundredDices);
console.log(hundredDices.filter(dice => dice === 1));
console.log(hundredDices.filter(dice => dice === 2));
console.log(hundredDices.filter(dice => dice === 3));
console.log(hundredDices.filter(dice => dice === 4));
console.log(hundredDices.filter(dice => dice === 5));
console.log(hundredDices.filter(dice => dice === 6));

//
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI2);
});

 */

/////////////////////////////////////////////////
//165
/*
 */

/////////////////////////////////////////////////
//166 Array method practice
/*
//1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

const bankDepositSum2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, cur) => {
    cur > 0 ? (sum += cur) : sum;
    return sum;
  }, 0);
console.log(bankDepositSum2);

const bankDepositSum3 = accounts
  .reduce((acc1, cur1) => {
    acc1.push(cur1.movements);
    return acc1;
  }, [])
  .reduce((acc2, cur2) => {
    cur2.reduce((_, cur3) => acc2.push(cur3), []);
    return acc2;
  }, [])
  .reduce((sum, cur) => {
    cur > 0 ? (sum += cur) : sum;
    return sum;
  }, 0);
console.log(bankDepositSum3);

//2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length; //opcja 1

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); //opcja 2
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); //opcja 2
console.log(numDeposits1000);

let a = 10;
console.log(a);
console.log(a++);
console.log(a++);
//UWAGA: w powyzszym zapisie wartość a zostaje powiekszona uzywajzc operatora ++ jednak zwracana jest wartość początkowa

//prefixed ++ operator
console.log(a);
console.log(++a);
console.log(++a);
//UWAGA: aby poprawnie zastosować operator ++ w metodzie reduce musimy skorzystać z operatora ++ przez nazwą zmiennej

//3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

//4
//this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(
  convertTitleCase(
    'and here is another title with an example and another example'
  )
);

 */

/////////////////////////////////////////////////
//167 Coding chalenge #4
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const eatTooMuch = dog => dog.curFood > dog.recommendedFood * 1.1;
const eatTooLittle = dog => dog.curFood < dog.recommendedFood * 0.9;
//1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => {
  // dog.recommendedFood = dog.weight ** 0.75 * 28;
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(dog.weight, dog.curFood, dog.recommendedFood);
});

//2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// const sarahDog = dogs[dogs.findIndex(dog => dog.owners.includes('Sarah'))];
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahDog.curFood > eatTooMuch(sarahDog)) {
  console.log('Dog eats too much');
  // } else if (eatTooLittle(sarahDog)) {
} else if (eatTooLittle) {
  console.log('Dog eats too little');
} else {
  console.log('Dog eats well');
}
console.log(sarahDog);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  // .filter(dog => eatTooMuch(dog))
  .filter(eatTooMuch)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  // .filter(dog => eatTooLittle(dog))
  .filter(eatTooLittle)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// console.log(
//   Boolean(dogs.filter(dog => dog.curFood === dog.recommendedFood).length)
// );
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
const someDogsEatingOkay = dogs.some(
  // dog => eatTooLittle(dog) || eatTooMuch(dog)
  eatTooLittle || eatTooMuch
);
console.log(someDogsEatingOkay);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const dogsEatingOkay = dogs
  .slice()
  .filter(dog => !(eatTooMuch(dog) || eatTooLittle(dog)));
console.log(dogsEatingOkay);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
/*
 */
