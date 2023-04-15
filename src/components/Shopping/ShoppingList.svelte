<script>
  import mealStore from "../../stores/mealStore";
  export let currentDate;
  $: currentDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  $: mealStoreData = [
    ...$mealStore.breakfast,
    ...$mealStore.lunch,
    ...$mealStore.snack,
    ...$mealStore.dinner,
  ];

  //   get shopping list for all meal
  $: shoppingLists = mealStoreData.map((mealData) => {
    let mealList = [];
    mealData.recipe.ingredients.forEach((ingredient) => {
      mealList.push(ingredient.food);
    });

    return mealList;
  });

  // create a unique shopping list
  $: reducedShoppingList = shoppingLists.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
  $: uniqueShoppingList = [...new Set(reducedShoppingList)];
</script>

{#if uniqueShoppingList.length > 0}
  <h2 class="text-sm text-gray-500 font-[Alkatra] mb-1">
    Here is the list for {currentDate}
  </h2>
  {#each uniqueShoppingList as item}
    <p class="font-[Alkatra] mb-1">
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </p>
  {/each}
{/if}
