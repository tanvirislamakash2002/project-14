"use client"
import { registerUser } from '../../actions/auth/registerUser';
import React, {useState} from 'react';

const RegisterForm = ({onSubmit}) => {


  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await onSubmit({ name, email, password });
      console.log(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


    return (
        <form onSubmit={handleSubmit}>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Registration Form */}
          <div className="space-y-4">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

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
                  placeholder="Create a strong password"
                  className="input input-bordered w-full focus:input-primary pr-12"
                  required
                />

              </div>
              <label className="label">
                <span className="label-text-alt text-base-content/60">
                  Must be at least 8 characters long
                </span>
              </label>
            </div>

            {/* Terms Checkbox */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" required />
                <span className="label-text text-sm">
                  I agree to the{' '}
                  <a href="#" className="link link-primary">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="link link-primary">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <input 
              type='submit'
              value='Create Account'
              className="btn btn-primary w-full"
            />
              
          </div>
        </form>
    );
};

export default RegisterForm;