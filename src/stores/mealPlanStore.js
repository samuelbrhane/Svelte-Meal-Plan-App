import axios from "axios";
import { writable } from "svelte/store";
let date = new Date(); // Replace this with your own date variable

let formattedDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

// create auth store
const mealPlanStore = writable({
  selectedDate: formattedDate,
});

// get the token from local storage
// let userToken = JSON.parse(localStorage.getItem("platePlanToken"));

export default mealPlanStore;
