import React, { useState } from 'react';
import { Lock, CheckCircle, ShieldCheck, ArrowRight, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate('/mfa');
    }
  };

  return (
    <div className="w-full px-container-padding py-2xl mt-16">
      <div className="bg-surface-container-lowest p-xl rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.05)] border border-outline-variant">
        <div className="mb-xl text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-container text-white rounded-lg mb-md">
            <Lock className="w-6 h-6 fill-current" />
          </div>
          <h1 className="font-h1 text-h1 text-on-background mb-sm">Sign in</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Enter your email to continue to your dashboard</p>
        </div>

        <form className="space-y-xl" onSubmit={handleSubmit}>
          <div className="space-y-stack-gap">
            <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email address</label>
            <div className="relative group">
              <input
                className="w-full h-12 px-md font-body-md text-body-md bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-outline-variant"
                id="email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                {email.includes('@') && <CheckCircle className="w-5 h-5 text-secondary" />}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-xs text-secondary">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-label-sm text-label-sm">Institutional grade security active</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-primary text-on-primary font-button text-button rounded-lg hover:bg-primary-container active:scale-[0.98] transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-xl flex items-center gap-md">
          <div className="h-[1px] flex-grow bg-outline-variant"></div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">or</span>
          <div className="h-[1px] flex-grow bg-outline-variant"></div>
        </div>

        <div className="mt-xl grid grid-cols-2 gap-md">
          <button className="flex items-center justify-center gap-2 h-11 border border-outline-variant rounded-lg font-label-md text-on-surface hover:bg-surface-container-low transition-colors duration-200">
            <img
              alt="Google"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsiWDDzBlXzsYFmvkMWLchGSqwEVQ1bKXR6t-NtAesfbAGHy5km_v2OX72_hj6C7DkK7lBmRtgxZkKYoJ7KQJl3j3Er1r8K1HnuIbvr3Dih4IZlgDZ5KB8J40WqIopCkz2BU_16Gf7EPpoB24XcK5p8gMCkGurjh-Kclxs9Uy2H69GYZJOVmFU-N6Yis7kKY8SMPyL82Hr4oX3EME5wDU6idHG6cBU2QkDAHYtq52-tkchhacpteR3RcQimxSMNrczlh_WtU2NdSM"
            />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 h-11 border border-outline-variant rounded-lg font-label-md text-on-surface hover:bg-surface-container-low transition-colors duration-200">
            <Apple className="w-5 h-5 fill-current" />
            Apple
          </button>
        </div>

        <div className="mt-xl text-center">
          <p className="font-body-md text-on-surface-variant">
            Don't have an account?
            <a className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 transition-all ml-1" href="#">Create one</a>
          </p>
        </div>
      </div>

      <div className="mt-xl flex flex-wrap justify-center gap-xl opacity-60 grayscale">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-label-sm text-label-sm">ISO 27001 Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4" />
          <span className="font-label-sm text-label-sm">SOC2 Type II</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
