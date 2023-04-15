<script>
  export let mealItem = {};
  import Icon from "@iconify/svelte";
  import mealStore from "../../stores/mealStore";

  // remove meal from the meal store
  const removeMeal = () => {
    switch ($mealStore.selectedMeal) {
      // remove meal from breakfast data
      case "breakfast":
        mealStore.update((mealData) => {
          let filterMealData = mealData.breakfast.filter(
            (meal) => meal.recipe.uri != mealItem.recipe.uri
          );
          return { ...mealData, breakfast: filterMealData };
        });
        break;

      // remove meal from lunch data
      case "lunch":
        mealStore.update((mealData) => {
          let filterMealData = mealData.lunch.filter(
            (meal) => meal.recipe.uri != mealItem.recipe.uri
          );
          return { ...mealData, lunch: filterMealData };
        });
        break;

      // remove meal from snack data
      case "snack":
        mealStore.update((mealData) => {
          let filterMealData = mealData.snack.filter(
            (meal) => meal.recipe.uri != mealItem.recipe.uri
          );
          return { ...mealData, snack: filterMealData };
        });
        break;

      // remove meal from dinner data
      case "dinner":
        mealStore.update((mealData) => {
          let filterMealData = mealData.dinner.filter(
            (meal) => meal.recipe.uri != mealItem.recipe.uri
          );
          return { ...mealData, dinner: filterMealData };
        });
        break;
      default:
        break;
    }
  };
</script>

<section class="mealBox flex gap-3">
  <img
    src={mealItem.recipe.image}
    alt="mealImage"
    class="w-20 h-full rounded"
  />
  <div class="flex-grow">
    <div class="flex justify-between items-center">
      <h1 class="text-[13px]">{mealItem.recipe.label}</h1>
      <button class="text-[#e14abe]" on:click={removeMeal}
        ><Icon icon="ic:round-delete" /></button
      >
    </div>

    <div class="text-[11px] text-gray-400 grid grid-cols-2 mt-1">
      <p>
        Calories:
        {(mealItem?.recipe?.calories / 4).toFixed(2)} kcal
      </p>
      <p>
        Protein: {(mealItem?.recipe?.digest[2].total / 2).toFixed(2)} g
      </p>
      <p>
        Fats: {(mealItem?.recipe?.digest[0].total / 2).toFixed(2)} g
      </p>
      <p>
        Carbs: {(mealItem?.recipe?.digest[1].total / 5).toFixed(2)} g
      </p>
    </div>
  </div>
</section>
