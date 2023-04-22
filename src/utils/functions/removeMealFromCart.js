export const removeMealFromCart = (store, selectedMeal, mealItem) => {
  switch (selectedMeal) {
    // remove meal from breakfast data
    case "breakfast":
      store.update((mealData) => {
        let filterMealData = mealData.breakfast.filter(
          (meal) => meal.uri != mealItem.uri
        );
        return { ...mealData, breakfast: filterMealData };
      });
      break;

    // remove meal from lunch data
    case "lunch":
      store.update((mealData) => {
        let filterMealData = mealData.lunch.filter(
          (meal) => meal.uri != mealItem.uri
        );
        return { ...mealData, lunch: filterMealData };
      });
      break;

    // remove meal from snack data
    case "snack":
      store.update((mealData) => {
        let filterMealData = mealData.snack.filter(
          (meal) => meal.uri != mealItem.uri
        );
        return { ...mealData, snack: filterMealData };
      });
      break;

    // remove meal from dinner data
    case "dinner":
      store.update((mealData) => {
        let filterMealData = mealData.dinner.filter(
          (meal) => meal.uri != mealItem.uri
        );
        return { ...mealData, dinner: filterMealData };
      });
      break;
    default:
      break;
  }
};
