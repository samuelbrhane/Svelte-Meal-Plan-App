import { toast } from "@zerodevx/svelte-toast";
import { mainMealRoute } from "../routes/mealRoutes";
import { errorClasses } from "../toast/toastCustom";

let loading = true;
let userMeals = [];
export const fetchUserMeals = async (userId, token) => {
  loading = true;
  const response = await fetch(`${mainMealRoute}user/${userId}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  });
  if (response.ok) {
    const data = await response.json();
    userMeals = data;
  } else {
    toast.push("Failed to fetch meals", { theme: errorClasses });
  }
  loading = false;

  return { loading, userMeals };
};
