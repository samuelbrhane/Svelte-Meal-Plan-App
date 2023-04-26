<script>
  import { Route } from "svelte-navigator";
  import authStore from "../../stores/authStore";
  import {
    About,
    Recipe,
    RecipeDetail,
    Welcome,
    FAQ,
  } from "../../pages/public";
  import ProtectedRoute from "./ProtectedRoute.svelte";
  import Loader from "../Loader.svelte";
  import { onMount } from "svelte";

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
  <Loader />
{:else}
  <div class="overflow-x-hidden">
    <!-- public pages -->
    <Route path="/" component={Welcome} />
    <Route path="/recipe" component={Recipe} />
    <Route path="/about" component={About} />
    <Route path="/faq" component={FAQ} />
    <Route path="/recipeDetail/:id" component={RecipeDetail} />

    <!-- protected routes -->
    <Route component={ProtectedRoute} {userData} />
  </div>
{/if}
