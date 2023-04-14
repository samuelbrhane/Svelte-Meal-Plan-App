import { writable } from "svelte/store";

// create meal store
const mealStore = writable({
  selectedMeal: "breakfast",
  breakfast: [],
  lunch: [],
  snack: [],
  dinner: [],
});

export default mealStore;
