"use client"
import Link from 'next/link';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';

export default function LoginPage() {


    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-base-content">Welcome Back</h1>
                        <p className="text-base-content/70 mt-2">Sign in to your account</p>
                    </div>
                    <SocialLogin></SocialLogin>
                    <LoginForm></LoginForm>

                    {/* Sign Up Link */}
                    <div className="text-center mt-6">
                        <p className="text-base-content/70">
                            Don't have an account?{' '}
                            <Link href="/register" className="link link-primary font-medium">
                                Create account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}