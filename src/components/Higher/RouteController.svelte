<script>
  import { Route } from "svelte-navigator";
  import authStore from "../../stores/authStore";
  import { onMount } from "svelte";

  import {
    About,
    Recipe,
    RecipeDetail,
    Welcome,
    FAQ,
  } from "../../pages/public";
  import ProtectedRoute from "./ProtectedRoute.svelte";

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
  <!-- public pages -->
  <Route path="/" component={Welcome} />
  <Route path="/recipe" component={Recipe} />
  <Route path="/about" component={About} />
  <Route path="/faq" component={FAQ} />
  <Route path="/recipeDetail/:id" component={RecipeDetail} />

  <!-- protected routes -->
  <Route component={ProtectedRoute} {userData} />
{/if}
