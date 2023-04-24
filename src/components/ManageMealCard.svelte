<script>
  export let mealItem = {};
  import Icon from "@iconify/svelte";
  import mealStore from "../stores/mealStore";
  import manageMealStore from "../stores/manageMealStore";
  import { removeMealFromCart } from "../utils/functions/removeMealFromCart";
  export let page;

  // remove meal from the meal store
  const removeMeal = () => {
    switch (page) {
      // remove items in MealPlanner page
      case "MealPlanner":
        removeMealFromCart(mealStore, $mealStore.selectedMeal, mealItem);
        break;

      // remove meal in Management page
      case "Management":
        removeMealFromCart(
          manageMealStore,
          $manageMealStore.selectedMeal,
          mealItem
        );
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
        {(mealItem?.calories / 3).toFixed(2)} kcal
      </p>
      <p>
        Protein: {(mealItem?.nutrients[2].total / 4).toFixed(2)} g
      </p>
      <p>
        Fats: {(mealItem?.nutrients[0].total / 5).toFixed(2)} g
      </p>
      <p>
        Carbs: {(mealItem?.nutrients[1].total / 4).toFixed(2)} g
      </p>
    </div>
  </div>
</section>
