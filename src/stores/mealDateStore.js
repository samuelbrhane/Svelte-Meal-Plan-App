import { writable } from "svelte/store";
let date = new Date();

// create auth store
const mealDateStore = writable({
  selectedDate: date,
});

export default mealDateStore;
