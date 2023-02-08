import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    // Change options for ALL labels of THIS CHART
    datalabels: {
      color: "#ffffff",
    },
    legend: {
      borderRadius: 0,
      borderColor: "silver",
      enabled: true,
      margin: 3,
      itemMarginTop: 2,
      itemMarginBottom: 2,
      width: 400,
      itemWidth: 100,
      itemStyle: {
        width: 100,
      },
      position: "right",
      labels: {
        boxHeight: 12,
        boxWidth: 12,
        font: {
          size: 10,
        },
      },
    },
    // legend: {

    // },
  },
};
export const data = {
  labels: [
    "Artist Name 1",
    "Artist Name 2",
    "Partner Brand 1",
    "Partner Brand 2",
    "Artist Name 3",
    "Artist Name 3",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [29, 27, 7, 11, 11, 15],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default DoughnutChart;
