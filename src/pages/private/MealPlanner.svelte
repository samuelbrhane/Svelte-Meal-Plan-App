<script>
  import { onMount, onDestroy } from "svelte";
  import authStore from "../../stores/authStore";
  import { PrivateLayout, PrivateSidebar } from "../../components";
  let userName;
  let userEmail;
  let unsubscribe;

  onMount(() => {
    unsubscribe = authStore.subscribe((value) => {
      userName = value.userName;
      userEmail = value.userEmail;
    });
  });
  onDestroy(() => {
    unsubscribe();
  });
</script>

<PrivateLayout>
  <div class="lg:ml-[220px]">
    <h1>Meal Planner content</h1>
  </div>
</PrivateLayout>
