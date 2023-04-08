<script>
  export let recipeData = {};
  import { onMount } from "svelte";
  export let serving = 1;
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

  <div class="flex justify-center font-[Alkatra]">
    <div class="w-[300px]">
      <div class="flex justify-between mb-1">
        <p>Calories</p>
        <p>{(recipeData.recipe.calories / 10).toFixed(2)} kcal</p>
      </div>
      <div class="flex justify-between text-[#CC38B1] mb-1">
        <p>Carbs</p>
        <p>{carbsData.toFixed(2)} g</p>
      </div>
      <div class="flex justify-between text-[#21B4B9] mb-1">
        <p>Fats</p>
        <p>{fatData.toFixed(2)} g</p>
      </div>
      <div class="flex justify-between text-[#6A72E3] mb-1">
        <p>Protein</p>
        <p>{proteinData.toFixed(2)} g</p>
      </div>
    </div>
  </div>
</section>
