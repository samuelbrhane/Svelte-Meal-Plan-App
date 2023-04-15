<script>
  import { onDestroy, onMount } from "svelte";
  import mealDateStore from "../../stores/mealDateStore";
  import { Loader, MealCategories, MealCard } from "..";
  import { recipeStore, updateStore } from "../../stores/recipeStore";

  let searchWord = "";
  let day;
  let mealDateStoreUnsubscribe;
  let recipeStoreUnsubscribe;
  let mealsData;
  let loading;

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
    <h1 class="text-3xl font-[Roboto] mb-4">
      What Is The Plan For {day.split(",")[0]}?
    </h1>

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
        {#each mealsData.slice(6) as item}
          <MealCard {item} />
        {/each}
      </div>
    {/if}
  </section>
{/if}
