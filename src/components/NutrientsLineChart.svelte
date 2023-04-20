<script>
  import { onMount, afterUpdate } from "svelte";
  export let days = [];
  export let data = [];
  export let labelName;

  let chart = null;

  const redrawChart = () => {
    if (chart) {
      chart.destroy();
    }
    chart = createChart(days);
  };

  onMount(() => {
    chart = createChart(days);
  });

  afterUpdate(() => {
    redrawChart();
  });

  const createChart = (days) => {
    const caloriesCtx = document.getElementById("chart");
    return new Chart(caloriesCtx, {
      type: "line",
      data: {
        datasets: [
          {
            label: labelName,
            data: data,
            backgroundColor: [
              "#368ea4",
              "#f456c1",
              "#c34ac3",
              "#a46579",
              "#98bc34",
              "#7b36da",
              "#ba5adf",
            ],
            tension: 0.5,
            cubicInterpolationMode: "monotone",
          },
        ],
        labels: [...days],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  };
</script>

<canvas id="chart" class="w-full max-h-[70vh]" />
