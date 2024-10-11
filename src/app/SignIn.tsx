// src/app/SignIn.tsx
'use client';

import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

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
      <h2 className="text-lg font-bold">{isSignUp ? "Sign Up" : "Sign In"}</h2>
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
      <button onClick={handleAuth} className="bg-blue-500 text-white px-4 py-2 rounded">
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
      <button onClick={() => setIsSignUp(!isSignUp)} className="mt-2 text-blue-500 underline">
        {isSignUp ? "Have an account? Sign In" : "New user? Sign Up"}
      </button>
    </div>
  );
}
