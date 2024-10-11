// src/app/dashboard/components/PageViewsChart.tsx
import { Line } from "react-chartjs-2";

type PageViewsChartProps = {
  data: number[];
};

export default function PageViewsChart({ data }: PageViewsChartProps) {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Page Views",
        data: data,
        borderColor: "#4B9CD3",
        backgroundColor: "rgba(75, 156, 211, 0.5)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
}
