import { toast } from "@zerodevx/svelte-toast";
import { infoClasses } from "../toast/toastCustom";

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
      } else {
        toast.push("Meal already added to meal cart.", { theme: infoClasses });
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
      } else {
        toast.push("Meal already added to meal cart.", { theme: infoClasses });
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
      } else {
        toast.push("Meal already added to meal cart.", { theme: infoClasses });
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
      } else {
        toast.push("Meal already added to meal cart.", { theme: infoClasses });
      }
      break;

    default:
      break;
  }
};
