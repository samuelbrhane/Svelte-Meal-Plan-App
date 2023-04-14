<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalLunchProtein;
  export let totalLunchFats;
  export let totalLunchCarbs;

  let chartInstance;

  const createChart = () => {
    const lunchCtx = document.getElementById("lunchChart");
    chartInstance = new Chart(lunchCtx, nutrientData);
  };

  const updateChart = () => {
    chartInstance.data.datasets[0].data[0] = totalLunchProtein;
    chartInstance.data.datasets[0].data[1] = totalLunchFats;
    chartInstance.data.datasets[0].data[2] = totalLunchCarbs;
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
          data: [totalLunchProtein, totalLunchFats, totalLunchCarbs],
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
          text: "Lunch Nutrients Chart",
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
  <canvas id="lunchChart" class="max-w-[300px] max-h-[300px]" />
</div>
