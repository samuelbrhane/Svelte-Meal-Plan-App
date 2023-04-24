<script>
  export let userMeals;
  export let formattedDate;
  import Drawer, { AppContent, Content } from "@smui/drawer";
  import List, { Item } from "@smui/list";
  import { flip } from "svelte/animate";
  import { fade, slide } from "svelte/transition";

  let clickedMeal = "";

  let healthLabel;

  let findDay;

  $: {
    findDay = userMeals.find(
      (meal) => meal.selectedDate.toString() == formattedDate
    );
    handleClick("breakfast");
  }

  const handleClick = (mealType) => {
    clickedMeal = mealType;
    if (findDay) {
      switch (mealType) {
        case "breakfast":
          healthLabel = findDay.breakfast;
          break;
        case "lunch":
          healthLabel = findDay.lunch;
          break;
        case "snack":
          healthLabel = findDay.snack;
          break;
        case "dinner":
          healthLabel = findDay.dinner;
          break;

        default:
          break;
      }
    }
  };
</script>

<section class="mt-4">
  <h1 class="font-[Roboto] font-semibold text-2xl mb-3">Health Labels</h1>

  <div class="flex mt-3 gap-8">
    <Drawer>
      <Content>
        <List class="flex flex-col gap-6 w-[130px] text-center">
          <!-- breakfast health label button -->
          <Item
            href="javascript:void(0)"
            on:click={() => handleClick("breakfast")}
          >
            <p
              class={`labelText w-full bg-[#7c7c7b45] py-1 rounded hover:bg-[#9cd6e7] ${
                clickedMeal == "breakfast" && "bg-[#9cd6e7]"
              }`}
            >
              Breakfast
            </p>
          </Item>

          <!-- lunch health label button -->
          <Item href="javascript:void(0)" on:click={() => handleClick("lunch")}>
            <p
              class={`labelText w-full bg-[#7c7c7b45] py-1 rounded hover:bg-[#9cd6e7] ${
                clickedMeal == "lunch" && "bg-[#9cd6e7]"
              }`}
            >
              Lunch
            </p>
          </Item>

          <!-- snack health label button -->
          <Item href="javascript:void(0)" on:click={() => handleClick("snack")}>
            <p
              class={`labelText w-full bg-[#7c7c7b45] py-1 rounded hover:bg-[#9cd6e7] ${
                clickedMeal == "snack" && "bg-[#9cd6e7]"
              }`}
            >
              Snack
            </p>
          </Item>

          <!-- dinner health label button -->
          <Item
            href="javascript:void(0)"
            on:click={() => handleClick("dinner")}
          >
            <p
              class={`labelText w-full bg-[#7c7c7b45] py-1 rounded hover:bg-[#9cd6e7] ${
                clickedMeal == "dinner" && "bg-[#9cd6e7]"
              }`}
            >
              Dinner
            </p>
          </Item>
        </List>
      </Content>
    </Drawer>

    <!-- health label list -->
    <AppContent class="pt-3">
      {#if findDay}
        {#if healthLabel}
          <div
            class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-3"
          >
            {#each healthLabel[0].healthLabels.slice(0, 18) as item (item)}
              <p
                in:slide
                animate:flip={{ duration: 50 }}
                class="font-[Alkatra] text-sm mb-1 border-[#721cb4] border-dotted border-[0.5px] px-1 py-1"
              >
                {item}
              </p>
            {/each}
          </div>
        {/if}
      {:else}
        <p class="font-[Alkatra]">Please Create Meal Plan First.</p>
      {/if}
    </AppContent>
  </div>
</section>
