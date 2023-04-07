<script>
  import { onMount } from "svelte";
  import { FoodCard } from "..";
  import { recipeStore, loadingStore } from "../../stores/recipeStore";

  let recipeData = [];
  let loading = true;

  //   subscribe to recipe data store
  onMount(() => {
    const unsubscribe = recipeStore.subscribe((value) => {
      recipeData = value;
    });
    return unsubscribe;
  });

  //   subscribe to loading store
  onMount(() => {
    const unsubscribe = loadingStore.subscribe((value) => {
      loading = value;
    });
    return unsubscribe;
  });
</script>

<section class="border-[0.6px] border-gray-400 w-full">
  <!-- Table content -->
  <div
    class="w-full flex flex-col md:flex-row items-center border-b-[0.6px] border-gray-400 font-[Merriweather] font-semibold italic"
  >
    <div class="flex items-center w-full">
      <p class="w-[30%] border-gray-400 border-r-[0.5px] p-2">Image</p>
      <p class="w-[70%] border-gray-400 border-r-[0.5px] p-2">Title</p>
    </div>

    <div
      class="grid grid-cols-4 w-full border-gray-400 border-t-[0.5px] md:border-none"
    >
      <p class="border-gray-400 border-r-[0.5px] p-2">Calories</p>
      <p class="border-gray-400 border-r-[0.5px] p-2">Carbs</p>
      <p class="border-gray-400 border-r-[0.5px] p-2">Fats</p>
      <p class="border-gray-400 border-r-[0.5px] p-2">Protein</p>
    </div>
  </div>

  <!-- Food Information Card -->
  {#if loading}
    <!-- return loading when fetching data -->
    <p>loading</p>
  {:else}
    {#each recipeData as item}
      <FoodCard {item} />
    {/each}
    <!-- pagination -->
    <div>
      <div>
        <p>Result 1 - 5 out of 20</p>
        <p>page 1 of 4</p>
      </div>
    </div>
  {/if}
</section>
