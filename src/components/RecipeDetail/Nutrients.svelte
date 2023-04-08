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

  <p class="font-semibold text-sm font-[Merriweather] text-center mb-3">
    Recipe Totals
  </p>
</section>
