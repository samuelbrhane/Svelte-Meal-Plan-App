<script>
  export let recipeData = {};
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  export let serving = 1;
  let openNutrientInfo = false;
  let proteinData = recipeData.recipe.digest[2].total;
  let fatData = recipeData.recipe.digest[0].total;
  let carbsData = recipeData.recipe.digest[1].total;
  const total = proteinData + fatData + carbsData;

  // create a pie chart
  const createChart = () => {
    let ctx = document.getElementById("myChart");
    new Chart(ctx, nutrientData);
  };

  onMount(createChart);

  // Create pie chart data
  const nutrientData = {
    type: "doughnut",
    data: {
      datasets: [
        {
          backgroundColor: ["#6A72E3", "#21B4B9", "#CC38B1"],
          data: [
            ((proteinData * 100) / total).toFixed(2),
            ((fatData * 100) / total).toFixed(2),
            ((carbsData * 100) / total).toFixed(2),
          ],
        },
      ],
      labels: ["Protein", "Fat", "Carbs"],
    },
    options: {
      plugins: {
        datanumbers: {
          color: "#fff",
          font: {
            size: "20",
          },
          formatter: function (value, ctx) {
            return ctx.dataset.labels[ctx.dataIndex] + ": " + value + "%";
          },
        },
      },
    },
  };
</script>

<section>
  <h1 class="font-[Roboto] font-semibold text-2xl mb-3">Nutrients</h1>
  <p class="font-semibold text-sm font-[Merriweather] text-center mb-3">
    PERCENT CALORIES FROM
  </p>

  <!-- Pie Chart for calories -->
  <div class="flex justify-center">
    <canvas id="myChart" class="max-w-[300px] max-h-[300px]" />
  </div>

  <p class="font-semibold text-sm font-[Merriweather] text-center mt-10 mb-4">
    Recipe Totals
  </p>

  <!-- Recipe total nutrients -->
  <div class="flex justify-center font-[Alkatra]">
    <div class="w-[300px]">
      <div class="flex justify-between mb-1">
        <p>Calories</p>
        <p>{((serving * recipeData.recipe.calories) / 4).toFixed(2)} kcal</p>
      </div>
      <div class="flex justify-between text-[#CC38B1] mb-1">
        <p>Carbs</p>
        <p>{((serving * carbsData) / 6).toFixed(2)} g</p>
      </div>
      <div class="flex justify-between text-[#21B4B9] mb-1">
        <p>Fats</p>
        <p>{((serving * fatData) / 2.4).toFixed(2)} g</p>
      </div>
      <div class="flex justify-between text-[#6A72E3] mb-1">
        <p>Protein</p>
        <p>{((serving * proteinData) / 2.8).toFixed(2)} g</p>
      </div>
    </div>
  </div>

  <!-- Detail nutrients data -->
  <div class="flex flex-col items-center my-4">
    <button
      on:click={() => (openNutrientInfo = !openNutrientInfo)}
      class="font-semibold text-sm font-[Alkatra] text-center justify-center w-[300px] py-3 rounded bg-[#7ed8ea3d] text-black flex items-center gap-2 hover:scale-[1.02]"
    >
      <span class="border-r-[0.5px] border-[#2a234a] px-2">
        Detailed Nutrients Information
      </span>
      <Icon icon="mdi:format-vertical-align-bottom" class="text-xl" />
    </button>

    {#if openNutrientInfo}
      <div class="w-[300px] font-[Alkatra] my-3 duration-1000 ease-in-out">
        <h2
          class="text-center mb-2 font-[Merriweather] text-[#c440cd] font-semibold"
        >
          Based on {serving} serving
        </h2>
        {#each recipeData.recipe.digest as nutrient}
          <div class="flex justify-between items-center mb-1">
            <p>{nutrient.label}</p>
            <p>{(serving * nutrient.total).toFixed(2)} {nutrient.unit}</p>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
