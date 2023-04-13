import { writable } from "svelte/store";
let date = new Date(); // Replace this with your own date variable

let formattedDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

// create auth store
const mealDateStore = writable({
  selectedDate: formattedDate,
});

export default mealDateStore;
