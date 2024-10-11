// src/app/dashboard/components/OverviewStats.tsx
'use client';

export default function OverviewStats() {
  const stats = {
    sessions: 1200,
    bounceRate: "45%",
    avgSessionDuration: "2m 30s",
    uniqueVisitors: 850,
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md flex justify-between mt-6">
      {Object.entries(stats).map(([key, value], index) => (
        <div key={index} className="text-center">
          <h3 className="text-xl font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      ))}
    </div>
  );
}
