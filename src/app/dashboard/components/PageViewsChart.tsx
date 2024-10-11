// src/app/dashboard/components/PageViewsChart.tsx
'use client';

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { useState } from "react";

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function PageViewsChart() {
  const [pageViews, setPageViews] = useState([120, 200, 150, 300, 280]);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Page Views",
        data: pageViews,
        borderColor: "#4B9CD3",
        backgroundColor: "rgba(75, 156, 211, 0.5)",
        fill: true,
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
    <div className="w-full h-96 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Page Views</h3>
      <Line data={data} options={options} />
    </div>
  );
}
