<script>
  import manageMealStore from "../../stores/manageMealStore";
  import { ManageMealCard } from "..";
  import checkDateStore from "../../stores/checkDateStore";
  let selectedMeal = "breakfast";

  $: breakfastCalories = $manageMealStore.breakfast
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);
  $: lunchCalories = $manageMealStore.lunch
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);
  $: snackCalories = $manageMealStore.snack
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);
  $: dinnerCalories = $manageMealStore.dinner
    .map((meal) => meal.calories)
    .reduce((acc, val) => acc + val, 0);

  // change meal type
  const changeMeal = (mealType) => {
    selectedMeal = mealType;
    manageMealStore.update((mealData) => {
      return { ...mealData, selectedMeal: mealType };
    });
  };

  $: totalCalorieAdded =
    (breakfastCalories + lunchCalories + snackCalories + dinnerCalories) / 4;

  // create new meal plan
  const updateMealPlan = async () => {
    // const user = $authStore.token.access;
    // let selectedDate = $mealDateStore.selectedDate;
    // // change starting date format
    // let day = selectedDate.getDate().toString().padStart(2, "0");
    // let month = (selectedDate.getMonth() + 1).toString().padStart(2, "0");
    // let year = selectedDate.getFullYear().toString().slice(-2);
    // let formattedDate = `${day}-${month}-${year}`;
    // const breakfast = $mealStore.breakfast;
    // const lunch = $mealStore.lunch;
    // const snack = $mealStore.snack;
    // const dinner = $mealStore.dinner;
    // const formBody = {
    //   selectedDate: formattedDate,
    //   lunch,
    //   snack,
    //   dinner,
    //   breakfast,
    // };
    // // create a new meal plan
    // const { data } = await axios.post(`${mainMealRoute}`, formBody, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `JWT ${user}`,
    //   },
    // });
    // // check error message
    // if (data.error) {
    //   toast.push(data.error, { theme: errorClasses });
    // } else {
    //   // update meal store
    //   mealStore.update((mealData) => {
    //     return { ...mealData, breakfast: [], lunch: [], snack: [], dinner: [] };
    //   });
    //   // update plannerCalorieStore
    //   plannerCalorieStore.update((planned) => {
    //     return { ...planned, plannerCalories: null };
    //   });
    // }
  };
</script>

<section class="shadow-md px-4 py-8 font-[Alkatra]">
  <!-- intro -->
  <h1 class="font-bold font-[Roboto] text-3xl">Update Your Meal Plan</h1>

  <!-- check if meal is selected -->
  {#if $manageMealStore.selectedDate}
    <p class="text-sm font-light">{$manageMealStore.selectedDate}</p>
    <p class="text-[#234a33] text-center">
      Calories Added: {parseInt(totalCalorieAdded)} kcal
    </p>
  {:else}
    <p class="text-[#234a33] text-center mt-3">
      {$checkDateStore.errorMessage}
    </p>
  {/if}

  <div class="flex flex-col gap-5 mt-4">
    <!-- breakfast -->
    <button
      class={`mealBtn ${selectedMeal == "breakfast" && "bg-[#27aeec]"}`}
      on:click={() => changeMeal("breakfast")}
    >
      <h1 class="mealText">Breakfast</h1>
      <!-- check meal store length for breakfast-->
      {#if $manageMealStore.breakfast.length == 0}
        <div class="mealBox">Add Breakfast Meals Here.</div>
      {:else}
        {#each $manageMealStore.breakfast as mealItem}
          <ManageMealCard {mealItem} page="Management" />
        {/each}
      {/if}
    </button>

    <!-- lunch -->
    <button
      class={`mealBtn ${selectedMeal == "lunch" && "bg-[#27aeec]"}`}
      on:click={() => changeMeal("lunch")}
    >
      <h1 class="mealText">Lunch</h1>

      <!-- check manage meal store length for lunch-->
      {#if $manageMealStore.lunch.length == 0}
        <div class="mealBox">Add Lunch Meals Here.</div>
      {:else}
        {#each $manageMealStore.lunch as mealItem}
          <ManageMealCard {mealItem} page="Management" />
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
      {#if $manageMealStore.snack.length == 0}
        <div class="mealBox">Add Snack Meals Here.</div>
      {:else}
        {#each $manageMealStore.snack as mealItem}
          <ManageMealCard {mealItem} page="Management" />
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
      {#if $manageMealStore.dinner.length == 0}
        <div class="mealBox">Add Dinner Meals Here.</div>
      {:else}
        {#each $manageMealStore.dinner as mealItem}
          <ManageMealCard {mealItem} page="Management" />
        {/each}
      {/if}
    </button>

    <!-- create meal  -->
    <button
      on:click={updateMealPlan}
      class="bg-[#1f7aac] w-full py-2 rounded text-white font-[Alkatra] hover:scale-[1.01]"
    >
      Update Plan
    </button>
  </div>
</section>
