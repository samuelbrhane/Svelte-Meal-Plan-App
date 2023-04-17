<script>
  import {
    BreakfastMealChart,
    DinnerMealChart,
    LunchMealChart,
    SnackMealChart,
  } from "..";
  import mealStore from "../../stores/mealStore";

  //   Breakfast nutrient data
  $: breakfastProteinData = $mealStore.breakfast
    .map((meal) => meal.nutrients[2].total)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: breakfastFatsData = $mealStore.breakfast
    .map((meal) => meal.nutrients[0].total)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: breakfastCarbsData = $mealStore.breakfast
    .map((meal) => meal.nutrients[1].total)
    .reduce((acc, val) => acc + val, 0);

  $: totalBreakfastProtein =
    (breakfastProteinData * 100) /
    (breakfastProteinData + breakfastFatsData + breakfastCarbsData);

  $: totalBreakfastFats =
    (breakfastFatsData * 100) /
    (breakfastProteinData + breakfastFatsData + breakfastCarbsData);

  $: totalBreakfastCarbs =
    (breakfastCarbsData * 100) /
    (breakfastProteinData + breakfastFatsData + breakfastCarbsData);

  // lunch nutrient data
  $: lunchProteinData = $mealStore.lunch
    .map((meal) => meal.nutrients[2].total)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: lunchFatsData = $mealStore.lunch
    .map((meal) => meal.nutrients[0].total)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: lunchCarbsData = $mealStore.lunch
    .map((meal) => meal.nutrients[1].total)
    .reduce((acc, val) => acc + val, 0);

  $: totalLunchProtein =
    (lunchProteinData * 100) /
    (lunchProteinData + lunchFatsData + lunchCarbsData);

  $: totalLunchFats =
    (lunchFatsData * 100) / (lunchProteinData + lunchFatsData + lunchCarbsData);

  $: totalLunchCarbs =
    (lunchCarbsData * 100) /
    (lunchProteinData + lunchFatsData + lunchCarbsData);

  // snack nutrient data
  $: snackProteinData = $mealStore.snack
    .map((meal) => meal.nutrients[2].total)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: snackFatsData = $mealStore.snack
    .map((meal) => meal.nutrients[0].total)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: snackCarbsData = $mealStore.snack
    .map((meal) => meal.nutrients[1].total)
    .reduce((acc, val) => acc + val, 0);

  $: totalSnackProtein =
    (snackProteinData * 100) /
    (snackProteinData + snackFatsData + snackCarbsData);

  $: totalSnackFats =
    (snackFatsData * 100) / (snackProteinData + snackFatsData + snackCarbsData);

  $: totalSnackCarbs =
    (snackCarbsData * 100) /
    (snackProteinData + snackFatsData + snackCarbsData);

  // dinner nutrient data
  $: dinnerProteinData = $mealStore.dinner
    .map((meal) => meal.nutrients[2].total)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: dinnerFatsData = $mealStore.dinner
    .map((meal) => meal.nutrients[0].total)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: dinnerCarbsData = $mealStore.dinner
    .map((meal) => meal.nutrients[1].total)
    .reduce((acc, val) => acc + val, 0);

  $: totalDinnerProtein =
    (dinnerProteinData * 100) /
    (dinnerProteinData + dinnerFatsData + dinnerCarbsData);

  $: totalDinnerFats =
    (dinnerFatsData * 100) /
    (dinnerProteinData + dinnerFatsData + dinnerCarbsData);

  $: totalDinnerCarbs =
    (dinnerCarbsData * 100) /
    (dinnerProteinData + dinnerFatsData + dinnerCarbsData);
</script>

<!-- breakfast chart -->
<BreakfastMealChart
  {totalBreakfastProtein}
  {totalBreakfastFats}
  {totalBreakfastCarbs}
/>

<!-- lunch chart -->
<LunchMealChart {totalLunchProtein} {totalLunchFats} {totalLunchCarbs} />

<!-- snack chart -->
<SnackMealChart {totalSnackProtein} {totalSnackFats} {totalSnackCarbs} />

<!-- dinner chart -->
<DinnerMealChart {totalDinnerProtein} {totalDinnerFats} {totalDinnerCarbs} />
