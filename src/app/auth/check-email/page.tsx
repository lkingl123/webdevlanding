// src/app/auth/check-email/page.tsx
'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckEmail() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Check Your Email</h2>
        <p className="text-gray-600 text-center mb-4">
          A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account.
        </p>
        <p className="text-gray-600 text-center mb-4">
          Once verified, you can proceed to sign in.
        </p>
        <button
          onClick={() => router.push("/auth/signin")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Go to Sign In
        </button>
      </div>
    </div>
  );
}
