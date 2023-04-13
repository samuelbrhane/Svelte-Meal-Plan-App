<script>
  import Icon from "@iconify/svelte";
  import { mealCategories } from "../../utils/mealCategories";
</script>

<!-- meal categories -->
<div class="flex gap-4 justify-between items-center">
  {#each mealCategories as category}
    <button
      class="flex flex-col items-center bg-[#cce154] hover:scale-[1.03] shadow-md text-sm hover:bg-[#aa34a8] text-black font-[Alkatra] py-6 w-[80px] gap-4 px-2 rounded-3xl"
    >
      <Icon
        icon={category.icon}
        class="text-4xl bg-[#0f666f] text-white  p-2 rounded"
      />
      <p>{category.title}</p>
    </button>
  {/each}
</div>
