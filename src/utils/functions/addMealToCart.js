export const addMealToCart = (store, modifyStore, formattedItem) => {
  switch (modifyStore.selectedMeal) {
    // add breakfast
    case "breakfast":
      // check meal already exists
      let breakfastMealExists = modifyStore.breakfast.find(
        (meal) => meal.uri == formattedItem.uri
      );

      // add meal to breakfast list
      if (!breakfastMealExists) {
        store.update((mealData) => {
          return {
            ...mealData,
            breakfast: [...mealData.breakfast, formattedItem],
          };
        });
      }
      break;

    // add lunch
    case "lunch":
      // check meal already exists
      let lunchMealExists = modifyStore.lunch.find(
        (meal) => meal.uri == formattedItem.uri
      );
      // add meal to lunch list
      if (!lunchMealExists) {
        store.update((mealData) => {
          return {
            ...mealData,
            lunch: [...mealData.lunch, formattedItem],
          };
        });
      }
      break;

    // add snack
    case "snack":
      // check meal already exists
      let snackMealExists = modifyStore.snack.find(
        (meal) => meal.uri == formattedItem.uri
      );
      // add meal to snack list
      if (!snackMealExists) {
        store.update((mealData) => {
          return {
            ...mealData,
            snack: [...mealData.snack, formattedItem],
          };
        });
      }
      break;

    // add dinner
    case "dinner":
      // check meal already exists
      let dinnerMealExists = modifyStore.dinner.find(
        (meal) => meal.uri == formattedItem.uri
      );
      // add meal to dinner list
      if (!dinnerMealExists) {
        store.update((mealData) => {
          return {
            ...mealData,
            dinner: [...mealData.dinner, formattedItem],
          };
        });
      }
      break;

    default:
      break;
  }
};
