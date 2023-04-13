<script>
  import Icon from "@iconify/svelte";
  import { mealCategories } from "../../utils/mealCategories";
  let currentCategory = 1;
  import { updateStore } from "../../stores/recipeStore";

  // search meal on category
  const handleSearch = (category) => {
    currentCategory = category.id;
    updateStore(category.title);
  };
</script>

<!-- meal categories -->
<div class="flex gap-4 justify-between items-center overflow-x-scroll py-3">
  {#each mealCategories as category}
    <button
      on:click={() => handleSearch(category)}
      class={`flex flex-col items-center bg-[#cce154] hover:scale-[1.03] shadow-md text-sm hover:bg-[#f993f7] text-black font-[Alkatra] py-6 min-w-[80px] gap-4 px-2 rounded-3xl ${
        currentCategory == category.id && "bg-[#f993f7] text-white"
      }`}
    >
      <Icon
        icon={category.icon}
        class="text-4xl bg-[#0f666f] text-white  p-2 rounded"
      />
      <p>{category.title}</p>
    </button>
  {/each}
</div>
