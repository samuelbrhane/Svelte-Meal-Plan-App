<script>
  import { onDestroy, onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import mealDateStore from "../../stores/mealDateStore";
  import mealStore from "../../stores/mealStore";
  import { CalorieCalculator, CreateMealCard, MealTypeChart } from "..";
  let mealDateStoreUnsubscribe;
  let selectedDate;
  let selectedMeal = "breakfast";
  let showCalculatorModal = false;
  let plannedCalorie;
  let calorieValue;

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

  // change meal type
  const changeMeal = (mealType) => {
    selectedMeal = mealType;
    mealStore.update((mealData) => {
      return { ...mealData, selectedMeal: mealType };
    });
  };
</script>

<section class="shadow-md px-4 py-8 font-[Alkatra]">
  <!-- intro and selected day -->
  <h1 class="font-bold font-[Roboto] text-3xl">Make Your Day</h1>
  <p class="text-sm font-light">{selectedDate}</p>

  <!-- Calories calculator and tracker -->
  <div class="mt-2">
    <div class="flex items-center gap-3">
      <h1>I want to eat</h1>
      <form
        on:submit|preventDefault={() => {
          plannedCalorie = calorieValue;
          calorieValue = "";
        }}
      >
        <input
          type="number"
          bind:value={calorieValue}
          class="px-2 shadow border-[#4594a4] border-[0.3px] rounded outline-none w-[100px] py-1"
        />
      </form>

      <p>Calories.</p>
    </div>

    <button
      on:click={() => (showCalculatorModal = true)}
      class="flex items-center gap-1 text-[#a5349a] text-lg my-1"
      >Not Sure? <Icon icon="ion:calculator-sharp" /></button
    >

    <!-- number of planned calories -->
    {#if plannedCalorie}
      <p class="text-[#234a33]">
        Today's planned calorie: {plannedCalorie} kcal
      </p>
    {/if}

    <CalorieCalculator
      {showCalculatorModal}
      on:addCalorie={(e) => (plannedCalorie = e.detail)}
      on:closeModal={() => (showCalculatorModal = false)}
    />
  </div>

  <div class="flex flex-col gap-5 mt-4">
    <!-- breakfast -->
    <button
      class={`mealBtn ${selectedMeal == "breakfast" && "bg-[#27aeec]"}`}
      on:click={() => changeMeal("breakfast")}
    >
      <h1 class="mealText">Breakfast</h1>
      <!-- check meal store length for breakfast-->
      {#if $mealStore.breakfast.length == 0}
        <div class="mealBox">Add Breakfast Meals Here.</div>
      {:else}
        {#each $mealStore.breakfast as mealItem}
          <CreateMealCard {mealItem} />
        {/each}
      {/if}
    </button>

    <!-- lunch -->
    <button
      class={`mealBtn ${selectedMeal == "lunch" && "bg-[#27aeec]"}`}
      on:click={() => changeMeal("lunch")}
    >
      <h1 class="mealText">Lunch</h1>

      <!-- check meal store length for lunch-->
      {#if $mealStore.lunch.length == 0}
        <div class="mealBox">Add Lunch Meals Here.</div>
      {:else}
        {#each $mealStore.lunch as mealItem}
          <CreateMealCard {mealItem} />
        {/each}
      {/if}
    </button>

    <!-- snack -->
    <button
      class={`mealBtn ${selectedMeal == "snack" && "bg-[#27aeec]"}`}
      on:click={() => changeMeal("snack")}
    >
      <h1 class="mealText">Snack</h1>

      <!-- check meal store length for snack-->
      {#if $mealStore.snack.length == 0}
        <div class="mealBox">Add Snack Meals Here.</div>
      {:else}
        {#each $mealStore.snack as mealItem}
          <CreateMealCard {mealItem} />
        {/each}
      {/if}
    </button>

    <!-- dinner -->
    <button
      class={`mealBtn ${selectedMeal == "dinner" && "bg-[#27aeec]"}`}
      on:click={() => changeMeal("dinner")}
    >
      <h1 class="mealText">Dinner</h1>

      <!-- check meal store length for dinner-->
      {#if $mealStore.dinner.length == 0}
        <div class="mealBox">Add Dinner Meals Here.</div>
      {:else}
        {#each $mealStore.dinner as mealItem}
          <CreateMealCard {mealItem} />
        {/each}
      {/if}
    </button>

    <!-- create meal  -->
    <button
      class="bg-[#1f7aac] w-full py-2 rounded text-white font-[Alkatra] hover:scale-[1.01]"
    >
      Create Plan
    </button>

    <!-- meal nutrient charts -->
    <div class="flex flex-col justify-center items-center">
      <MealTypeChart />
    </div>
  </div>
</section>
