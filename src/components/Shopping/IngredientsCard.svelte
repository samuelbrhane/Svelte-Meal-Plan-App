<script>
  export let mealItem = {};
  console.log("mealItem: " + JSON.stringify(mealItem));
</script>

<div class="mb-6">
  <h1 class="text-xl font-bold font-[Roboto]">
    Meal: <span class="text-[#a93592]">{mealItem.recipe.label}</span>
  </h1>

  <h2 class="font-semibold font-[Merriweather] mb-2 text-lg text-[#44acc1]">
    Ingredient Lines
  </h2>
  <div class="grid grid-cols-3 xl:grid-cols-2 gap-2 font-[Alkatra] text-[13px]">
    {#each mealItem.recipe.ingredients as item}
      <div class="shadow rounded flex gap-4 hover:scale-[1.01]">
        <img src={item.image} alt="foodImage" class="w-20 h-full rounded" />
        <div class="flex flex-col justify-center">
          <p class="text-[#6541b3]">{item.food}</p>
          <p class="text-[#71983f]">Category: {item.foodCategory}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
