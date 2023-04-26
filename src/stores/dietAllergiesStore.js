import { writable } from "svelte/store";

// create auth store
const dietAllergiesStore = writable({
  dietType: "",
  allergies: "",
});

export default dietAllergiesStore;
