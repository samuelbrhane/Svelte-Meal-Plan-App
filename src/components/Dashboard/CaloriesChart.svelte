<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js/auto";

  export let totalCalories;
  export let totalCarbs;
  export let totalProtein;
  export let totalFats;
  export let sample;
  export let averageCarbs;
  export let averageProtein;
  export let averageFats;

  let chart;

  // create a pie chart
  const createChart = () => {
    let ctx = document.getElementById("caloriesPieChart");
    chart = new Chart(ctx, nutrientData);
  };

  onMount(createChart);

  // Create pie chart data
  const nutrientData = {
    type: "doughnut",
    data: {
      datasets: [
        {
          backgroundColor: ["#32aac898", "#c832a798", "#85a33498", "#a34a346d"],
          data: [
            averageProtein || 0,
            averageFats || 0,
            averageCarbs || 0,
            sample,
          ],
        },
      ],
      labels: ["Protein", "Fat", "Carbs", "Sample"],
    },
  };

  // redraw the chart when variables change
  $: {
    if (chart) {
      chart.data.datasets[0].data = [
        averageProtein || 0,
        averageFats || 0,
        averageCarbs || 0,
        sample,
      ];
      chart.update();
    }
  }
</script>

<section class="">
  <h1 class="font-[Roboto] font-semibold text-2xl mb-3">Nutrients</h1>

  <div class="flex flex-col 2xl:flex-row">
    <div class="2xl:w-[65%]">
      <p class="font-semibold text-sm font-[Merriweather] text-center mb-3">
        PERCENT CALORIES FROM
      </p>
      <!-- Pie Chart for calories -->
      <div class="flex justify-center">
        <canvas id="caloriesPieChart" class=" max-w-[280px] max-h-[200px]" />
      </div>
    </div>

    <div class="2xl:w-[35%]">
      <p
        class="font-semibold text-sm font-[Merriweather] text-center mt-10 mb-4"
      >
        Daily Nutrient Intake
      </p>

      <!-- Recipe total nutrients -->
      <div class="flex justify-center font-[Alkatra]">
        <div class="w-full">
          <div class="flex justify-between mb-1">
            <p>Calories</p>
            <p>{parseInt(totalCalories)} kcal</p>
          </div>
          <div class="flex justify-between text-[#85a33498] mb-1">
            <p>Carbs</p>
            <p>{parseInt(totalCarbs)} g</p>
          </div>
          <div class="flex justify-between text-[#c832a798] mb-1">
            <p>Fats</p>
            <p>{parseInt(totalFats)} g</p>
          </div>
          <div class="flex justify-between text-[#32aac898] mb-1">
            <p>Protein</p>
            <p>{parseInt(totalProtein)} g</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
