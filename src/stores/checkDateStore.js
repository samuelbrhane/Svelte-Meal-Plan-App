import { writable } from "svelte/store";

// create auth store
const checkDateStore = writable({
  errorMessage: "",
});

export default checkDateStore;
