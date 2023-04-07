<script>
  import { Router, Route } from "svelte-routing";
  import {
    Activation,
    Login,
    Register,
    ResetPassword,
    ResetPasswordConfirm,
  } from "./pages/auth";
  import { Welcome, About, FAQ, Recipe } from "./pages/public";
</script>

<Router>
  <Route path="/" component={Welcome} />
  <Route path="/recipe" component={Recipe} />
  <Route path="/about" component={About} />
  <Route path="/faq" component={FAQ} />
  <Route path="/activate/:uid/:token" component={Activation} />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/reset-password" component={ResetPassword} />
  <Route
    path="/password/reset/confirm/:uid/:token"
    component={ResetPasswordConfirm}
  />
</Router>
