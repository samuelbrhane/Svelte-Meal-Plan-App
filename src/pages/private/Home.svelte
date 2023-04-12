<script>
  import { onMount, onDestroy } from "svelte";
  import authStore from "../../stores/authStore";
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

<main>Welcome to home page {userName} with email {userEmail}</main>
