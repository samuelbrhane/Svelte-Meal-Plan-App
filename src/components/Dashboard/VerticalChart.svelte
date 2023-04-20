<script>
  import { afterUpdate, onMount } from "svelte";
  export let days;
  export let carbs;
  export let fats;
  export let protein;
  $: console.log("carbs", carbs);

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
    const caloriesCtx = document.getElementById("combinedChart");
    return new Chart(caloriesCtx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Carbs",
            data: carbs,
            backgroundColor: [
              "#85a33498",
              "#85a33498",
              "#85a33498",
              "#85a33498",
              "#85a33498",
              "#85a33498",
              "#85a33498",
            ],
          },
          {
            label: "Protein",
            data: protein,
            backgroundColor: [
              "#32aac898",
              "#32aac898",
              "#32aac898",
              "#32aac898",
              "#32aac898",
              "#32aac898",
              "#32aac898",
            ],
          },
          {
            label: "Fats",
            data: fats,
            backgroundColor: [
              "#c832a798",
              "#c832a798",
              "#c832a798",
              "#c832a798",
              "#c832a798",
              "#c832a798",
              "#c832a798",
            ],
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
          title: {
            display: true,
            text: "Combined Nutrients Chart",
          },
        },
      },
    });
  };
</script>

<canvas id="combinedChart" class="w-full max-h-[70vh]" />
