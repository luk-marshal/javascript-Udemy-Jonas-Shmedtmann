import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config';
// import { getJSON, sendJSON } from './helpers';
import { AJAX, deleteJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceURL: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    // const data = await getJSON(`${API_URL}${id}?&key=${KEY}`);
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.warn(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    // const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.warn(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; //0
  const end = page * state.search.resultsPerPage; //10 (slice nie uwzględnia elementu końcowego)

  return state.search.results.slice(start, end);
};

export const updateServings = function (newSerwings) {
  const ratio = newSerwings / state.recipe.servings;
  state.recipe.ingredients.forEach(
    ing => (ing.quantity = ing.quantity * ratio)
  );
  state.recipe.servings = newSerwings;
  console.log(state.recipe.ingredients);
  console.log(state.recipe);
};

export const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const loadBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const toggleBookmark = function (recipe) {
  //Mark current as bookmark
  if (recipe.id === state.recipe.id)
    state.recipe.bookmarked = !state.recipe.bookmarked;

  //Add or delete bookmark
  if (state.recipe.bookmarked) state.bookmarks.push(recipe);
  else state.bookmarks.splice(state.bookmarks.indexOf(recipe));
  // else
  //   state.bookmarks.splice(
  //     state.bookmarks.findIndex(el => el.id === recipe.id)
  //   );

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format. Please use the correct format :)'
          );
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    console.log(recipe);
    // const data = await sendJSON(`${API_URL}?&key=${KEY}`, recipe);
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    toggleBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const deleteRecipe = async function (id) {
  try {
    const response = await deleteJSON(`${API_URL}${id}?key=${KEY}`);
    console.warn(`Deleted recipe id: ${id}`, response);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.warn(`${err} 💥💥💥💥`);
    throw err;
  }
};
