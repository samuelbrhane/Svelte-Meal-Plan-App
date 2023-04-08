import { Chart } from "chart.js";

export const chartRenderer = (node, options) => {
  let chart = new Chart(node, options);

  return {
    update(updateOptions) {
      chart.data = updateOptions.data;
      chart.update();
    },
    destroy() {},
  };
};
