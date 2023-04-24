import { writable } from "svelte/store";

// create auth store
const userMealStore = writable({
  userMeals: [],
  plannedCalories: null,
});

export default userMealStore;
