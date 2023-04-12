import { baseBackendUrl } from "../routes/authRoutes";
import axios from "axios";
let queryParams = new URLSearchParams(window.location.search);
import authStore from "../../stores/authStore";
import { navigate } from "svelte-navigator";

let code = queryParams.get("code");
let state = queryParams.get("state");

// get authentication_url
export const getGoogleAuthorization = async () => {
  let { data } = await axios.get(
    `${baseBackendUrl}/auth/o/google-oauth2/?redirect_uri=${baseBackendUrl}`
  );
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
      `${baseBackendUrl}/auth/o/google-oauth2/?${formBody}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // safe token in local storage
    localStorage.setItem("platePlanToken", JSON.stringify(data));

    // update authStore
    authStore.update((authData) => {
      authData.isAuthenticated = true;
      authData.token = data;
      authData.loading = false;
      return authData;
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
