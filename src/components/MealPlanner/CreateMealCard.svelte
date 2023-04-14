<script>
  export let mealItem = {};
</script>

<section class="mealBox flex gap-3">
  <img
    src={mealItem.recipe.image}
    alt="mealImage"
    class="w-20 h-full rounded"
  />
  <div class="flex-grow">
    <h1 class="text-[13px]">{mealItem.recipe.label}</h1>
    <div class="text-[11px] text-gray-400 grid grid-cols-2 mt-1">
      <p>
        Calories:
        {(mealItem?.recipe?.calories / 5).toFixed(2)} kcal
      </p>
      <p>
        Protein: {mealItem?.recipe?.digest[2].total.toFixed(2)} g
      </p>
      <p>
        Fats: {mealItem?.recipe?.digest[0].total.toFixed(2)} g
      </p>
      <p>
        Carbs: {mealItem?.recipe?.digest[1].total.toFixed(2)} g
      </p>
    </div>
  </div>
</section>
