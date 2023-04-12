import {
  getAuthorizationUrlRoute,
  googleAuthenticationRoute,
  verifyTokenRoute,
} from "../routes/authRoutes";
import axios from "axios";
let queryParams = new URLSearchParams(window.location.search);
import authStore from "../../stores/authStore";
import { navigate } from "svelte-navigator";

let code = queryParams.get("code");
let state = queryParams.get("state");

// get authentication_url
export const getGoogleAuthorization = async () => {
  let { data } = await axios.get(getAuthorizationUrlRoute);
  window.location.replace(data.authorization_url);
};

// authenticated user with google auth
export const googleAuthentication = async (state, code) => {
  const details = {
    state: state,
    code: code,
  };

  // create formBody that contains state and code
  const formBody = Object.keys(details)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
    )
    .join("&");

  try {
    const { data } = await axios.post(
      `${googleAuthenticationRoute}/?${formBody}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // safe token in local storage
    localStorage.setItem("platePlanToken", JSON.stringify(data));

    let response = await axios.get(verifyTokenRoute, {
      headers: { Authorization: `JWT ${data.access}` },
    });
    authStore.set({
      loading: false,
      isAuthenticated: true,
      token: data,
      userName: response.data.first_name + " " + response.data.last_name,
      userEmail: response.data.email,
    });

    // navigate to private home page
    navigate("/home");
  } catch (error) {
    // update authStore
    authStore.update((authData) => {
      authData.isAuthenticated = false;
      authData.token = null;
      authData.loading = false;
      return authData;
    });
  }
};
