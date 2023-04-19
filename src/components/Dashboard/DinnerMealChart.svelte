<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalDinnerProtein = 0;
  export let totalDinnerFats = 0;
  export let totalDinnerCarbs = 0;
  let sample = 100;
  if (totalDinnerProtein > 0) sample = 0;

  let chartInstance;

  const createChart = () => {
    const dinnerCtx = document.getElementById("dinnerChart");
    chartInstance = new Chart(dinnerCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalDinnerProtein;
    chartInstance.data.datasets[0].data[1] = totalDinnerFats;
    chartInstance.data.datasets[0].data[2] = totalDinnerCarbs;
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
  data = [totalDinnerProtein, totalDinnerFats, totalDinnerCarbs, sample];

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
          text: "Dinner Nutrients Chart",
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
  <canvas id="dinnerChart" class="chartCard" />
</div>
