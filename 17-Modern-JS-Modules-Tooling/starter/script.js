/////////////////
//Importing module
/*
import {
  addToCart,
  totalPrice as price,
  totalQuantity as tq,
} from './shoppingCard.js';
console.log('Importing module');

addToCart('bread', 5);

console.log(price, tq);

*/
import * as ShoppingCart from './shoppingCard.js';
ShoppingCart.addToCart('bread', 5);

import add from './shoppingCard.js';
add('pizzas', 2);
add('pizzas', 2);
add('pizzas', 2);

console.log(ShoppingCart.cart);

// import { totalQuantity } from './shoppingCard';

////////////////////
//top level await
/*

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = await getLastPost();
console.log(lastPost);

// import * as SC from './shoppingCard.js';
*/

////////////////////
//Module pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product}(s) added to cart. (Shipping cost are ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product}(s) ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('Apple', 4);
ShoppingCart2.addToCart('Pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.orderStock);
*/

////////////////////
//CommonJS Export (Node.js)
/*
export.addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product}(s) added to cart. (Shipping cost are ${shippingCost})`
    );
  };

  //Import (Node.js)
  const {addToCart} = require('./shopping.js')
*/

/////////////////
//Command line
/**
 *
 *
 */

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);

state.user.loggedIn = false;

console.log(state.user.loggedIn);
console.log(stateClone.user.loggedIn);
console.log(stateCloneDeep);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #gretting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#gretting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(ShoppingCart.cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find.js';
// import 'core-js/stable/promise';

//Polifilling async functions
import 'regenerator-runtime/runtime';
