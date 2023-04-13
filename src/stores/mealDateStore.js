import { writable } from "svelte/store";
let date = new Date(); // Replace this with your own date variable

// create auth store
const mealDateStore = writable({
  selectedDate: date,
});

export default mealDateStore;
