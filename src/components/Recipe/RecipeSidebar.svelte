<script>
  import { foodCategories } from "../../utils/foodCategories";
  let searchWord = "";
  let categoryActive = 1;

  let handleRecipeSearch = async () => {};

  let handleCategory = (id) => {
    categoryActive = id;
  };
</script>

<section class="w-[240px] shadow px-4 py-6 border-[0.6px] border-gray-400">
  <form on:submit|preventDefault={handleRecipeSearch} class="mb-4">
    <input
      type="text"
      placeholder="Search..."
      bind:value={searchWord}
      class="input"
    />
  </form>

  <!-- Categories -->
  <h1 class="font-[Merriweather] font-semibold text-2xl mb-2">Categories</h1>
  <div class="flex flex-col gap-6">
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
