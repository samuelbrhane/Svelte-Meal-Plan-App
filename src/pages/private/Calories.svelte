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
  <div class="lg:ml-[250px]">
    <div class="px-4 md:px-8 py-4 lg:px-12">
      <h1>Shopping content</h1>
    </div>
  </div>
</PrivateLayout>
