import axios from "axios";
import { get, writable } from "svelte/store";
import { baseBackendUrl, verifyTokenRoute } from "../utils/routes/authRoutes";
let queryParams = new URLSearchParams(window.location.search);
let code = queryParams.get("code");
let state = queryParams.get("state");

const googleAuthentication = async (state, code) => {
  if (state && code) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const data = new URLSearchParams();
    data.append("state", state);
    data.append("code", code);

    const { data: response } = await axios.post(
      `${baseBackendUrl}/auth/o/google-oauth2/`,
      data,
      config
    );
    console.log("response: " + JSON.stringify(response));
  } else {
    console.error("Missing state or code parameter");
  }

  //   const formBody = Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");

  //   const { data: response } = await axios.post(
  //     `${baseBackendUrl}/auth/o/google-oauth2/?`,
  //     new URLSearchParams(data),
  //     config
  //   );
  //   console.log("data: " + JSON.stringify(response));
  // }
};

if (code && state) {
  googleAuthentication(state, code);
}
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
