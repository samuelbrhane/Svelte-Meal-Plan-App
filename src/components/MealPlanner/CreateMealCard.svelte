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
            (meal) => meal.uri != mealItem.uri
          );
          return { ...mealData, breakfast: filterMealData };
        });
        break;

      // remove meal from lunch data
      case "lunch":
        mealStore.update((mealData) => {
          let filterMealData = mealData.lunch.filter(
            (meal) => meal.uri != mealItem.uri
          );
          return { ...mealData, lunch: filterMealData };
        });
        break;

      // remove meal from snack data
      case "snack":
        mealStore.update((mealData) => {
          let filterMealData = mealData.snack.filter(
            (meal) => meal.uri != mealItem.uri
          );
          return { ...mealData, snack: filterMealData };
        });
        break;

      // remove meal from dinner data
      case "dinner":
        mealStore.update((mealData) => {
          let filterMealData = mealData.dinner.filter(
            (meal) => meal.uri != mealItem.uri
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
  <img src={mealItem.image} alt="mealImage" class="w-20 h-full rounded" />
  <div class="flex-grow">
    <div class="flex justify-between items-center">
      <h1 class="text-[13px]">{mealItem.title}</h1>
      <button class="text-[#e14abe]" on:click={removeMeal}
        ><Icon icon="ic:round-delete" /></button
      >
    </div>

    <div class="text-[11px] text-gray-400 grid grid-cols-2 mt-1">
      <p>
        Calories:
        {(mealItem?.calories / 4).toFixed(2)} kcal
      </p>
      <p>
        Protein: {(mealItem?.nutrients[2].total / 2).toFixed(2)} g
      </p>
      <p>
        Fats: {(mealItem?.nutrients[0].total / 2).toFixed(2)} g
      </p>
      <p>
        Carbs: {(mealItem?.nutrients[1].total / 5).toFixed(2)} g
      </p>
    </div>
  </div>
</section>
