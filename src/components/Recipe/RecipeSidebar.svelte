<script>
  import { foodCategories } from "../../utils/foodCategories";
  import { searchRecipe } from "../../stores/recipeStore";

  let categoryActive = 1;

  // Handle button category change
  let handleCategory = (id) => {
    categoryActive = id;
    searchRecipe(foodCategories[id - 1].name);
  };
</script>

<section
  class="xl:w-[240px] w-full shadow px-4 py-6 border-[0.6px] border-gray-400"
>
  <!-- Categories -->
  <h1 class="font-[Merriweather] font-semibold text-2xl mb-3">Categories</h1>
  <div class="flex xl:flex-col gap-6 overflow-x-scroll">
    {#each foodCategories as category (category.id)}
      <button
        on:click={() => handleCategory(category.id)}
        class={`categoryBtn ${
          categoryActive == category.id && "categoryActive"
        }`}>{category.name}</button
      >
    {/each}
  </div>
</section>
