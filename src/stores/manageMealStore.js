import { writable } from "svelte/store";

// create meal store
const manageMealStore = writable({
  id: null,
  selectedMeal: "breakfast",
  selectedDate: null,
  breakfast: [],
  lunch: [],
  snack: [],
  dinner: [],
});

export default manageMealStore;
