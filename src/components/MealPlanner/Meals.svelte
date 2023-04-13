<script>
  import { onDestroy, onMount } from "svelte";
  import mealPlanStore from "../../stores/mealPlanStore";
  import { MealCategories } from "..";

  let day;
  let mealPlanStoreUnsubscribe;

  onMount(() => {
    mealPlanStoreUnsubscribe = mealPlanStore.subscribe((value) => {
      day = value.selectedDate;
    });
  });
  onDestroy(() => {
    mealPlanStoreUnsubscribe();
  });
</script>

{#if day}
  <section>
    <h1 class="text-3xl font-[Roboto] mb-4">
      What Is The Plan For {day.split(",")[0]}?
    </h1>

    <!-- meal categories -->
    <MealCategories />
  </section>
{/if}
