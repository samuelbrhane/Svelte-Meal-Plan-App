<script>
  export let item = {};
  import mealStore from "../../stores/mealStore";
  import StarRating from "svelte-star-rating";
  let ratings = [3, 3.5, 4, 4.5, 5];
  import Icon from "@iconify/svelte";
  import plannerCalorieStore from "../../stores/plannedCalorieStore";
  import { faqItems } from "../../utils/faqItems";

  // get random rating
  let rating = ratings[Math.floor(Math.random() * ratings.length)];

  // add style and config in rating
  const config = {
    emptyColor: "#ebd5ec",
    fullColor: "#e15fe8",
    size: 21,
  };
  const style = "padding: 12px;";

  // add new meal
  const addMeal = () => {
    // format meal item
    const formattedItem = {
      uri: item.recipe.uri,
      title: item.recipe.label,
      image: item.recipe.image,
      healthLabels: item.recipe.healthLabels,
      ingredientLines: item.recipe.ingredientLines,
      ingredients: item.recipe.ingredients,
      calories: item.recipe.calories / 4,
      nutrients: item.recipe.digest,
    };

    if ($plannerCalorieStore.plannerCalories) {
      switch ($mealStore.selectedMeal) {
        // add breakfast
        case "breakfast":
          // check meal already exists
          let breakfastMealExists = $mealStore.breakfast.find(
            (meal) => meal.uri == item.uri
          );

          // add meal to breakfast list
          if (!breakfastMealExists) {
            mealStore.update((mealData) => {
              return {
                ...mealData,
                breakfast: [...mealData.breakfast, formattedItem],
              };
            });
          }

          break;
        // add lunch
        case "lunch":
          // check meal already exists

          let lunchMealExists = $mealStore.lunch.find(
            (meal) => meal.uri == item.uri
          );
          // add meal to lunch list
          if (!lunchMealExists) {
            mealStore.update((mealData) => {
              return { ...mealData, lunch: [...mealData.lunch, formattedItem] };
            });
          }

          break;
        // add snack
        case "snack":
          // check meal already exists

          let snackMealExists = $mealStore.snack.find(
            (meal) => meal.uri == item.uri
          );
          // add meal to snack list
          if (!snackMealExists) {
            mealStore.update((mealData) => {
              return { ...mealData, snack: [...mealData.snack, formattedItem] };
            });
          }

          break;
        // add dinner
        case "dinner":
          // check meal already exists
          let dinnerMealExists = $mealStore.dinner.find(
            (meal) => meal.uri == item.uri
          );
          // add meal to dinner list
          if (!dinnerMealExists) {
            mealStore.update((mealData) => {
              return {
                ...mealData,
                dinner: [...mealData.dinner, formattedItem],
              };
            });
          }
          break;

        default:
          break;
      }
    } else {
      $plannerCalorieStore.errorMessage = "Please add planned calories first.";
    }
  };
</script>

<button
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
          >{(item?.recipe?.calories / 4).toFixed(2)} kcal</span
        >
      </p>
      <p>
        Protein: <span class="text-[#3472a2]"
          >{(item?.recipe?.digest[2].total / 2).toFixed(2)} g</span
        >
      </p>
      <p>
        Fats: <span class="text-[#34a23d]"
          >{(item?.recipe?.digest[0].total / 2).toFixed(2)} g</span
        >
      </p>
      <p>
        Carbs: <span class="text-[#5a269e]"
          >{(item?.recipe?.digest[1].total / 5).toFixed(2)} g</span
        >
      </p>
    </div>
  </div>
</button>
