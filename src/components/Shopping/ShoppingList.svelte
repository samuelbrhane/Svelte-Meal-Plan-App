<script>
  export let selectedDayData;

  $: mealStoreData = [
    ...selectedDayData?.breakfast,
    ...selectedDayData?.lunch,
    ...selectedDayData?.snack,
    ...selectedDayData?.dinner,
  ];

  //   get shopping list for all meal
  $: shoppingLists = mealStoreData.map((mealData) => {
    let mealList = [];
    mealData.ingredients.forEach((ingredient) => {
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

<h2 class="text-sm text-gray-500 font-[Alkatra] mb-1">
  Here is the list for {selectedDayData.selectedDate}
</h2>
<div class="flex gap-3 flex-wrap mt-2">
  {#each uniqueShoppingList.sort(() => Math.random() - 0.5) as item}
    <p
      class="font-[Alkatra] mb-1 w-[240px] border-[#721cb4] border-dotted border-[0.5px] px-2 py-1"
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </p>
  {/each}
</div>
