<script>
  import { DateInput } from "date-picker-svelte";
  import mealDateStore from "../../stores/mealDateStore";

  // week staring date
  let startingDate = new Date();
  let days = [];
  let index = 0;

  // Create a reactive statement to watch for changes to the starting date and update the days array
  $: {
    days = [{ id: 0, day: startingDate }]; // Clear the days array
    for (let i = 0; i < 6; i++) {
      let nextDay = new Date(startingDate);
      nextDay.setDate(startingDate.getDate() + i + 1); // Add i + 1 days to the starting date
      days.push({ id: i + 1, day: nextDay });
    }
  }

  const updateDate = (date) => {
    console.log("dayid: " + date.id);

    index = date.id;
    console.log("index: " + index);
    mealDateStore.set({
      selectedDate: date.day,
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
    {#each days as date}
      <button
        on:click={() => updateDate(date)}
        class={`rounded w-[106px] py-1 bg-gradient-to-l text-sm font-[Alkatra] text-white hover:scale-[1.03] hover:to-[#433a45] hover:from-[#550e07] 
        ${
          index == date.id
            ? "to-[#9a30b1] from-[#075455]"
            : "from-[#34a456] to-[#8ea344]"
        }`}
      >
        <p class="text-sm">
          {date.day.toLocaleDateString("en-US", { weekday: "long" })}
        </p>
        <p>
          {date.day.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </button>
    {/each}
  </div>
</section>
