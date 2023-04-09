<script>
  import { Route, navigate } from "svelte-navigator";
  import authStore from "../../stores/authStore";
  import { onMount } from "svelte";

  // authentication pages
  import {
    Activation,
    Login,
    Register,
    ResetPassword,
    ResetPasswordConfirm,
  } from "../../pages/auth";

  // private pages
  import { Home } from "../../pages/private";

  let userData = {
    loading: true,
    isAuthenticated: false,
    token: null,
    userName: "",
    userEmail: "",
  };

  //   subscribe to auth  store
  onMount(() => {
    const unsubscribe = authStore.subscribe((value) => {
      userData.loading = value.loading;
      userData.token = value.token;
      userData.isAuthenticated = value.isAuthenticated;
      userData.userName = value.userName;
      userData.userEmail = value.userEmail;
    });
    return unsubscribe;
  });
</script>

<!-- display loader until token is verified -->
{#if userData.loading}
  <div class="flex items-center justify-center">
    <img src="/loader.gif" alt="loaderImage" />
  </div>
{:else}
  <!-- private pages -->
  <Route
    path="/home"
    component={userData.isAuthenticated ? Home : navigate("/register")}
  />

  <!-- authentication pages -->
  <Route
    path="/login"
    component={!userData.isAuthenticated ? Login : navigate("/home")}
  />
  <Route
    path="/register"
    component={!userData.isAuthenticated ? Register : navigate("/home")}
  />
  <Route path="/activate/:uid/:token" component={Activation} />
  <Route
    path="/reset-password"
    component={!userData.isAuthenticated ? ResetPassword : navigate("/home")}
  />
  <Route
    path="/password/reset/confirm/:uid/:token"
    component={ResetPasswordConfirm}
  />
{/if}
