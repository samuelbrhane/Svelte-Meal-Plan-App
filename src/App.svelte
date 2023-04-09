<script>
  import { Router, Route } from "svelte-navigator";
  import RouteController from "./components/Higher/RouteController.svelte";
  import { About, Recipe, Welcome, FAQ, RecipeDetail } from "./pages/public";
</script>

<Router>
  <!-- public pages -->
  <Route path="/" component={Welcome} />
  <Route path="/recipe" component={Recipe} />
  <Route path="/about" component={About} />
  <Route path="/faq" component={FAQ} />
  <Route path="/recipeDetail/:id" component={RecipeDetail} />

  <!-- Protected pages -->
  <Route component={RouteController} />
</Router>
