const classicFoods = ["Wheat", "Pasta", "Bread", "Fruits", "Meat"];
const ketoFoods = ["Fish", "Seafood", "Cheese", "Avocado", "Poultry"];
const paleoFoods = ["Fruit", "Meats", "Eggs", "Nuts", "Seeds"];
const veganFoods = ["Vegetables", "Rice", "Pastas", "Beans", "Coconuts"];
const vegetarianFoods = ["Nuts", "Fruits", "Vegetables", "Broccoli", "Cereal"];
const pescetarianFoods = ["Fish", "Fruits", "Seitan", "Cheese", "Eggs"];

export const dietMeals = (authStore) => {
  const randomIndex = Math.floor(Math.random() * classicFoods.length);
  let searchWord;

  switch (authStore) {
    case "Classic":
      return (searchWord = classicFoods[randomIndex]);

    case "Keto":
      return (searchWord = ketoFoods[randomIndex]);

    case "Paleo":
      return (searchWord = paleoFoods[randomIndex]);

    case "Vegan":
      return (searchWord = veganFoods[randomIndex]);

    case "Vegetarian":
      return (searchWord = vegetarianFoods[randomIndex]);

    case "Pescetarian":
      return (searchWord = pescetarianFoods[randomIndex]);

    default:
      return (searchWord = classicFoods[randomIndex]);
  }
};
