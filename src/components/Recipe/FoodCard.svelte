<script>
  export let item = {};
  let calories = item.recipe.calories / 10;
</script>

<div
  class="w-full flex flex-col md:flex-row items-center border-b-[0.6px] border-gray-400 font-[Alkatra]"
>
  <div class="flex items-center w-full">
    <!-- image and name -->
    <div class="w-[30%] border-gray-400 border-r-[0.5px] p-2">
      <img
        src={item.recipe.image || item.recipe.images.THUMBNAIL.REGULAR}
        alt="fooImage"
        class="w-full h-[82px] xl:h-[125px]"
      />
    </div>
    <p
      class="w-[70%] border-gray-400 border-r-[0.5px] h-[100px] xl:h-[140px] p-2"
    >
      {item.recipe.label}
    </p>
  </div>

  <!-- Food information -->
  <div
    class="grid grid-cols-4 w-full border-gray-400 border-t-[0.5px] md:border-none md:h-[100px] xl:h-[140px]"
  >
    <!-- calories -->
    <p class="border-gray-400 border-r-[0.5px] p-2 h-full">
      {calories.toFixed(2)} kcal
    </p>
    <!-- carbs -->
    <p class="border-gray-400 border-r-[0.5px] p-2 h-full">
      {item.recipe.digest[1].total.toFixed(2) || 147} g
    </p>

    <!-- fats -->
    <p class="border-gray-400 border-r-[0.5px] p-2 h-full">
      {item.recipe.digest[0].total.toFixed(2) || 312} g
    </p>

    <!-- protein -->
    <p class="border-gray-400 border-r-[0.5px] p-2 h-full">
      {item.recipe.digest[2].total.toFixed(2) || 376} g
    </p>
  </div>
</div>
