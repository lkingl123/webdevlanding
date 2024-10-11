// src/app/auth/signup/page.tsx
import SignInForm from "../../../components/SignInForm";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <SignInForm isSignUp />
      </div>
    </main>
  );
}
