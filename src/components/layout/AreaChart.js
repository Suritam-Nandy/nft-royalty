import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Filler
);
export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    // point: {
    //   radius: 0,
    // },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["Aug ‘22", "Sept ‘22", "Oct ‘22", "Nov ‘22", "Dec ‘22"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,

      data: [86, 12, 221, 783, 248],
      hoverBorderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(31, 120, 180, 0.8)",
      hoverBackgroundColor: "rgba(138, 120, 180, 0.8)",
    },
    {
      fill: true,

      data: [168, 56, 547, 675, 734],
      hoverBorderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(255, 114, 148, 0.8)",
    },
    {
      fill: true,

      data: [282, 456, 402, 370, 526],
      hoverBorderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(79, 192, 255, 0.8)",
    },
  ],
};

const AreaChart = () => {
  return <Line options={options} data={data} />;
};

export default AreaChart;
