<script>
  import Icon from "@iconify/svelte";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";
  import { Label } from "@smui/common";
  import manageMealStore from "../../stores/manageMealStore";
  import axios from "axios";
  import { mainMealRoute } from "../../utils/routes/mealRoutes";
  import { toast } from "@zerodevx/svelte-toast";
  import { successClasses } from "../../utils/toast/toastCustom";
  import authStore from "../../stores/authStore";
  import { generateReport } from "../../utils/functions/generateReport";
  import userMealStore from "../../stores/userMealStore";
  // import { socket } from "../../utils/socket/socket";
  import { fade, slide } from "svelte/transition";
  import { MealDeleteModal } from "..";

  //   add pagination
  let rowsPerPage = 10;
  let currentPage = 0;
  $: start = currentPage * rowsPerPage;
  $: end = Math.min(start + rowsPerPage, $userMealStore.userMeals.length);
  $: slice = $userMealStore.userMeals.slice(start, end);
  $: lastPage = Math.max(
    Math.ceil($userMealStore.userMeals.length / rowsPerPage) - 1,
    0
  );

  $: if (currentPage > lastPage) {
    currentPage = lastPage;
  }

  let deleteModalOpened = false;
  let currentDeletingMealId = null;

  // update management meal store for updating
  const updateManagementStore = (item) => {
    $userMealStore.plannedCalories = item.plannedCalories;
    manageMealStore.update((mealStore) => {
      return {
        ...mealStore,
        id: item.id,
        selectedDate: item.selectedDate,
        breakfast: item.breakfast,
        lunch: item.lunch,
        snack: item.snack,
        dinner: item.dinner,
      };
    });
  };

  // confirm meal delete before deleting
  const checkDeleteConfirmation = (id) => {
    deleteModalOpened = true;
    currentDeletingMealId = id;
  };

  // delete single meal
  const deleteMeal = async (id) => {
    currentDeletingMealId = null;
    deleteModalOpened = false;
    $userMealStore.userMeals = $userMealStore.userMeals.filter(
      (meal) => meal.id !== id
    );

    // delete meal from the database
    await axios.delete(`${mainMealRoute}${id}/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${$authStore.token.access}`,
      },
    });

    // socket.on("meal_deleted", (mealId) => {
    //   $userMealStore.userMeals = $userMealStore.userMeals.filter(
    //     (meal) => meal.id !== mealId
    //   );
    // });
    toast.push("Meal Deleted Successfully.", { theme: successClasses });
  };
</script>

<section>
  <!-- meal delete confirmation modal -->
  <MealDeleteModal
    {deleteModalOpened}
    on:closeModal={() => (deleteModalOpened = false)}
    on:deleteMeal={() => deleteMeal(currentDeletingMealId)}
  />

  <!-- title -->
  <h1 class="mt-5 mb-3 font-bold font-[Roboto] text-2xl">Your Meals</h1>

  <!-- meals table -->
  <div class="">
    <div class="border-y-[0.3px] border-gray-400">
      <div
        class="font-[Alkatra] font-bold text-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 w-full"
      >
        <div class="flex">
          <p class="cell w-[60px]">ID</p>
          <p class="cell whitespace-nowrap flex-grow">Created Date</p>
        </div>

        <Cell class="cell">Breakfast</Cell>
        <Cell class="cell" numeric>Lunch</Cell>
        <Cell class="cell">Snack</Cell>
        <Cell class="cell">Dinner</Cell>
        <Cell class="cell">Manage</Cell>
      </div>
    </div>

    <!-- meals table body -->
    <div
      class="border-b-[0.3px] border-gray-400 font-[Alkatra] text-[13px] font-light"
    >
      {#each slice as item}
        <div
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 w-full"
        >
          <!-- id and selected Date -->
          <div class="flex">
            <p class="cell w-[60px] justify-center">
              {item.id}
            </p>
            <p class="cell flex-grow justify-center">
              {item.selectedDate}
            </p>
          </div>

          <!-- breakfast -->
          <Cell class="cell">
            <div>
              {#each item.breakfast as meal, index}
                <p in:fade out:slide|local>{index + 1}. {meal.title}</p>
              {/each}
            </div>
          </Cell>

          <!-- lunch -->
          <Cell class="cell">
            <div>
              {#each item.lunch as meal, index}
                <p in:fade out:slide|local>{index + 1}. {meal.title}</p>
              {/each}
            </div>
          </Cell>

          <!-- snack -->
          <Cell class="cell">
            <div>
              {#each item.snack as meal, index}
                <p in:fade out:slide|local>{index + 1}. {meal.title}</p>
              {/each}
            </div>
          </Cell>

          <!-- dinner -->
          <Cell class="cell">
            <div>
              {#each item.dinner as meal, index}
                <p in:fade out:slide|local>{index + 1}. {meal.title}</p>
              {/each}
            </div>
          </Cell>

          <!-- managing meal data -->
          <Cell class="cell justify-center">
            <!-- edit meal  -->
            <div class="flex gap-3 justify-center items-center text-lg">
              <button
                class="text-[#34a470] hover:scale-[1.01]"
                on:click={() => updateManagementStore(item)}
              >
                <Icon icon="material-symbols:edit" />
              </button>

              <!-- delete meal -->
              <button
                class="text-[#a43449] hover:scale-[1.01]"
                on:click={() => checkDeleteConfirmation(item.id)}
              >
                <Icon icon="ic:sharp-delete" />
              </button>

              <!-- generate report -->
              <button
                class="text-[#4a34a4] hover:scale-[1.01]"
                on:click={() => generateReport(item, $authStore.userName)}
              >
                <Icon icon="mdi:file-report" />
              </button>
            </div>
          </Cell>
        </div>
      {/each}
    </div>
  </div>

  <!-- pagination -->
  <div class=" font-[Alaktra] flex w-full gap-4 mt-2">
    <div class="text-lg">
      <Label>Rows Per Page</Label>
      <select bind:value={rowsPerPage}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </div>

    <div class="whitespace-nowrap text-lg">
      {start + 1}-{end} of {$userMealStore.userMeals.length}
    </div>

    <div class="flex text-xl gap-3">
      <button on:click={() => (currentPage = 0)} disabled={currentPage === 0}
        ><Icon icon="mdi:skip-previous" class="cursor-pointer" /></button
      >
      <button on:click={() => currentPage--} disabled={currentPage === 0}
        ><Icon icon="ic:baseline-arrow-left" class="cursor-pointer" /></button
      >
      <button on:click={() => currentPage++} disabled={currentPage === lastPage}
        ><Icon icon="ic:baseline-arrow-right" class="cursor-pointer" /></button
      >
      <button
        on:click={() => (currentPage = lastPage)}
        disabled={currentPage === lastPage}
        ><Icon icon="mdi:skip-next" class="cursor-pointer" /></button
      >
    </div>
  </div>
</section>
