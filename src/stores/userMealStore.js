import { writable } from "svelte/store";

// create auth store
const userMealStore = writable({
  userMeals: [],
});

export default userMealStore;
