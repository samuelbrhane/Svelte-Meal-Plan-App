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
  <section class="lg:ml-[250px]">
    <div class="px-4 md:px-8 lg:px-12">
      <h1>Dashboard content</h1>
    </div>
  </section>
</PrivateLayout>
