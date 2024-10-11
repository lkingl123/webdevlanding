// src/app/dashboard/components/AnalyticsHeader.tsx
'use client';

import Link from "next/link";

export default function AnalyticsHeader() {
  return (
    <header className="w-full max-w-6xl p-6 flex items-center justify-between bg-white/80 backdrop-blur-md shadow-lg rounded-full mt-4">
      <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
        Web<span className="text-blue-600">Scape</span> Dashboard
      </h1>
      <Link
        href="/"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300 ease-in-out"
      >
        Sign Out
      </Link>
    </header>
  );
}
