<script>
  import {
    Loader,
    PrivateLayout,
    Title,
    MealTypeChart,
    CombineNutrientChart,
    HealthLabel,
    CaloriesChart,
  } from "../../components";
  import authStore from "../../stores/authStore";
  import { onMount } from "svelte";
  import { fetchUserMeals } from "../../utils/functions/fetchUserMeals";
  import { DateInput } from "date-picker-svelte";
  // make starting data three days from now
  let startingDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);

  // change starting date format
  $: day = startingDate.getDate().toString().padStart(2, "0");
  $: month = (startingDate.getMonth() + 1).toString().padStart(2, "0");
  $: year = startingDate.getFullYear().toString().slice(-2);
  $: formattedDate = `${day}-${month}-${year}`;

  let days = [];

  // Create a reactive statement to watch for changes to the starting date and update the days array
  $: {
    days = [formattedDate.toString()]; // add the starting day
    for (let i = 0; i < 6; i++) {
      let nextDay = new Date(startingDate);
      nextDay.setDate(startingDate.getDate() + i + 1); // Add i + 1 days to the starting date
      const day = nextDay.getDate().toString().padStart(2, "0");
      const month = (nextDay.getMonth() + 1).toString().padStart(2, "0");
      const year = nextDay.getFullYear().toString().slice(-2);
      const formattedDate = `${day}-${month}-${year}`;
      days.push(formattedDate.toString());
    }
  }

  let userMeals = [];
  let loading = false;

  // fetch user's meal data
  onMount(() => {
    fetchUserMeals($authStore.userId, $authStore.token.access).then(
      (response) => {
        loading = response.loading;
        userMeals = response.userMeals;
      }
    );
  });

  let totalCalories;
  let totalCarbs;
  let totalProtein;
  let totalFats;
  let sample;

  $: {
    totalCalories;
    totalCarbs;
    totalProtein;
    totalFats;
    sample;

    let findDay = userMeals.find(
      (meal) => meal.selectedDate.toString() == formattedDate
    );
    // if not meal created add 0
    if (!findDay) {
      totalCalories = 0;
      totalCarbs = 0;
      totalProtein = 0;
      totalFats = 0;
      sample = 100;
    } else {
      // add the total nutrient for that day
      totalCalories = 0;
      totalCarbs = 0;
      totalProtein = 0;
      totalFats = 0;
      sample = 0;
      findDay.breakfast.forEach((data) => {
        totalCalories += data.calories / 3;
        totalCarbs += data.nutrients[1].total / 4;
        totalProtein += data.nutrients[2].total / 4;
        totalFats += data.nutrients[0].total / 5;
      });
      findDay.lunch.forEach((data) => {
        totalCalories += data.calories / 3;
        totalCarbs += data.nutrients[1].total / 4;
        totalProtein += data.nutrients[2].total / 4;
        totalFats += data.nutrients[0].total / 5;
      });
      findDay.snack.forEach((data) => {
        totalCalories += data.calories / 3;
        totalCarbs += data.nutrients[1].total / 4;
        totalProtein += data.nutrients[2].total / 4;
        totalFats += data.nutrients[0].total / 5;
      });
      findDay.dinner.forEach((data) => {
        totalCalories += data.calories / 3;
        totalCarbs += data.nutrients[1].total / 4;
        totalProtein += data.nutrients[2].total / 4;
        totalFats += data.nutrients[0].total / 5;
      });
    }
  }

  $: averageCarbs =
    (totalCarbs * 100) / (totalCarbs + totalProtein + totalFats);

  $: averageProtein =
    (totalProtein * 100) / (totalCarbs + totalProtein + totalFats);

  $: averageFats = (totalFats * 100) / (totalCarbs + totalProtein + totalFats);
</script>

<PrivateLayout>
  <section class="lg:ml-[250px]">
    <div class="px-4 md:px-12 lg:px-20">
      {#if loading}
        <Loader />
      {:else}
        <!--title and starting day  -->
        <div class="flex justify-between flex-wrap mb-6 mt-4">
          <Title title="Dashboard" subtitle="Overview of your meal plan" />
          <div>
            <!-- data picker  -->
            <h1
              class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]"
            >
              Selected The Date
            </h1>

            <!-- week start -->
            <div
              class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a] mr-12"
            >
              <h1 class="text-lg">Selected Date:</h1>
              <DateInput bind:value={startingDate} />
            </div>
          </div>
        </div>

        <!-- meal nutrient charts -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <MealTypeChart {userMeals} {formattedDate} />
          <div>
            <CaloriesChart
              {totalCalories}
              {totalCarbs}
              {totalProtein}
              {totalFats}
              {averageCarbs}
              {averageFats}
              {averageProtein}
              {sample}
            />
            <HealthLabel {userMeals} {formattedDate} />
          </div>
        </div>

        <!-- combined chart for nutrients -->
        <CombineNutrientChart {userMeals} {formattedDate} {startingDate} />
      {/if}
    </div>
  </section>
</PrivateLayout>
