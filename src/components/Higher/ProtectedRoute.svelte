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
            value.pathname == "/reset-password" ||
            value.pathname == "/activate-message")
        ) {
          navigate("/dashboard");
        }
        // navigate to login page if user is not authenticated
        else if (
          !userData.isAuthenticated &&
          (value.pathname == "/dashboard" ||
            value.pathname == "/mealPlanner" ||
            value.pathname == "/shopping" ||
            value.pathname == "/calories" ||
            value.pathname == "/fats" ||
            value.pathname == "/carbs" ||
            value.pathname == "/protein" ||
            value.pathname == "/management")
        ) {
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
    ActivateMessage,
    Activation,
    Login,
    Register,
    ResetPassword,
    ResetPasswordConfirm,
  } from "../../pages/auth";

  // private pages
  import {
    Calories,
    Carbs,
    Dashboard,
    Fats,
    Management,
    MealPlanner,
    Protein,
    Shopping,
  } from "../../pages/private";
</script>

<div>
  <!-- private pages -->
  <Route path="/dashboard" component={Dashboard} />
  <Route path="/mealPlanner" component={MealPlanner} />
  <Route path="/shopping" component={Shopping} />
  <Route path="/management" component={Management} />
  <Route path="/calories" component={Calories} />
  <Route path="/fats" component={Fats} />
  <Route path="/protein" component={Protein} />
  <Route path="/carbs" component={Carbs} />

  <!-- authentication pages -->
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/activate/:uid/:token" component={Activation} />
  <Route path="/activate-message" component={ActivateMessage} />
  <Route path="/reset-password" component={ResetPassword} />
  <Route
    path="/password/reset/confirm/:uid/:token"
    component={ResetPasswordConfirm}
  />
</div>
