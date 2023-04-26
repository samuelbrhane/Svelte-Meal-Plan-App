<script>
  import Icon from "@iconify/svelte";
  import { mealCategories } from "../utils/mealCategories";
  let currentCategory = 1;
  import { searchRecipe } from "../stores/recipeStore";
  import authStore from "../stores/authStore";

  // search meal on category
  const handleSearch = (category) => {
    currentCategory = category.id;
    let searchWord = "";
    if (category.title == "Recommended") {
      switch ($authStore.dietType) {
        case "Classic":
          searchWord = "food";
          break;
        case "Keto":
          searchWord = "salmon";
          break;
        case "Paleo":
          searchWord = "meat";
          break;
        case "Vegan":
          searchWord = "vegan";
          break;
        case "Vegetarian":
          searchWord = "vegetarian";
          break;
        case "Pescetarian":
          searchWord = "fish";
          break;

        default:
          searchWord = "food";
      }
    } else {
      searchWord = category.title;
    }
    searchRecipe(searchWord);
  };
</script>

<!-- meal categories -->
<div class="flex gap-4 justify-between items-center overflow-x-scroll py-3">
  {#each mealCategories as category}
    <button
      on:click={() => handleSearch(category)}
      class={`flex flex-col items-center  hover:scale-[1.03] shadow-md text-sm  text-black font-[Alkatra] py-6 min-w-[80px] gap-4 px-2 rounded-3xl ${
        currentCategory == category.id
          ? "bg-[#27aeec] text-white"
          : "bg-[#cce154]"
      }`}
    >
      <Icon
        icon={category.icon}
        class="text-4xl bg-[#0f666f] text-white  p-2 rounded"
      />
      <p class="text-[11px]">{category.title}</p>
    </button>
  {/each}
</div>
