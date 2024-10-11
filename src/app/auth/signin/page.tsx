// src/app/auth/signin/page.tsx
'use client';

import { useState } from "react";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
      
        try {
          setLoading(true);
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
      
          // Check if the user's email is verified
          if (!user.emailVerified) {
            setLoading(false);
            setError(
              "Please verify your email before logging in. A verification link has been sent to your email."
            );
      
            // Optionally, resend the verification email
            await sendEmailVerification(user);
            return;
          }
      
          // Redirect after successful login if the email is verified
          router.push("/dashboard");
        } catch (err: any) {
          setLoading(false);
          handleFirebaseError(err);
        }
      };
      
  const handleFirebaseError = (err: any) => {
    const supportMessage = "For direct support, please call 385-392-3207.";
    const errorMessage = err.message || `Something went wrong. ${supportMessage}`;

    switch (err.code) {
      case "auth/invalid-email":
        setError(`The email address is not valid. ${supportMessage}`);
        break;
      case "auth/user-disabled":
        setError(`This user account has been disabled. ${supportMessage}`);
        break;
      case "auth/user-not-found":
        setError(`No user found with this email. ${supportMessage}`);
        break;
      case "auth/wrong-password":
        setError(`The password is incorrect. ${supportMessage}`);
        break;
      case "auth/invalid-credential":
        setError(`Invalid login credentials provided. ${supportMessage}`);
        break;
        case "auth/too-many-requests":
        setError("Be sure to verify your email to proceed.");
        break;
        default:
            setError(errorMessage);
        }
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white font-semibold ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

