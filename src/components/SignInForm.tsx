// src/app/components/SignInForm.tsx
'use client';

import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function SignInForm({ isSignUp = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Authentication Error: ", error.message);
      } else {
        console.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="p-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleAuth} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
}
