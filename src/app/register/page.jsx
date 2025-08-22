"use client"
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";
import { registerUser } from "../actions/auth/registerUser";
import SocialLogin from "../login/components/SocialLogin";


export default function RegisterPage() {
  const handleRegister = async (data) => {
    const result = await registerUser(data);
    console.log(result);
    return result;
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-base-content">Create Account</h1>
            <p className="text-base-content/70 mt-2">Sign up to get started</p>
          </div>
          <SocialLogin></SocialLogin>
          <RegisterForm onSubmit={handleRegister}></RegisterForm>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-base-content/70">
              Already have an account?{' '}
              <Link href="/login" className="link link-primary font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}