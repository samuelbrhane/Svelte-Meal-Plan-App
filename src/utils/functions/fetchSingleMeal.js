import { mainMealRoute } from "../routes/mealRoutes";

let loading = true;
let userMeal = [];
let errorMessage = "";
export const fetchSingleMeal = async (selectedDate, token) => {
  console.log("meal fetched");
  loading = true;
  const response = await fetch(`${mainMealRoute}date/${selectedDate}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  });
  if (response.ok) {
    const data = await response.json();
    userMeal = data;
    errorMessage = "";
  } else {
    errorMessage = "No Meal Is Created For This Date.";
  }
  loading = false;

  return { loading, userMeal, errorMessage };
};
