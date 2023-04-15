import { writable } from "svelte/store";

// create auth store
const plannerCalorieStore = writable({
  plannerCalories: null,
  errorMessage: "",
});

export default plannerCalorieStore;
