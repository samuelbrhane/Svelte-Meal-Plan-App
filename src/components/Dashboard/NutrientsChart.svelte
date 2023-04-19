<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalProtein = 0;
  export let totalFats = 0;
  export let totalCarbs = 0;
  export let id = "";
  export let title = "";
  let sample = 100;
  if (totalCarbs > 0) sample = 0;

  let chartInstance;

  const createChart = () => {
    const nutrientCtx = document.getElementById(id);
    chartInstance = new Chart(nutrientCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalProtein;
    chartInstance.data.datasets[0].data[1] = totalFats;
    chartInstance.data.datasets[0].data[2] = totalCarbs;
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
  data = [totalProtein, totalFats, totalCarbs, sample];

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
          text: title,
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
  <canvas {id} class="chartCard" />
</div>
