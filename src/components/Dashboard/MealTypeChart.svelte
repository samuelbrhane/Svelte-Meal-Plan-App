<script>
  import { MealChartData, NutrientsChart } from "..";
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
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <!-- breakfast chart -->
      <NutrientsChart id="breakfastChart" title="Breakfast Nutrients Chart" />

      <!-- lunch chart -->
      <NutrientsChart id="lunchChart" title="Lunch Nutrients Chart" />

      <!-- snack chart -->
      <NutrientsChart id="snackChart" title="Snack Nutrients Chart" />

      <!-- dinner chart -->
      <NutrientsChart id="dinnerChart" title="Dinner Nutrients Chart" />
    </div>
  </div>
{/if}
