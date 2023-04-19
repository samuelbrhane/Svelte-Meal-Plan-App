<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalBreakfastProtein = 0;
  export let totalBreakfastFats = 0;
  export let totalBreakfastCarbs = 0;
  let sample = 100;
  if (totalBreakfastCarbs > 0) sample = 0;

  let chartInstance;

  const createChart = () => {
    const breakfastCtx = document.getElementById("breakfastChart");
    chartInstance = new Chart(breakfastCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalBreakfastProtein;
    chartInstance.data.datasets[0].data[1] = totalBreakfastFats;
    chartInstance.data.datasets[0].data[2] = totalBreakfastCarbs;
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
  data = [
    totalBreakfastProtein,
    totalBreakfastFats,
    totalBreakfastCarbs,
    sample,
  ];

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
          text: "Breakfast Nutrients Chart",
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
  <canvas id="breakfastChart" class="chartCard" />
</div>
