<script>
  import { DateInput } from "date-picker-svelte";
  import mealDateStore from "../../stores/mealDateStore";

  // week staring date
  let selectedDate = new Date();
  let startingDate = new Date();
  let days = [];

  // Create a reactive statement to watch for changes to the starting date and update the days array
  $: {
    days = [startingDate]; // Clear the days array
    for (let i = 0; i < 6; i++) {
      let nextDay = new Date(startingDate);
      nextDay.setDate(startingDate.getDate() + i + 1); // Add i + 1 days to the starting date
      days.push(nextDay);
    }
  }

  const updateDate = (day) => {
    selectedDate = day;
    let formattedDate = day.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    mealDateStore.set({
      selectedDate: formattedDate,
    });
  };
</script>

<section>
  <!-- data picker  -->
  <h1 class="text-2xl xl:text-3xl mb-3 font-light font-[Merriweather]">
    Selected Your Week
  </h1>

  <!-- week start -->
  <div
    class="flex items-center gap-2 font-[Alkatra] text-sm font-light text-[#a3344a]"
  >
    <h1 class="text-lg">Starting Date:</h1>
    <DateInput bind:value={startingDate} />
  </div>

  <div
    class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 mt-5 gap-2 py-2 text-center"
  >
    {#each days as day}
      <button
        on:click={() => updateDate(day)}
        class={`from-[#a234a4] bg-gradient-to-l to-[#44a3a3] rounded w-[106px] py-1 text-sm font-[Alkatra] text-white hover:scale-[1.03] 
        hover:to-[#433a45] hover:from-[#550e07] ${
          selectedDate == day && "from-[#550e07] to-[#433a45]"
        }`}
      >
        <p class="text-sm">
          {day.toLocaleDateString("en-US", { weekday: "long" })}
        </p>
        <p>
          {day.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </p>
      </button>
    {/each}
  </div>
</section>
