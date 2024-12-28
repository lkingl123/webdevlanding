// src/app/components/Footer.tsx
'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 py-12 text-center text-gray-500 text-sm shadow-inner mt-24">
      <p>
        © 2024 WebScape. All rights reserved. |{" "}
        <Link href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
        {" | "}
        <Link href="/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </Link>
      </p>
      <p className="mt-4">
        Follow us: 
        <a href="#" className="ml-2 text-blue-600 hover:text-blue-800 transition">Twitter</a> | 
        <a href="#" className="ml-2 text-blue-600 hover:text-blue-800 transition">LinkedIn</a>
      </p>
    </footer>
  );
}
