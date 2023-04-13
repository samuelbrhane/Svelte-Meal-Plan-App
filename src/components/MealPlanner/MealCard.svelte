<script>
  export let item = {};
  import StarRating from "svelte-star-rating";
  let ratings = [3, 3.5, 4, 4.5, 5];

  // get random rating
  let rating = ratings[Math.floor(Math.random() * ratings.length)];

  // add style and config in rating
  const config = {
    emptyColor: "#ebd5ec",
    fullColor: "#e15fe8",
    size: 21,
  };
  const style = "padding: 12px;";
</script>

<button
  class="flex justify-between gap-4 mb-3 shadow rounded items-center px-4 py-3 flex-col md:flex-row font-[Alkatra] hover:scale-[1.02] hover:shadow-md w-full"
>
  <!-- meal image -->
  <img
    src={item?.recipe?.image}
    alt="mealImage"
    class="h-[120px] w-[130px] rounded-md"
  />

  <div
    class="flex flex-col text-center md:text-start md:flex-row flex-grow justify-between items-center"
  >
    <!-- meal title and rating -->
    <div class="flex flex-col items-center flex-grow gap-2">
      <p>{item?.recipe?.label}</p>
      <StarRating {rating} {config} {style} />
    </div>

    <!-- meal nutrient contents -->
    <div class="text-sm flex flex-col gap-2">
      <p>
        Calories: <span class="text-[#a23495]"
          >{(item?.recipe?.calories / 10).toFixed(2)} kcal</span
        >
      </p>
      <p>
        Protein: <span class="text-[#3472a2]"
          >{item?.recipe?.digest[2].total.toFixed(2)} g</span
        >
      </p>
      <p>
        Fats: <span class="text-[#34a23d]"
          >{item?.recipe?.digest[0].total.toFixed(2)} g</span
        >
      </p>
      <p>
        Carbs: <span class="text-[#5a269e]"
          >{item?.recipe?.digest[1].total.toFixed(2)} g</span
        >
      </p>
    </div>
  </div>
</button>
