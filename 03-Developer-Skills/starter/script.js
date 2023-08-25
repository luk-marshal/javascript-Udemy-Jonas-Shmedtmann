// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) Fix BUG
    value: Number(prompt('Degrees celsius:')),
  };
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  //   console.log(measurement);
  //B) Find BUG
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify the BUG
console.log(measureKelvin());
*/
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let outString = "... ";
  for (let i = 0; i < arr.length; i++) {
    outString += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  // console.log(outString);
  return outString;
};

console.log(printForecast(temps1));
console.log(printForecast(temps2));
