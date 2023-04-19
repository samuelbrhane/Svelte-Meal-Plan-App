<script>
  import { onMount } from "svelte";
  import { PrivateLayout, Title, NutrientsLineChart } from "../../components";
  import { DateInput } from "date-picker-svelte";
  import { fetchUserMeals } from "../../utils/functions/fetchUserMeals";
  import authStore from "../../stores/authStore";

  let labelName = "Carbs";

  // make starting data one week from now
  let startingDate = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);

  // change starting date format
  $: day = startingDate.getDate().toString().padStart(2, "0");
  $: month = (startingDate.getMonth() + 1).toString().padStart(2, "0");
  $: year = startingDate.getFullYear().toString().slice(-2);
  $: formattedDate = `${day}-${month}-${year}`;

  let days = [];

  // Create a reactive statement to watch for changes to the starting date and update the days array
  $: {
    days = [formattedDate.toString()]; // Clear the days array
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

  // carbs array
  let carbs = [];
  $: {
    carbs = [];
    // find the day in userMeals
    days.forEach((day) => {
      let findDay = userMeals.find(
        (meal) => meal.selectedDate.toString() == day
      );
      // if not meal created add 0
      if (!findDay) {
        carbs.push(0);
      } else {
        // add the total carbs for that day
        let currentDateCarbs = 0;

        findDay.breakfast.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 6;
        });
        findDay.lunch.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 6;
        });
        findDay.snack.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 6;
        });
        findDay.dinner.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 6;
        });
        carbs.push(currentDateCarbs);
      }
    });
  }
</script>

<PrivateLayout>
  <div class="lg:ml-[250px]">
    <div class="px-4 md:px-12 py-4 lg:px-20">
      <!--title and starting day  -->
      <div class="flex justify-between mb-6">
        <Title title="Carbs" subtitle="Chart of weekly carbs intake" />
        <div>
          <!-- data picker  -->
          <h1 class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]">
            Selected Start Date
          </h1>

          <!-- week start -->
          <div
            class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a] mr-12"
          >
            <h1 class="text-lg">Starting Date:</h1>
            <DateInput bind:value={startingDate} />
          </div>
        </div>
      </div>

      <!-- carbs chart -->
      <NutrientsLineChart {days} {labelName} data={carbs} />
    </div>
  </div>
</PrivateLayout>
