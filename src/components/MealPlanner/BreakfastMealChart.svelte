<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalBreakfastProtein;
  export let totalBreakfastFats;
  export let totalBreakfastCarbs;

  let chartInstance;

  const createChart = () => {
    const breakfastCtx = document.getElementById("breakfastChart");
    chartInstance = new Chart(breakfastCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalBreakfastProtein;
    chartInstance.data.datasets[0].data[1] = totalBreakfastFats;
    chartInstance.data.datasets[0].data[2] = totalBreakfastCarbs;
    chartInstance.update();
  };

  onMount(() => {
    createChart();
  });

  afterUpdate(() => {
    updateChart();
  });

  const nutrientData = {
    type: "polarArea",
    data: {
      datasets: [
        {
          data: [
            totalBreakfastProtein,
            totalBreakfastFats,
            totalBreakfastCarbs,
          ],
          backgroundColor: ["#32aac898", "#c832a798", "#85a33498"],
        },
      ],
      labels: ["Protein", "Fats", "Carbs"],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 18,
            },
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Breakfast Nutrients Chart",
          color: "#a3a234",
          font: {
            size: 18,
          },
        },
      },
    },
  };
</script>

<div>
  <canvas id="breakfastChart" class="max-w-[300px] max-h-[300px]" />
</div>
