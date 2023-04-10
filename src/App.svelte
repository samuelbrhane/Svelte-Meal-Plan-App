<script>
  import { Router, Route } from "svelte-navigator";
  import RouteController from "./components/Higher/RouteController.svelte";
</script>

<Router>
  <!-- Protected pages -->
  <Route component={RouteController} />
</Router>
