<script>
  import { Route, navigate, useLocation } from "svelte-navigator";
  import { onMount, onDestroy } from "svelte";
  export let userData;

  let location = useLocation();

  let unsubscribe;

  onMount(() => {
    unsubscribe = location.subscribe((value) => {
      // handle protected routes
      const handleRouteChange = () => {
        // navigate to home page if user authenticated
        if (
          userData.isAuthenticated &&
          (value.pathname == "/login" ||
            value.pathname == "/register" ||
            value.pathname == "/reset-password")
        ) {
          navigate("/home");
        }
        // navigate to login page if user is not authenticated
        else if (!userData.isAuthenticated && value.pathname == "/home") {
          navigate("/login");
        }
      };

      handleRouteChange();
    });
  });

  onDestroy(() => {
    unsubscribe();
  });

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
</script>

<div>
  <!-- private pages -->
  <Route path="/home" component={Home} />

  <!-- authentication pages -->
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/activate/:uid/:token" component={Activation} />
  <Route path="/reset-password" component={ResetPassword} />
  <Route
    path="/password/reset/confirm/:uid/:token"
    component={ResetPasswordConfirm}
  />
</div>
