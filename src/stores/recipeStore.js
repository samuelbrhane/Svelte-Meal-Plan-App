import { writable } from "svelte/store";
import { baseRoute, recipeKeys } from "../utils/routes/recipeRoute";

const recipeStore = writable({ data: [], loading: true });

//   Search Recipes
let searchRecipe = async (searchWord) => {
  recipeStore.set({ data: [], loading: true });
  searchWord = searchWord === "All" ? "food" : searchWord;
  let currentKey;
  if (
    searchWord === "food" ||
    searchWord === "Breakfasts" ||
    searchWord === "Desserts" ||
    searchWord === "Drinks" ||
    searchWord === "Salads" ||
    searchWord === "Soups"
  ) {
    currentKey = 1;
  } else if (
    searchWord === "Appetizers" ||
    searchWord === "Lunch" ||
    searchWord === "Dinners" ||
    searchWord === "Meats" ||
    searchWord === "Pasta" ||
    searchWord === "Protein shakes"
  ) {
    currentKey = 2;
  } else {
    currentKey = 0;
  }

  let response = await fetch(
    `${baseRoute}?type=public&q=${searchWord}&app_id=${recipeKeys[currentKey].appId}&app_key=${recipeKeys[currentKey].appKey}`
  );
  let data = await response.json();
  recipeStore.set({ data: data.hits, loading: false });
};

// Set initial data on page load
searchRecipe("All");

// Export a function to update the store when the user clicks a button
const updateStore = (searchWord) => {
  searchRecipe(searchWord);
};

export { updateStore, recipeStore };
