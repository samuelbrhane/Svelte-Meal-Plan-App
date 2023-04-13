<script>
  import { onMount, onDestroy } from "svelte";
  import authStore from "../../stores/authStore";
  import { PrivateSidebar } from "../../components";
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

<main>
  <div class="flex">
    <div class="fixed top-0 left-0 bottom-0 bg-red-400 hidden lg:inline">
      <PrivateSidebar />
    </div>

    <div>
      <h1>Dashboard contents</h1>
    </div>
  </div>
</main>
