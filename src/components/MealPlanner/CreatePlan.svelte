<script>
  import { onDestroy, onMount } from "svelte";
  import mealDateStore from "../../stores/mealDateStore";
  let mealDateStoreUnsubscribe;
  let selectedDate;
  let selectedMeal = "breakfast";

  // subscribe to mealDateStore
  onMount(() => {
    mealDateStoreUnsubscribe = mealDateStore.subscribe((value) => {
      selectedDate = value.selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    });
  });
  onDestroy(() => {
    mealDateStoreUnsubscribe();
  });
</script>

<section class="shadow-md px-4 py-6 font-[Alkatra]">
  <!-- intro and selected day -->
  <h1 class="font-bold font-[Roboto] text-3xl">Make Your Day</h1>
  <p class="text-sm font-light">{selectedDate}</p>

  <div class="flex flex-col gap-5 mt-4">
    <!-- breakfast -->
    <button
      class={`mealBtn ${selectedMeal == "breakfast" && "bg-[#ec27ce]"}`}
      on:click={() => (selectedMeal = "breakfast")}
    >
      <h1 class="mealText">Breakfast</h1>
      <div class="mealBox">Add Breakfast Meals Here.</div>
    </button>

    <!-- lunch -->
    <button
      class={`mealBtn ${selectedMeal == "lunch" && "bg-[#ec27ce]"}`}
      on:click={() => (selectedMeal = "lunch")}
    >
      <h1 class="mealText">Lunch</h1>
      <div class="mealBox">Add Lunch Meals Here.</div>
    </button>

    <!-- snack -->
    <button
      class={`mealBtn ${selectedMeal == "snack" && "bg-[#ec27ce]"}`}
      on:click={() => (selectedMeal = "snack")}
    >
      <h1 class="mealText">Snack</h1>
      <div class="mealBox">Add Snack Meals Here.</div>
    </button>

    <!-- dinner -->
    <button
      class={`mealBtn ${selectedMeal == "dinner" && "bg-[#ec27ce]"}`}
      on:click={() => (selectedMeal = "dinner")}
    >
      <h1 class="mealText">Dinner</h1>
      <div class="mealBox">Add Dinner Meals Here.</div>
    </button>

    <!-- create meal  -->
    <button
      class="bg-[#1f7aac] w-full py-2 rounded text-white font-[Alkatra] hover:scale-[1.01]"
    >
      Create Plan
    </button>
  </div>
</section>
