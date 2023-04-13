<script>
  import { onMount, onDestroy } from "svelte";
  import authStore from "../../stores/authStore";
  import {
    PlannerDate,
    PlannerIntro,
    PrivateLayout,
    PrivateSidebar,
  } from "../../components";
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
  <div class="lg:ml-[220px] py-8 px-4 md:px-8 w-full">
    <!-- intro and data picker -->
    <div
      class="flex gap-4 md:gap-8 lg:gap-10 xl:gap-20 2xl:gap-30 flex-col xl:flex-row"
    >
      <PlannerIntro />
      <PlannerDate />
    </div>
  </div>
</PrivateLayout>
