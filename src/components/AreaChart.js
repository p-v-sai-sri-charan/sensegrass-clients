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
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: true,
      text: "Sales Analytics",
      align: "start",
      padding: {
        bottom: 30,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 10000,
      ticks: {
        stepSize: 2000,
      },
    },
  },
};

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const createGradient = (ctx) => {
  const chart = ctx.chart;
  const { ctx: context, chartArea } = chart;
  if (!chartArea) {
    return null;
  }

  const gradient = context.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, "white"); 

  gradient.addColorStop(1, "rgb(99, 72, 50)"); 

  return gradient;
};
export const monthyData = {
  labels: monthLabels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [
        5000, 2000, 3000, 4000, 6000, 7000, 8000, 9000, 10000, 5000, 2000, 3000,
      ],
      borderColor: "rgb(99, 72, 50)",
      tension: 0.1,
      backgroundColor: createGradient,
    },
  ],
};

function AreaChart() {
  return (
    <div className="my-4 px-2">
      <Line options={options} data={monthyData} />
    </div>
  );
}

export default AreaChart;
