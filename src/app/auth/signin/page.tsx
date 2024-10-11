// src/app/auth/signin/page.tsx
import SignInForm from "../../../components/SignInForm";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <SignInForm />
      </div>
    </main>
  );
}
