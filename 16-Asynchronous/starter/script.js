'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const countryDataURL = 'https://restcountries.eu/rest/v2/name';
// const countryDataURL = 'https://restcountries.com/v3.1/name';
const countryDataURL = 'https://countries-api-836d.onrender.com/countries';
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1_000_000
        ).toFixed(1)} M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeEnd', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  //   const html = ``;
  console.error(`${msg} 💣💣💣`);
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `${countryDataURL}/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    renderCountry(data[0]);
  });
};
// getCountryData('poland');

const getCountryAndNeighbours = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `${countryDataURL}/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    //Render country 1
    renderCountry(data[0]);

    //Get neighbours
    const [...neighbours] = data.borders;
    console.log(neighbours);
    if (!neighbours) return;

    neighbours.forEach(neighbour => {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `${countryDataURL}/alpha/${neighbour}`);
      request2.send();
      request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        //Render country 2
        renderCountry(data2, 'neighbour');
      });
    });
  });
};
// getCountryAndNeighbours('poland');

const getCountryData2 = function (country) {
  fetch(`${countryDataURL}/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(err =>
      renderError(`This is catch error: ${err.message}. Try again!`)
    )
    .finally(() => (countriesContainer.style.opacity = 1));
};
// getCountryData2('poland');

const getCountryAndNeighbour2 = function (country) {
  fetch(`${countryDataURL}/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbours = data[0].borders;
      if (!neighbours) return;

      return fetch(`${countryDataURL}/alpha/${neighbours[0]}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err =>
      renderError(`This is catch error: ${err.message}. Try again!`)
    )
    .finally(() => (countriesContainer.style.opacity = 1));
};
// getCountryAndNeighbour2('poland');

const getCountryAndNeighbours2 = function (country) {
  getJSON(`${countryDataURL}/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const [...neighbours] = data[0].borders;
      console.log(neighbours);
      //   const [...neighbours] = ['asdasda'];
      if (!neighbours[0]) throw new Error('No neighbour found!');
      neighbours.forEach((neighbour, i) => {
        return fetch(`${countryDataURL}/alpha/${neighbour}`)
          .then(response => response.json())
          .then(data => renderCountry(data, 'neighbour'))
          .catch(err =>
            renderError(`This is catch error: ${err.message}. Try again!`)
          );
      });
    })
    .catch(err =>
      renderError(`This is catch error: ${err.message}. Try again!`)
    )
    .finally(() => (countriesContainer.style.opacity = 1));
};

// btn.addEventListener('click', function () {
//   navigator.geolocation.getCurrentPosition(response => console.log(response));
//   getCountryAndNeighbours2('India');
// });

// getCountryAndNeighbours2('australia');

// Coding Challenge #1
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  //   const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  // const url = `https://geocode.xy/${lat},${lng}?geoit=json`;
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en
  `;
  console.log(url);
  fetch(url)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      getCountryAndNeighbours2(data.address.country);
    })
    .catch(err => console.log(err));
};
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// navigator.geolocation.getCurrentPosition(e => {
//   whereAmI(e.coords.latitude, e.coords.longitude);
//   // console.log(e.coords.latitude, e.coords.longitude);
// });

// fetch(
//   'https://api.geoapify.com/v1/geocode/reverse?lat=50.06605056356466&lon=19.95450933684208&format=json&apiKey=YOUR_API_KEY'
// )
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
*/
/*
console.log('Test start');
setTimeout(() => {
  console.log('0 sec timer');
}, 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1_000_000_000; i++) {}
  console.log(res);
});
console.log('Test end');
*/
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN! 🙌');
    } else {
      reject(new Error('You lost your money 😥'));
    }
  }, 2000);
});

lotteryPromise
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

/*
const waitArr = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

wait(2).then(() => {
  console.log('Waited 2 sec');
  return new wait(1).then(() => {
    console.log('Waited 1 sec more');
  });
});

// setTimeout(() => {
//   console.log('1 sec pased');
//   setTimeout(() => {
//     console.log('2 sec pased');
//     setTimeout(() => {
//       console.log('3 sec pased');
//       setTimeout(() => {
//         console.log('4 sec pased');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

wait(1)
.then(() => {
    console.log('1 sec pased');
    return wait(1);
  })
  .then(() => {
    console.log('2 sec pased');
    return wait(1);
  })
  .then(() => {
    console.log('3 sec pased');
    return wait(1);
  })
  .then(() => {
    console.log('4 sec pased');
  });
*/

/*
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
console.log('Getting position');

const whereAmI2 = function (lat = 0, lng = 0) {
  //   const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  // const url = `https://geocode.xy/${lat},${lng}?geoit=json`;

  getPosition()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en
    `;
      console.log(url);
      return fetch(url);
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      getCountryAndNeighbours2(data.address.country);
    })
    .catch(err => console.log(err));
};

btn.addEventListener('click', whereAmI2);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  let nr = imgPath.slice(-5, -4);
  // console.log(nr);
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', err => reject(new Error('Image not found')));
  })
    .then(img => {
      imgContainer.appendChild(img);
      return wait(2).then(() => img);
    })
    .then(img => {
      img.style.display = 'none';
      return img;
    })
    .then(img => {
      const newImgPath = imgPath.replace(nr, ++nr);
      img.src = newImgPath;
      img.addEventListener('error', err => new Error('Image not found 2'));

      return img;
    })
    .then(img => {
      img.style.display = 'flex';
      return wait(2).then(() => img);
    })
    .then(img => {
      img.style.display = 'none';
      return img;
    })
    .catch(err => console.error(err));
};

// createImage('./img/img-1.jpg');
createImage('./img/img-2.jpg');
// createImage('./img/img-4.jpg');

const createImage2 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', err => reject(new Error('Image not found')));
  });
};

createImage2('/img/img-1.jpg')
  .then(img => {
    return wait(2).then(() => img);
  })
  .then(img => {
    img.style.display = 'none';
    return createImage2('/img/img-2.jpg');
  })
  .then(img => {
    img.style.display = 'flex';
    return wait(2).then(() => img);
  })
  .then(img => {
    img.style.display = 'none';
    return img;
  })
  .catch(err => console.error(err));
*/

/////////////////////

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    // console.log(pos.coords);
    const { latitude: lat, longitude: lng } = pos.coords;
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en
      `;
    const resGeo = await fetch(url);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `${countryDataURL}/name/${dataGeo.address.country}`
    );
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.address.city}, ${dataGeo.address.country}`;
  } catch (err) {
    console.error(err.message);

    //
    throw err;
  }
};

// whereAmI();
// console.log('FIRST');

// try {
//   let y = 1;
//   const x = 0;
//   x = 3;
// } catch (err) {
//   // alert(err.message);
//   console.log(err.message);
// }

// console.log('1. Will get location');
// // whereAmI().then(x => console.log('2. Getting location', x));cl

// console.log(whereAmI().then(x => console.log(x)));
// console.log('3. Finished getting location');

/*
console.log('1: Will get location');
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    console.log('1: Will get location');
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.warn(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
*/
/*
const get3countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`${countryDataURL}/name/${c1}`);
    // const [data2] = await getJSON(`${countryDataURL}/name/${c2}`);
    // const [data3] = await getJSON(`${countryDataURL}/name/${c3}`);

    const data = await Promise.all([
      getJSON(`${countryDataURL}/name/${c1}`),
      getJSON(`${countryDataURL}/name/${c2}`),
      getJSON(`${countryDataURL}/name/${c3}`),
    ]);
    // console.log(data1.capital, data2.capital, data3.capital);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3countries('portugal', 'canada', 'tanzania');
*/

/*
(async function () {
  const res = await Promise.race([
    getJSON(`${countryDataURL}/name/italy`),
    getJSON(`${countryDataURL}/name/egypt`),
    getJSON(`${countryDataURL}/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`${countryDataURL}/name/tanzania`), timeout(0.4)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
  timeout(0.1),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
  timeout(0.1),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
  timeout(0.1),
]).then(res => console.log(res));
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector('.images');

const createImage2 = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', err =>
      reject(new Error(`Image ${imgPath} not found`))
    );
  });
};

const loadNPause = async function (imgPath1, imgPath2) {
  try {
    const img = await createImage2(imgPath1);
    await wait(2);
    img.style.display = 'none';
    const img2 = await createImage2(imgPath2);
    // img2.style.display = 'flex';
    await wait(2);
    img2.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};

// loadNPause('img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg');

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async img => await createImage2(img));
  console.log(imgs);

  const imgsEl = await Promise.all(imgs);
  console.log(imgsEl);
  imgsEl.forEach(img => img.classList.add('parallel'));
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
