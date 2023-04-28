import {
  getAuthorizationUrlRoute,
  googleAuthenticationRoute,
  verifyTokenRoute,
} from "../routes/authRoutes";
import axios from "axios";
let queryParams = new URLSearchParams(window.location.search);
import authStore from "../../stores/authStore";
import { navigate } from "svelte-navigator";
import { toast } from "@zerodevx/svelte-toast";
import { errorClasses } from "../toast/toastCustom";

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

    authStore.update((authData) => {
      authData.loading = false;
      authData.isAuthenticated = true;
      authData.token = data;
      authData.userName =
        response.data.first_name + " " + response.data.last_name;
      authData.userEmail = response.data.email;
      authData.userId = response.data.id;
      return authData;
    });
    // navigate to private home page
    navigate("/dashboard");
  } catch (error) {
    // update authStore
    authStore.update((authData) => {
      return {
        ...authData,
        isAuthenticated: false,
        token: null,
        loading: false,
      };
    });
    // navigate to home page
    toast.push("Please register using email first.", { theme: errorClasses });
    navigate("/");
  }
};
