<script>
  import { onMount, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import Chart from "chart.js/auto";

  export let averageCalorieAdded;

  const caloriesData = writable([
    averageCalorieAdded,
    100 - averageCalorieAdded,
  ]);
  let chart;

  onMount(() => {
    chart = createChart();
    caloriesData.subscribe((values) => {
      chart.data.datasets[0].data = values;
      chart.update();
    });
  });

  onDestroy(() => {
    chart.destroy();
  });

  const createChart = () => {
    const caloriesCtx = document.getElementById("caloriesChart");
    let caloriesValue = averageCalorieAdded;
    let leftValue = 100 - averageCalorieAdded;
    if (averageCalorieAdded >= 100) {
      caloriesValue = 100;
      leftValue = 0;
      caloriesData.set([100, 0]);
    }
    return new Chart(caloriesCtx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [caloriesValue, leftValue],
            backgroundColor: ["#fa4ac8", "#fa4ac82c"],
          },
        ],
        labels: ["calorie added", "calorie left"],
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

  $: {
    if (averageCalorieAdded >= 100) {
      caloriesData.set([100, 0]);
    } else {
      caloriesData.set([averageCalorieAdded, 100 - averageCalorieAdded]);
    }
  }
</script>

<canvas id="caloriesChart" class="max-w-[300px] max-h-[200px]" />
