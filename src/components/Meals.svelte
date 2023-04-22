<script>
  import { onDestroy, onMount } from "svelte";
  import { Loader, MealCategories, MealCard, PaginationBtn } from "./";
  import mealDateStore from "../stores/mealDateStore";
  import { recipeStore, updateStore } from "../stores/recipeStore";

  export let page;
  let searchWord = "";
  let day;
  let mealDateStoreUnsubscribe;
  let recipeStoreUnsubscribe;
  let mealsData;
  let loading;

  let currentPage = 1;
  let dataPerPage = 5;
  $: indexOfLastPage = currentPage * dataPerPage;
  $: indexOfFirstPage = indexOfLastPage - dataPerPage;

  // subscribe to mealDateStore
  onMount(() => {
    mealDateStoreUnsubscribe = mealDateStore.subscribe((value) => {
      day = value.selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    });
    recipeStoreUnsubscribe = recipeStore.subscribe((value) => {
      mealsData = value.data;
      loading = value.loading;
    });
  });
  onDestroy(() => {
    mealDateStoreUnsubscribe();
    recipeStoreUnsubscribe();
  });

  // handle meal search
  const handleSearch = () => {
    updateStore(searchWord);
    searchWord = "";
  };
</script>

{#if day}
  <section>
    {#if page == "MealPlanner"}
      <h1 class="text-3xl font-[Roboto] mb-4">
        What Is The Plan For {day.split(",")[0]}?
      </h1>
    {/if}

    <!-- meal categories -->
    <MealCategories />

    <!-- meal lists -->
    {#if loading}
      <Loader />
    {:else}
      <!-- search and filter meal -->
      <div
        class="flex justify-between items-center pb-1 border-b-2 border-[#edda6cef] font-[Alkatra]"
      >
        <form on:submit|preventDefault={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            bind:value={searchWord}
            class="input"
          />
        </form>

        <div>
          <label for="nutrients">Filter by:</label>

          <select id="nutrients">
            <option value="Calories" class="bg-[#a2aa45]">Calories</option>
            <option value="Protein" class="bg-[#a2aa45]">protein</option>
            <option value="Fats" class="bg-[#a2aa45]">Fats</option>
            <option value="Carbs" class="bg-[#a2aa45]">Carbs</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col gap-3 pt-1">
        {#each mealsData.slice(indexOfFirstPage, indexOfLastPage) as item}
          <MealCard {item} />
        {/each}
      </div>

      <!-- pagination -->
      <div class="border-t-2 border-[#b8d02e] pb-1 mt-2">
        <div class="flex items-center justify-between px-4 pt-2 font-[Alkatra]">
          <p>
            Result {indexOfFirstPage + 1} - {indexOfLastPage} out of {mealsData.length}
          </p>
          <p>
            Page {Math.ceil(indexOfLastPage / dataPerPage)} of {Math.ceil(
              mealsData.length / dataPerPage
            )}
          </p>
        </div>

        <!-- pagination btn -->
        <PaginationBtn
          {dataPerPage}
          recipeData={mealsData}
          {currentPage}
          on:changePage={(e) => (currentPage = e.detail)}
        />
      </div>
    {/if}
  </section>
{/if}
