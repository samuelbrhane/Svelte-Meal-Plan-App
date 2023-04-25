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
  {
    id: 4,
    appId: import.meta.env.VITE_RECIPE_APP_ID_4,
    appKey: import.meta.env.VITE_RECIPE_APP_KEY_4,
  },
  {
    id: 5,
    appId: import.meta.env.VITE_RECIPE_APP_ID_5,
    appKey: import.meta.env.VITE_RECIPE_APP_KEY_5,
  },
];

const instructionKey = [
  {
    id: 1,
    appKey: import.meta.env.VITE_INSTRUCTION_APP_KEY_1,
  },
  {
    id: 2,
    appKey: import.meta.env.VITE_INSTRUCTION_APP_KEY_2,
  },
  {
    id: 3,
    appKey: import.meta.env.VITE_INSTRUCTION_APP_KEY_3,
  },
  {
    id: 4,
    appKey: import.meta.env.VITE_INSTRUCTION_APP_KEY_4,
  },
];

// recipe route
const baseRoute = "https://api.edamam.com/api/recipes/v2";

// instruction route
const InstructionUrl = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&q=`;

export { recipeKeys, baseRoute, InstructionUrl, instructionKey };
