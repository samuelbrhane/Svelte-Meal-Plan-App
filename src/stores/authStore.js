import axios from "axios";
import { writable } from "svelte/store";
import { verifyTokenRoute } from "../utils/routes/authRoutes";
import { googleAuthentication } from "../utils/auth2/googleAuth";
let queryParams = new URLSearchParams(window.location.search);

let code = queryParams.get("code");
let state = queryParams.get("state");

// create auth store
const authStore = writable({
  loading: true,
  isAuthenticated: false,
  token: null,
  userName: "",
  userEmail: "",
  userId: "",
  allergies: [],
  dietType: "",
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
      userName: data.first_name + " " + data.last_name,
      userEmail: data.email,
      userId: data.id,
      allergies: data.allergies,
      dietType: data.meal_type,
    });
  } catch (error) {
    authStore.set({
      loading: false,
      isAuthenticated: false,
      token: null,
      userName: "",
      userEmail: "",
      userId: "",
      allergies: [],
      dietType: "",
    });
  }
};

// authenticate user using google if url contains code and state
if (code && state) {
  googleAuthentication(state, code);
}

// verify token on initial load
verifyToken();

export default authStore;
