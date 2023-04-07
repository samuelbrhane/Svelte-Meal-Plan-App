import axios from "axios";

const recipeKeys = [
  {
    id: 1,
    appId: import.meta.env.VITE_RECIPE_APP_ID_1,
    appKey: import.meta.env.VITE_RECIPE_APP_KEY_1,
  },
  {
    id: 2,
    appId: import.meta.env.VITE_RECIPE_APP_ID_2,
    appKey: import.meta.env.VITE_RECIPE_APP_KEY_2,
  },
  {
    id: 3,
    appId: import.meta.env.VITE_RECIPE_APP_ID_3,
    appKey: import.meta.env.VITE_RECIPE_APP_KEY_3,
  },
];

const baseRoute = "https://api.edamam.com/api/recipes/v2";

// search recipe function

// // get single recipe data
// const getSingleRecipe = async (id) => {
//   const randomIndex = Math.floor(Math.random() * recipeKeys.length);
//   const { data } = await axios.get(
//     `${baseRoute}/${id}?type=public&app_id=${recipeKeys[randomIndex].appId}&app_key=${recipeKeys[randomIndex].appKey}`
//   );
//   console.log("data: " + JSON.stringify(data));
//   return data;
// };

export { recipeKeys, baseRoute };
