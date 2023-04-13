<script>
  import { onDestroy, onMount } from "svelte";
  import mealDateStore from "../../stores/mealDateStore";
  import { MealCategories, MealList } from "..";

  let day;
  let mealDateStoreUnsubscribe;

  // subscribe to mealDateStore
  onMount(() => {
    mealDateStoreUnsubscribe = mealDateStore.subscribe((value) => {
      day = value.selectedDate;
    });
  });
  onDestroy(() => {
    mealDateStoreUnsubscribe();
  });
</script>

{#if day}
  <section>
    <h1 class="text-3xl font-[Roboto] mb-4">
      What Is The Plan For {day.split(",")[0]}?
    </h1>

    <!-- meal categories -->
    <MealCategories />

    <!-- meal lists -->

    <MealList />
  </section>
{/if}
