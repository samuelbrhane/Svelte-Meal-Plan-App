<script>
  import { VerticalChart } from "..";

  export let userMeals;
  export let formattedDate;
  export let startingDate;

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

  let carbs = [];
  let protein = [];
  let fats = [];
  $: {
    carbs = [];
    protein = [];
    fats = [];
    // find the day in userMeals
    days.forEach((day) => {
      let findDay = userMeals.find(
        (meal) => meal.selectedDate.toString() == day
      );
      // if not meal created add 0
      if (!findDay) {
        carbs.push(0);
        protein.push(0);
        fats.push(0);
      } else {
        // add the total carbs for that day
        let currentDateCarbs = 0;
        let currentDateFats = 0;
        let currentDateProtein = 0;

        findDay.breakfast.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 4;
          currentDateFats += data.nutrients[0].total / 5;
          currentDateProtein += data.nutrients[2].total / 3;
        });
        findDay.lunch.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 4;
          currentDateFats += data.nutrients[0].total / 5;
          currentDateProtein += data.nutrients[2].total / 3;
        });
        findDay.snack.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 4;
          currentDateFats += data.nutrients[0].total / 5;
          currentDateProtein += data.nutrients[2].total / 3;
        });
        findDay.dinner.forEach((data) => {
          currentDateCarbs += data.nutrients[1].total / 4;
          currentDateFats += data.nutrients[0].total / 5;
          currentDateProtein += data.nutrients[2].total / 3;
        });
        carbs.push(currentDateCarbs);
        protein.push(currentDateProtein);
        fats.push(currentDateFats);
      }
    });
  }
</script>

<section class="my-8">
  <h1 class="font-[Roboto] font-semibold text-2xl mb-3">
    Weekly Nutrients Intake
  </h1>
  <VerticalChart {days} {carbs} {protein} {fats} />
</section>
