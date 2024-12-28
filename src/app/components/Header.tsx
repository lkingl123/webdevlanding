'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between bg-white/80 backdrop-blur-md shadow-lg rounded-full mt-4">
      <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
        Web<span className="text-blue-600">Scape</span>
      </h1>
      <div className="flex space-x-4">
        <Link
          href="/auth/signin"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Sign In
        </Link>
        <Link
          href="/auth/signup"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
