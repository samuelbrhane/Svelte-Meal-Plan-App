<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalSnackProtein;
  export let totalSnackFats;
  export let totalSnackCarbs;

  let chartInstance;

  const createChart = () => {
    const snackCtx = document.getElementById("snackChart");
    chartInstance = new Chart(snackCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalSnackProtein;
    chartInstance.data.datasets[0].data[1] = totalSnackFats;
    chartInstance.data.datasets[0].data[2] = totalSnackCarbs;
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
          data: [totalSnackProtein, totalSnackFats, totalSnackCarbs],
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
          text: "Snack Nutrients Chart",
          color: "#a3a234",
          font: {
            size: 18,
          },
        },
      },
    },
  };
</script>

<div class="mb-2">
  <canvas id="snackChart" class="max-w-[300px] max-h-[300px]" />
</div>
