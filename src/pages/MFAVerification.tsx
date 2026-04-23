import React, { useRef } from 'react';
import { LockOpen, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MFAVerification: React.FC = () => {
  const navigate = useNavigate();
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (val && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify');
  };

  return (
    <div className="w-full px-container-padding pt-24 pb-xl relative">
      {/* Multi-Step Progress Indicator */}
      <div className="fixed top-16 left-0 w-full h-1 bg-surface-container-low overflow-hidden z-40">
        <div className="h-full bg-primary-container w-2/3 transition-all duration-500 ease-out"></div>
      </div>

      <div className="bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.05)] border border-slate-100 p-xl relative overflow-hidden">
        {/* Decorative Branding Element */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="flex flex-col items-center text-center space-y-stack-gap mb-xl">
          <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-sm">
            <LockOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-h1 text-h1 text-on-background">Verify your identity</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
            We sent a code to your phone to keep your account secure
          </p>
        </div>

        <form className="space-y-xl" onSubmit={handleSubmit}>
          {/* 6-digit OTP Input Boxes */}
          <div className="flex justify-between gap-sm md:gap-md" id="otp-inputs">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                ref={el => inputs.current[i] = el}
                autoComplete={i === 0 ? "one-time-code" : undefined}
                className="w-12 h-14 text-center text-h2 font-h2 border border-outline-variant rounded-lg bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                maxLength={1}
                required
                type="text"
                onChange={(e) => handleInput(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          <div className="space-y-md pt-sm">
            <button
              className="w-full bg-primary-container text-white font-button text-button py-md rounded-lg shadow-sm active:scale-[0.98] transition-all hover:bg-primary-container/90"
              type="submit"
            >
              Verify Code
            </button>
            <div className="flex flex-col items-center space-y-base">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Didn't receive the code?
              </p>
              <div className="flex items-center gap-xs">
                <span className="font-label-md text-label-md text-slate-400">Resend in</span>
                <span className="font-label-md text-label-md text-primary font-semibold">01:54</span>
              </div>
            </div>
          </div>
        </form>

        {/* Secondary Actions */}
        <div className="mt-2xl pt-lg border-t border-slate-100 flex justify-center">
          <Link to="/" className="flex items-center gap-xs font-label-md text-label-md text-slate-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      </div>

      {/* Decorative background visual */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default MFAVerification;
