// src/app/dashboard/components/CTASection.tsx
'use client';

import Link from "next/link";

export default function CTASection({ onLinkSite }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-16 w-full text-center mt-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-indigo-700 opacity-20 mix-blend-overlay"></div>
      <p className="text-white mb-8">Expand your reach and monitor all your online assets in one place.</p>
      <button
        onClick={onLinkSite}
        className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-full shadow-md border border-blue-600 transition duration-300 ease-in-out hover:bg-blue-50 hover:text-blue-700 transform hover:-translate-y-1 hover:scale-105 z-10 relative"
      >
        Link a New Site
      </button>
    </div>
  );
}
