"use client"
import React from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin';

const LoginForm = () => {
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })
      if(response.ok){
      toast.success('Logged In successfully')
        router.push('/')
        form.reset()
      }
      else{
      toast.error('Failed to logged In')

      }
    } catch (error) {
      // console.log(error)
    }
  };


  return (
    <form onSubmit={handleSubmit}>

      {/* Divider */}
      <div className="divider">OR</div>

      {/* Login Form */}
      <div className="space-y-4">
        {/* Email Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email Address</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full focus:input-primary"
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:input-primary pr-12"
              required
            />

          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="label cursor-pointer justify-start gap-3 p-0">
            <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
            <span className="label-text">Remember me</span>
          </label>
          <a href="#" className="link link-primary text-sm">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <input
          type='submit'
          value='Sign In'
          className="btn btn-primary w-full"
        />
      </div>
    </form>
  );
};

export default LoginForm;