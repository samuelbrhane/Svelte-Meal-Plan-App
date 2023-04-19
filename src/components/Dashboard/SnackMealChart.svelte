<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalSnackProtein = 0;
  export let totalSnackFats = 0;
  export let totalSnackCarbs = 0;
  let sample = 100;
  if (totalSnackProtein > 0) sample = 0;

  let chartInstance;

  const createChart = () => {
    const snackCtx = document.getElementById("snackChart");
    chartInstance = new Chart(snackCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalSnackProtein;
    chartInstance.data.datasets[0].data[1] = totalSnackFats;
    chartInstance.data.datasets[0].data[2] = totalSnackCarbs;
    chartInstance.data.datasets[0].data[3] = sample;
    chartInstance.update();
  };

  onMount(() => {
    createChart();
  });

  afterUpdate(() => {
    updateChart();
  });

  let labels;
  let backgroundColor;
  let data;

  labels = ["Protein", "Fats", "Carbs", "Sample"];
  backgroundColor = ["#32aac898", "#c832a798", "#85a33498", "#a34a346d"];
  data = [totalSnackProtein, totalSnackFats, totalSnackCarbs, sample];

  const nutrientData = {
    type: "pie",
    data: {
      datasets: [
        {
          data,
          backgroundColor,
        },
      ],
      labels,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Snack Nutrients Chart",
          color: "#a3affd",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };
</script>

<div class="flex items-center justify-center">
  <canvas id="snackChart" class="chartCard" />
</div>
