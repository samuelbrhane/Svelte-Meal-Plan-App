<script>
  import {
    BreakfastMealChart,
    DinnerMealChart,
    LunchMealChart,
    SnackMealChart,
  } from "..";

  export let selectedDayData;

  $: breakfastProteinData = selectedDayData.breakfast
    .map((meal) => meal.nutrients[2].total / 2.8)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: breakfastFatsData = selectedDayData.breakfast
    .map((meal) => meal.nutrients[0].total / 2.4)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: breakfastCarbsData = selectedDayData.breakfast
    .map((meal) => meal.nutrients[1].total / 5)
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
  $: lunchProteinData = selectedDayData.lunch
    .map((meal) => meal.nutrients[2].total / 2.8)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: lunchFatsData = selectedDayData.lunch
    .map((meal) => meal.nutrients[0].total / 2.4)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: lunchCarbsData = selectedDayData.lunch
    .map((meal) => meal.nutrients[1].total / 5)
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
  $: snackProteinData = selectedDayData.snack
    .map((meal) => meal.nutrients[2].total / 2.8)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: snackFatsData = selectedDayData.snack
    .map((meal) => meal.nutrients[0].total / 2.4)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: snackCarbsData = selectedDayData.snack
    .map((meal) => meal.nutrients[1].total / 5)
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
  $: dinnerProteinData = selectedDayData.dinner
    .map((meal) => meal.nutrients[2].total / 2.8)
    .reduce((acc, val) => acc + val, 0);

  // fats
  $: dinnerFatsData = selectedDayData.dinner
    .map((meal) => meal.nutrients[0].total / 2.4)
    .reduce((acc, val) => acc + val, 0);

  // carbs
  $: dinnerCarbsData = selectedDayData.dinner
    .map((meal) => meal.nutrients[1].total / 5)
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

<div class="grid grid-cols-1 md:grid-col-2 xl:grid-cols-4 gap-8">
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
</div>
