// src/app/dashboard/components/TrafficSourcesChart.tsx
'use client';

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useState } from "react";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TrafficSourcesChart() {
  const [trafficSources, setTrafficSources] = useState({
    direct: 300,
    search: 200,
    social: 150,
    referral: 100,
  });

  const data = {
    labels: ["Direct", "Search", "Social", "Referral"],
    datasets: [
      {
        label: "Traffic Sources",
        data: Object.values(trafficSources),
        backgroundColor: ["#4B9CD3", "#A3BE8C", "#D08770", "#EBCB8B"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#e0e0e0" } },
    },
  };

  return (
    <div className="w-full h-96 bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4">Traffic Sources</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
