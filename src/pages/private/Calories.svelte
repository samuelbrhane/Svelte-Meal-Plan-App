<script>
  import { PrivateLayout, Title, NutrientsLineChart } from "../../components";
  import { DateInput } from "date-picker-svelte";
  import { mainMealRoute } from "../../utils/routes/mealRoutes";
  import { onMount } from "svelte";
  import { errorClasses } from "../../utils/toast/toastCustom";
  import { toast } from "@zerodevx/svelte-toast";
  import authStore from "../../stores/authStore";

  let userMeals = [];
  let loading = false;

  // fetch user's meal data
  onMount(async () => {
    loading = true;
    const response = await fetch(`${mainMealRoute}user/${$authStore.userId}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${$authStore.token.access}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      userMeals = data;
      console.log("userMeals", userMeals);
    } else {
      toast.push("Failed to fetch meals", { theme: errorClasses });
    }
    loading = false;
  });

  let labelName = "Calories";
  let startingDate = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
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

  console.log("userMeals", JSON.stringify(userMeals));
</script>

<PrivateLayout>
  <div class="lg:ml-[250px]">
    <div class="px-4 md:px-8 py-4 lg:px-12">
      <!--title and starting day  -->
      <div class="flex flex-col md:flex-row justify-between mb-6">
        <Title title="Calories" subtitle="Chart of weekly calories intake" />
        <div>
          <!-- data picker  -->
          <h1 class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]">
            Selected Start Date
          </h1>

          <!-- week start -->
          <div
            class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a]"
          >
            <h1 class="text-lg">Starting Date:</h1>
            <DateInput bind:value={startingDate} />
          </div>
        </div>
      </div>

      <!-- calories chart -->
      <NutrientsLineChart {days} {labelName} />
    </div>
  </div>
</PrivateLayout>
