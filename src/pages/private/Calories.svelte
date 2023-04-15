<script>
  import { PrivateLayout, Title } from "../../components";
  import { DateInput } from "date-picker-svelte";
  import NutrientsLineChart from "../../components/NutrientsLineChart.svelte";

  let labelName = "Calories";
  let startingDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
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

  $: console.log("days: " + days);
</script>

<PrivateLayout>
  <div class="lg:ml-[250px]">
    <div class="px-4 md:px-8 py-4 lg:px-12">
      <!--title and starting day  -->
      <div class="flex justify-between mb-6">
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
