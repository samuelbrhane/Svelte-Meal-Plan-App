<script>
  import { onMount } from "svelte";
  import { FoodCard, PaginationBtn } from "..";
  import { recipeStore } from "../../stores/recipeStore";
  import Icon from "@iconify/svelte";
  let recipeData = [];
  let loading = true;
  let currentPage = 1;
  let dataPerPage = 5;
  const tableLabel1 = ["Image", "Name"];
  const tableLabel2 = ["Calories", "Carbs", "Fats", "Protein"];
  $: indexOfLastPage = currentPage * dataPerPage;
  $: indexOfFirstPage = indexOfLastPage - dataPerPage;

  //   subscribe to recipe data store
  onMount(() => {
    const unsubscribe = recipeStore.subscribe((value) => {
      recipeData = value.data;
      loading = value.loading;
    });
    return unsubscribe;
  });

  // sort recipe data
  const sortData = (item, direction) => {
    // sort by calories
    if (item == "Calories") {
      if (direction == "ascending") {
        // order recipe data in ascending order
        recipeData = [
          ...recipeData.sort((a, b) => a.recipe.calories - b.recipe.calories),
        ];
      } else {
        // order recipe data in descending order
        recipeData = [
          ...recipeData.sort((a, b) => b.recipe.calories - a.recipe.calories),
        ];
      }
    }

    // sort by carbs, fats and protein
    let index;
    // change index based on item name
    switch (item) {
      case "Carbs":
        index = 1;
        break;
      case "Fats":
        index = 0;
        break;
      case "Protein":
        index = 2;
        break;
      default:
        break;
    }

    if (direction == "ascending") {
      // order recipe data in ascending order
      recipeData = [
        ...recipeData.sort(
          (a, b) => a.recipe.digest[index].total - b.recipe.digest[index].total
        ),
      ];
    } else {
      // order recipe data in descending order
      recipeData = [
        ...recipeData.sort(
          (a, b) => b.recipe.digest[index].total - a.recipe.digest[index].total
        ),
      ];
    }
  };
</script>

<section class="border-[0.6px] border-gray-400 w-full">
  <!-- Table content -->
  <div
    class="w-full flex flex-col md:flex-row items-center border-b-[0.6px] border-gray-400 font-[Merriweather] font-semibold italic"
  >
    <div class="flex items-center w-full">
      {#each tableLabel1 as item}
        <div class={`${item == "Image" ? "w-[30%]" : "w-[70%]"} tableLabel`}>
          <p>{item}</p>
        </div>
      {/each}
    </div>

    <div
      class="grid grid-cols-4 w-full border-gray-400 border-t-[0.5px] md:border-none"
    >
      {#each tableLabel2 as item}
        <div class="tableLabel">
          <p>{item}</p>

          <div class="flex flex-col ml-2 text-[#309eb7]">
            <button
              class="hover:scale-[1.02px]"
              on:click={() => sortData(item, "ascending")}
              ><Icon
                icon="material-symbols:keyboard-arrow-up-rounded"
              /></button
            >

            <button
              class="hover:scale-[1.02px]"
              on:click={() => sortData(item, "descending")}
              ><Icon
                icon="material-symbols:keyboard-arrow-down-rounded"
              /></button
            >
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Food Information Card -->
  {#if loading}
    <!-- return loading when fetching data -->
    <div class="w-full h-full flex justify-center mt-16">
      <img src="/loader.gif" alt="loaderImage" class="w-[200px] h-[200px]" />
    </div>
  {:else}
    {#each recipeData.slice(indexOfFirstPage, indexOfLastPage) as item}
      <FoodCard {item} />
    {/each}

    <!-- pagination -->
    <div>
      <div class="flex items-center justify-between px-4 pt-2 font-[Alkatra]">
        <p>
          Result {indexOfFirstPage + 1} - {indexOfLastPage} out of {recipeData.length}
        </p>
        <p>
          Page {Math.ceil(indexOfLastPage / dataPerPage)} of {Math.ceil(
            recipeData.length / dataPerPage
          )}
        </p>
      </div>

      <!-- pagination btn -->
      <PaginationBtn
        {dataPerPage}
        {recipeData}
        {currentPage}
        on:changePage={(e) => (currentPage = e.detail)}
      />
    </div>
  {/if}
</section>
