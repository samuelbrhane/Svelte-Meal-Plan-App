<script>
  import { onDestroy, onMount } from "svelte";
  import mealDateStore from "../../stores/mealDateStore";
  import { Title } from "..";
  let mealDateStoreUnsubscribe;
  let selectedDate;

  // subscribe to mealDateStore
  onMount(() => {
    mealDateStoreUnsubscribe = mealDateStore.subscribe((value) => {
      selectedDate = value.selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    });
  });
  onDestroy(() => {
    mealDateStoreUnsubscribe();
  });
</script>

<section class="flex flex-col justify-between">
  <Title title="Meal Planner" subtitle="Create a meal plan" />
  <div
    class="from-[#a234a4] mt-4 bg-gradient-to-l to-[#44a3a3] hover:scale-[1.03] hover:to-[#433a45] hover:from-[#550e07] text-white font-[Alkatra] py-1 px-6 max-w-[400px] text-lg rounded"
  >
    <p>Selected Date:</p>
    <p class="">
      {selectedDate}
    </p>
  </div>
</section>
