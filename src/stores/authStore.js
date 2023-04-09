import axios from "axios";
import { writable } from "svelte/store";
import { verifyTokenRoute } from "../utils/routes/authRoutes";

// create auth store
const authStore = writable({
  loading: true,
  isAuthenticated: false,
  token: null,
  userName: "",
  userEmail: "",
});

// get the token from local storage
let userToken = JSON.parse(localStorage.getItem("platePlanToken"));

//  verify token stored in local storage
let verifyToken = async () => {
  try {
    let { data } = await axios.get(verifyTokenRoute, {
      headers: { Authorization: `JWT ${userToken.access}` },
    });
    authStore.set({
      loading: false,
      isAuthenticated: true,
      token: userToken,
      userName: data.name,
      userEmail: data.email,
    });
  } catch (error) {
    authStore.set({
      loading: false,
      isAuthenticated: false,
      token: null,
      userName: "",
      userEmail: "",
    });
  }
};

// verify token on initial load
verifyToken();

export default authStore;
