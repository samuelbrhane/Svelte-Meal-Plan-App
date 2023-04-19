<script>
  import {
    BreakfastMealChart,
    DinnerMealChart,
    LunchMealChart,
    SnackMealChart,
    MealChartData,
  } from "..";
  export let formattedDate;
  export let userMeals;

  $: selectedDayData = userMeals.find(
    (mealData) => mealData.selectedDate == formattedDate
  );
</script>

<!-- check selected day data for charts -->
{#if selectedDayData}
  <MealChartData {selectedDayData} />
{:else}
  <div>
    <p class="font-[Alkatra] mt-1 font-light mb-1">
      No Meal Plan Is Created For The Selected Day.
    </p>
    <div class="grid grid-cols-1 md:grid-col-2 xl:grid-cols-4 gap-8">
      <!-- breakfast chart -->
      <BreakfastMealChart />

      <!-- lunch chart -->
      <LunchMealChart />

      <!-- snack chart -->
      <SnackMealChart />

      <!-- dinner chart -->
      <DinnerMealChart />
    </div>
  </div>
{/if}
