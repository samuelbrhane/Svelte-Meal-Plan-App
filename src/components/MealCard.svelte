<script>
  export let item = {};
  import mealStore from "../stores/mealStore";
  import StarRating from "svelte-star-rating";
  import manageMealStore from "../stores/manageMealStore";
  let ratings = [3, 3.5, 4, 4.5, 5];
  import Icon from "@iconify/svelte";
  import plannerCalorieStore from "../stores/plannedCalorieStore";
  import { addMealToCart } from "../utils/functions/addMealToCart";
  import checkDateStore from "../stores/checkDateStore";
  import { fade } from "svelte/transition";
  export let key;
  export let page;

  $: console.log("key: " + key);

  // get random rating
  let rating = ratings[Math.floor(Math.random() * ratings.length)];

  // add style and config in rating
  const config = {
    emptyColor: "#ebd5ec",
    fullColor: "#e15fe8",
    size: 21,
  };
  const style = "padding: 12px;";

  // add new meal to mealStore or manageMealStore
  const addMeal = () => {
    // format meal item
    const formattedItem = {
      uri: item.recipe.uri,
      title: item.recipe.label,
      image: item.recipe.image,
      healthLabels: item.recipe.healthLabels,
      ingredientLines: item.recipe.ingredientLines,
      ingredients: item.recipe.ingredients,
      calories: item.recipe.calories,
      nutrients: item.recipe.digest,
    };

    switch (page) {
      case "MealPlanner":
        if ($plannerCalorieStore.plannerCalories) {
          // add meal item in MealPlanner page
          addMealToCart(mealStore, $mealStore, formattedItem);
        } else {
          $plannerCalorieStore.errorMessage =
            "Please add planned calories first.";
        }
        break;

      // add meal item in Management page
      case "Management":
        if ($manageMealStore.selectedDate) {
          // add meal item in MealPlanner page
          addMealToCart(manageMealStore, $manageMealStore, formattedItem);
        } else {
          $checkDateStore.errorMessage = "Please select updating meal first.";
        }

      default:
        break;
    }
  };
</script>

<button
  in:fade
  class="flex justify-between gap-4 shadow rounded items-center px-4 py-3 flex-col md:flex-row font-[Alkatra] hover:scale-[1.02] hover:shadow-md w-full"
>
  <!-- meal image -->
  <img
    src={item?.recipe?.image}
    alt="mealImage"
    class="h-[120px] w-[130px] rounded-md"
  />

  <div
    class="flex flex-col text-center md:text-start md:flex-row flex-grow justify-between items-center"
  >
    <!-- meal title and rating -->
    <div class="flex flex-col items-center flex-grow">
      <p>{item?.recipe?.label}</p>
      <StarRating {rating} {config} {style} />
      <button
        on:click={addMeal}
        class="text-2xl text-[#e2eef1] bg-[#1b7dba] hover:bg-[#95126c] rounded-full p-2"
        ><Icon icon="mdi:cart-arrow-right" /></button
      >
    </div>

    <!-- meal nutrient contents -->
    <div class="text-sm flex flex-col gap-2">
      <p>
        Calories: <span class="text-[#a23495]"
          >{(item?.recipe?.calories / 3).toFixed(2)} kcal</span
        >
      </p>
      <p>
        Protein: <span class="text-[#3472a2]"
          >{(item?.recipe?.digest[2].total / 4).toFixed(2)} g</span
        >
      </p>
      <p>
        Fats: <span class="text-[#34a23d]"
          >{(item?.recipe?.digest[0].total / 5).toFixed(2)} g</span
        >
      </p>
      <p>
        Carbs: <span class="text-[#5a269e]"
          >{(item?.recipe?.digest[1].total / 4).toFixed(2)} g</span
        >
      </p>
    </div>
  </div>
</button>
