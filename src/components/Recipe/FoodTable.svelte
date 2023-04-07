<script>
  import { onMount } from "svelte";
  import { FoodCard, PaginationBtn } from "..";
  import { recipeStore } from "../../stores/recipeStore";
  let recipeData = [];
  let loading = true;
  let currentPage = 1;
  let dataPerPage = 5;
  $: indexOfLastPage = currentPage * dataPerPage;
  $: indexOfFirstPage = indexOfLastPage - dataPerPage;

  //   subscribe to recipe data store
  onMount(() => {
    const unsubscribe = recipeStore.subscribe((value) => {
      recipeData = value.data;
      loading = value.loading;
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
      <p class="w-[70%] border-gray-400 border-r-[0.5px] p-2">Name</p>
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
    {#each recipeData.slice(indexOfFirstPage, indexOfLastPage) as item}
      <FoodCard {item} />
    {/each}

    <!-- pagination -->
    <div>
      <div class="flex items-center justify-between px-4 pt-2 font-[Alkatra]">
        <p>
          Result {indexOfFirstPage + 1} - {indexOfLastPage} out of {recipeData.length}
        </p>
        <p>
          Page {Math.ceil(indexOfLastPage / dataPerPage)} of {Math.ceil(
            recipeData.length / dataPerPage
          )}
        </p>
      </div>

      <!-- pagination btn -->
      <PaginationBtn
        {dataPerPage}
        {recipeData}
        {currentPage}
        on:changePage={(e) => (currentPage = e.detail)}
      />
    </div>
  {/if}
</section>
