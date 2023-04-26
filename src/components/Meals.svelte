<script>
  import { onDestroy, onMount } from "svelte";
  import { Loader, MealCategories, MealCard, PaginationBtn } from "./";
  import mealDateStore from "../stores/mealDateStore";
  import { recipeStore, searchRecipe } from "../stores/recipeStore";

  export let page;
  let searchWord = "";
  let day;
  let mealDateStoreUnsubscribe;
  let recipeStoreUnsubscribe;
  let mealsData;
  let loading;
  let nutrientName = "Calories";

  let currentPage = 1;
  let dataPerPage = 5;
  $: indexOfLastPage = currentPage * dataPerPage;
  $: indexOfFirstPage = indexOfLastPage - dataPerPage;

  // sort meal based on nutrient name
  $: {
    // check meals data
    if (mealsData) {
      switch (nutrientName) {
        // calories
        case "Calories":
          mealsData = [
            ...mealsData.sort((a, b) => a.recipe.calories - b.recipe.calories),
          ];
          break;

        // protein
        case "Protein":
          mealsData = [
            ...mealsData.sort(
              (a, b) => a.recipe.digest[2].total - b.recipe.digest[2].total
            ),
          ];
          break;

        // fats
        case "Fats":
          mealsData = [
            ...mealsData.sort(
              (a, b) => a.recipe.digest[0].total - b.recipe.digest[0].total
            ),
          ];
          break;

        // carbs
        case "Carbs":
          mealsData = [
            ...mealsData.sort(
              (a, b) => a.recipe.digest[1].total - b.recipe.digest[1].total
            ),
          ];
          break;

        default:
          break;
      }
    }
  }

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
    searchRecipe(searchWord);
    searchWord = "";
  };

  function getKey(index) {
    return currentPage + "_" + index;
  }
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
        <label for="nutrients">Sort by:</label>

        <select id="nutrients" bind:value={nutrientName}>
          <option value="Calories" class="bg-[#a2aa45]">Calories</option>
          <option value="Protein" class="bg-[#a2aa45]">Protein</option>
          <option value="Fats" class="bg-[#a2aa45]">Fats</option>
          <option value="Carbs" class="bg-[#a2aa45]">Carbs</option>
        </select>
      </div>
    </div>

    {#if loading}
      <Loader />
    {:else}
      <div class="flex flex-col gap-3 pt-1">
        {#each mealsData.slice(indexOfFirstPage, indexOfLastPage) as item, index (item.recipe.uri)}
          <MealCard {item} {page} key={getKey(index)} />
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
