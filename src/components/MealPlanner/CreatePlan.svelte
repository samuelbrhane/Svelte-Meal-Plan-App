<script>
  import { onDestroy, onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import mealDateStore from "../../stores/mealDateStore";
  import mealStore from "../../stores/mealStore";
  import plannerCalorieStore from "../../stores/plannedCalorieStore";
  import { CalorieCalculator, CalorieTracker, ManageMealCard } from "..";
  import authStore from "../../stores/authStore";
  import axios from "axios";
  import { mainMealRoute } from "../../utils/routes/mealRoutes";
  import { toast } from "@zerodevx/svelte-toast";
  import { errorClasses } from "../../utils/toast/toastCustom";
  let mealDateStoreUnsubscribe;
  let selectedDate;
  let selectedMeal = "breakfast";
  let showCalculatorModal = false;
  let calorieValue;

  $: breakfastCalories = $mealStore.breakfast
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);
  $: lunchCalories = $mealStore.lunch
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);
  $: snackCalories = $mealStore.snack
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);
  $: dinnerCalories = $mealStore.dinner
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);

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

  $: totalCalorieAdded =
    (breakfastCalories + lunchCalories + snackCalories + dinnerCalories) / 4;

  $: averageCalorieAdded =
    (totalCalorieAdded * 100) / $plannerCalorieStore.plannerCalories;

  // create new meal plan
  const createMealPlan = async () => {
    const user = $authStore.token.access;
    let selectedDate = $mealDateStore.selectedDate;

    // change starting date format
    let day = selectedDate.getDate().toString().padStart(2, "0");
    let month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    let year = selectedDate.getFullYear().toString().slice(-2);
    let formattedDate = `${day}-${month}-${year}`;

    const breakfast = $mealStore.breakfast;
    const lunch = $mealStore.lunch;
    const snack = $mealStore.snack;
    const dinner = $mealStore.dinner;
    const formBody = {
      selectedDate: formattedDate,
      lunch,
      snack,
      dinner,
      breakfast,
    };

    // create a new meal plan
    const { data } = await axios.post(`${mainMealRoute}`, formBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${user}`,
      },
    });

    // check error message
    if (data.error) {
      toast.push(data.error, { theme: errorClasses });
    } else {
      // update meal store
      mealStore.update((mealData) => {
        return { ...mealData, breakfast: [], lunch: [], snack: [], dinner: [] };
      });

      // update plannerCalorieStore
      plannerCalorieStore.update((planned) => {
        return { ...planned, plannerCalories: null };
      });
    }
  };
</script>

<section class="shadow-md px-4 py-8 font-[Alkatra]">
  <!-- intro and selected day -->
  <h1 class="font-bold font-[Roboto] text-3xl">Make Your Day</h1>
  <p class="text-sm font-light">{selectedDate}</p>

  <!-- Calories calculator -->
  <div class="mt-2">
    <div class="flex items-center gap-3">
      <h1>I want to eat</h1>
      <form
        on:submit|preventDefault={() => {
          $plannerCalorieStore.plannerCalories = calorieValue;
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

    <!-- number of planned and add calories -->
    {#if $plannerCalorieStore.plannerCalories}
      <p class="text-[#234a33] text-center mt-3">
        Today's planned calorie: {$plannerCalorieStore.plannerCalories} kcal
      </p>
      <p class="text-[#234a33] text-center">
        Calories Added: {parseInt(totalCalorieAdded)} kcal
      </p>
    {:else}
      <p class="text-[#234a33] text-center mt-3">
        {$plannerCalorieStore.errorMessage}
      </p>
    {/if}

    <!-- calorie calculator modal -->
    <CalorieCalculator
      {showCalculatorModal}
      on:addCalorie={(e) => ($plannerCalorieStore.plannerCalories = e.detail)}
      on:closeModal={() => (showCalculatorModal = false)}
    />

    <!-- calorie tracker pie chart -->
    {#if $plannerCalorieStore.plannerCalories}
      <div class="flex flex-col items-center mt-3">
        <p class="text-2xl text-[#a345af]">Calorie Tracker</p>
        <CalorieTracker {averageCalorieAdded} />
      </div>
    {/if}
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
          <ManageMealCard {mealItem} page="MealPlanner" />
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
          <ManageMealCard {mealItem} page="MealPlanner" />
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
          <ManageMealCard {mealItem} page="MealPlanner" />
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
          <ManageMealCard {mealItem} page="MealPlanner" />
        {/each}
      {/if}
    </button>

    <!-- create meal  -->
    <button
      on:click={createMealPlan}
      class="bg-[#1f7aac] w-full py-2 rounded text-white font-[Alkatra] hover:scale-[1.01]"
    >
      Create Plan
    </button>
  </div>
</section>
