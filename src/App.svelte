<script>
  import { Router, Route } from "svelte-navigator";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import RouteController from "./components/Higher/RouteController.svelte";

  // options for the toast container
  const options = {
    duration: 5000,
  };
</script>

<Router>
  <!-- svelte toast container -->
  <SvelteToast {options} />

  <!-- route controller pages -->
  <Route component={RouteController} />
</Router>
