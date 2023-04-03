<script>
  import { Router, Route } from "svelte-routing";
  import { Welcome, About, FAQ, Recipe } from "./pages/main";
</script>

<Router>
  <Route path="/" component={Welcome} />
  <Route path="/recipe" component={Recipe} />
  <Route path="/about" component={About} />
  <Route path="/faq" component={FAQ} />
</Router>
