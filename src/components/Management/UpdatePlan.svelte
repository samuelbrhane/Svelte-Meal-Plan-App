<script>
  import manageMealStore from "../../stores/manageMealStore";
  import { ManageMealCard, ManagementTitle } from "..";
  import checkDateStore from "../../stores/checkDateStore";
  import authStore from "../../stores/authStore";
  import axios from "axios";
  import { mainMealRoute } from "../../utils/routes/mealRoutes";
  import { toast } from "@zerodevx/svelte-toast";
  import { successClasses } from "../../utils/toast/toastCustom";
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
    const user = $authStore.token.access;

    const breakfast = $manageMealStore.breakfast;
    const lunch = $manageMealStore.lunch;
    const snack = $manageMealStore.snack;
    const dinner = $manageMealStore.dinner;
    const selectedDate = $manageMealStore.selectedDate;
    const mealId = $manageMealStore.id;

    const formBody = {
      selectedDate,
      lunch,
      snack,
      dinner,
      breakfast,
    };
    // update a meal plan
    await axios.put(`${mainMealRoute}${mealId}/`, formBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${user}`,
      },
    });

    // update meal store
    manageMealStore.update((mealData) => {
      return {
        ...mealData,
        breakfast: [],
        lunch: [],
        snack: [],
        dinner: [],
        selectedDate: null,
        id: null,
      };
    });
    toast.push("Meal Updated Successfully.", { theme: successClasses });
  };
</script>

<section class="shadow-md px-4 py-8 font-[Alkatra]">
  <!-- intro -->
  <h1 class="font-bold font-[Roboto] text-3xl">Update Your Meal Plan</h1>

  <!-- check if meal is selected -->
  {#if $manageMealStore.selectedDate}
    <ManagementTitle {totalCalorieAdded} />
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
