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

  // update management meal store for updating
  const updateManagementStore = (item) => {
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

  // delete single meal
  const deleteMeal = async (id) => {
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

    toast.push("Meal Deleted Successfully.", { theme: successClasses });
  };
</script>

<section>
  <!-- title -->
  <h1 class="mt-5 mb-3 font-bold font-[Roboto] text-2xl">Your Meals</h1>

  <!-- meals table -->
  <DataTable table$aria-label="Todo list" style="width: 100%;">
    <Head class="border-y-[0.3px] border-gray-400">
      <Row class="font-[Alkatra] font-bold text-lg">
        <Cell class="cell">ID</Cell>
        <Cell class="cell whitespace-nowrap">Created Date</Cell>
        <Cell class="cell">Breakfast</Cell>
        <Cell class="cell" numeric>Lunch</Cell>
        <Cell class="cell">Snack</Cell>
        <Cell class="cell">Dinner</Cell>
        <Cell class="cell">Manage</Cell>
      </Row>
    </Head>

    <!-- meals table body -->
    <Body
      class="border-b-[0.3px] border-gray-400 font-[Alkatra] text-sm font-light"
    >
      {#each slice as item}
        <Row class="">
          <Cell class="cell">{item.id}</Cell>
          <Cell class="cell">{item.selectedDate}</Cell>
          <Cell class="cell">
            {#each item.breakfast as meal}
              {meal.title} {"  "}
            {/each}
          </Cell>
          <Cell class="cell">
            {#each item.lunch as meal}
              {meal.title} {"  "}
            {/each}</Cell
          >
          <Cell class="cell">
            {#each item.snack as meal}
              {meal.title} {"  "}
            {/each}</Cell
          >
          <Cell class="cell">
            {#each item.dinner as meal}
              {meal.title} {"  "}
            {/each}</Cell
          >

          <!-- managing meal data -->
          <Cell class="cell">
            <!-- edit meal  -->
            <div class="flex gap-2 justify-between items-center text-lg">
              <button
                class="text-[#34a470] hover:scale-[1.01]"
                on:click={() => updateManagementStore(item)}
              >
                <Icon icon="material-symbols:edit" />
              </button>

              <!-- delete meal -->
              <button
                class="text-[#a43449] hover:scale-[1.01]"
                on:click={() => deleteMeal(item.id)}
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
        </Row>
      {/each}
    </Body>
  </DataTable>

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
