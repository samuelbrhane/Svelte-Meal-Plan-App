import { writable } from "svelte/store";
import { baseRoute, recipeKeys } from "../utils/routes/recipeRoute";

const recipeStore = writable({ data: [], loading: true });

//   Search Recipes
let searchRecipe = async (searchWord) => {
  recipeStore.set({ data: [], loading: true });
  const randomIndex = Math.floor(Math.random() * recipeKeys.length);

  let response = await fetch(
    `${baseRoute}?type=public&q=${searchWord}&app_id=${recipeKeys[randomIndex].appId}&app_key=${recipeKeys[randomIndex].appKey}`
  );
  let data = await response.json();
  recipeStore.set({ data: data.hits, loading: false });
};

export { recipeStore, searchRecipe };
