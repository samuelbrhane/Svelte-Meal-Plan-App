<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalLunchProtein = 0;
  export let totalLunchFats = 0;
  export let totalLunchCarbs = 0;
  let sample = 100;
  if (totalLunchProtein > 0) sample = 0;

  let chartInstance;

  const createChart = () => {
    const lunchCtx = document.getElementById("lunchChart");
    chartInstance = new Chart(lunchCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalLunchProtein;
    chartInstance.data.datasets[0].data[1] = totalLunchFats;
    chartInstance.data.datasets[0].data[2] = totalLunchCarbs;
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
  data = [totalLunchProtein, totalLunchFats, totalLunchCarbs, sample];

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
          font: 12,
        },
        title: {
          display: true,
          text: "Lunch Nutrients Chart",
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
  <canvas id="lunchChart" class="chartCard" />
</div>
