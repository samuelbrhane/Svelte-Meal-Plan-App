<script>
  import { onDestroy, onMount } from "svelte";
  import mealPlanStore from "../../stores/mealPlanStore";
  let mealPlanStoreUnsubscribe;
  let selectedDate;
  onMount(() => {
    mealPlanStoreUnsubscribe = mealPlanStore.subscribe((value) => {
      selectedDate = value.selectedDate;
    });
  });
  onDestroy(() => {
    mealPlanStoreUnsubscribe();
  });
</script>

<section class="">
  <h1 class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]">
    Plan Your Week
  </h1>
  <h1 class="font-bold text-3xl xl:text-4xl mb-5 font-[Roboto]">
    Meal Planner
  </h1>
  <div
    class="from-[#a234a4] bg-gradient-to-l to-[#44a3a3] hover:scale-[1.03] hover:to-[#433a45] hover:from-[#550e07] text-white font-[Alkatra] py-3 px-4 max-w-[400px] text-xl rounded"
  >
    <p>Selected Date:</p>
    <p class="mt-1">{selectedDate}</p>
  </div>
</section>
