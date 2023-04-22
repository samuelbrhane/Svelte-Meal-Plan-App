<script>
  import manageMealStore from "../../stores/manageMealStore";
  export let totalCalorieAdded;

  let formattedDate;

  $: {
    let selectedDate = $manageMealStore.selectedDate;
    const dateParts = selectedDate.split("-");

    // Create a new Date object using the year, month (0-indexed), and day
    const dateObj = new Date(
      `20${dateParts[2]}`,
      dateParts[1] - 1,
      dateParts[0]
    );

    // Get the day of the week and the month name
    const dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(dateObj);
    const monthName = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(dateObj);

    // Format the date string
    formattedDate = `${dayOfWeek}, ${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
  }
</script>

<div>
  <p class="text-sm font-light mt-1 mb-3">{formattedDate}</p>
  <p class="text-[#234a33] text-center">
    Calories Added: {parseInt(totalCalorieAdded)} kcal
  </p>
</div>
