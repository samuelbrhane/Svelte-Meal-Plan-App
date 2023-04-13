<script>
  import { onDestroy, onMount } from "svelte";
  import mealPlanStore from "../../stores/mealPlanStore";
  import Icon from "@iconify/svelte";
  let day;
  let mealPlanStoreUnsubscribe;
  import { mealCategories } from "../../utils/mealCategories";

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
    <div class="flex gap-4 justify-between items-center">
      {#each mealCategories as category}
        <button
          class="flex flex-col items-center bg-[#a39034] hover:scale-[1.03] hover:bg-[#aa34a8] text-white font-[Alkatra] py-6 w-[80px] gap-4 px-2 rounded-3xl"
        >
          <Icon
            icon={category.icon}
            class="text-4xl bg-[#0f666f] text-white  p-2 rounded"
          />
          <p>{category.title}</p>
        </button>
      {/each}
    </div>
  </section>
{/if}
