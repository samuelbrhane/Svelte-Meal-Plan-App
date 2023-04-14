<script>
  import { onMount, onDestroy } from "svelte";
  import authStore from "../../stores/authStore";
  import {
    CreatePlan,
    Meals,
    PlannerDate,
    PlannerIntro,
    PrivateLayout,
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
  <section class="lg:pl-[250px]">
    <div class="px-4 md:px-8 py-4 lg:px-12">
      <!-- intro and data picker -->
      <div
        class="flex gap-4 md:gap-8 lg:gap-10 xl:justify-between flex-col xl:flex-row"
      >
        <PlannerIntro />
        <PlannerDate />
      </div>

      <!-- create meal -->
      <div
        class="flex flex-col xl:flex-row mt-4 py-3 gap-4 md:gap-8 lg:gap-12 xl:gap-16 border-t-2 border-[#86116d] border-dashed"
      >
        <!-- meals -->
        <div class="xl:w-[65%]">
          <Meals />
        </div>

        <!-- create meal plan cart -->
        <div class="xl:w-[35%]">
          <CreatePlan />
        </div>
      </div>
    </div>
  </section>
</PrivateLayout>
