import React, { useState, useMemo } from 'react';
import { Lock, AlertCircle, CheckCircle, XCircle, Info, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SecurityVerification: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('securepassword');

  const validation = useMemo(() => ({
    length: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  }), [password]);

  const isValid = Object.values(validation).every(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      navigate('/update-password');
    }
  };

  return (
    <div className="max-w-md w-full px-lg pt-2xl pb-xl mt-16">
      <div className="bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.05)] p-xl border border-slate-100">
        <div className="text-center mb-xl">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container/10 mb-md">
            <Lock className="w-6 h-6 text-primary-container fill-current" />
          </div>
          <h1 className="font-h1 text-h1 text-on-background mb-base">Security Verification</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Update your credentials to continue to your dashboard.</p>
        </div>

        <form className="space-y-xl" onSubmit={handleSubmit}>
          <div className="space-y-stack-gap">
            <label className="block font-label-md text-label-md text-on-surface" htmlFor="password">New Password</label>
            <div className="relative">
              <input
                aria-describedby="password-error"
                aria-invalid={!validation.hasNumber}
                className={`w-full h-12 px-md font-body-md text-body-md border ${!validation.hasNumber ? 'border-error' : 'border-outline-variant'} rounded-lg bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none`}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!validation.hasNumber && (
                <span className="absolute right-md top-1/2 -translate-y-1/2">
                  <AlertCircle className="w-5 h-5 text-error fill-current text-white" />
                </span>
              )}
            </div>
            {!validation.hasNumber && (
              <p className="font-label-sm text-label-sm text-error flex items-center gap-xs" id="password-error">
                Password must include at least one number
              </p>
            )}
          </div>

          <div className="space-y-md">
            <button
              className="w-full h-12 bg-primary-container hover:bg-primary-container/90 text-white font-button text-button rounded-lg shadow-sm transition-all active:scale-[0.98] disabled:opacity-50"
              type="submit"
              disabled={!isValid}
            >
              Update Password
            </button>
            <button
              className="w-full h-12 bg-transparent text-primary font-button text-button hover:bg-surface-container-low transition-colors rounded-lg"
              type="button"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-xl pt-lg border-t border-slate-100">
          <div className="flex items-start gap-md p-md bg-surface-container-low rounded-lg">
            <Info className="w-5 h-5 text-slate-500 mt-0.5" />
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Password requirements:</p>
              <ul className="mt-xs space-y-xs font-label-sm text-label-sm text-slate-500">
                <li className="flex items-center gap-xs">
                  {validation.length ?
                    <CheckCircle className="w-3.5 h-3.5 text-secondary fill-secondary text-white" /> :
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-300" />
                  }
                  At least 8 characters
                </li>
                <li className="flex items-center gap-xs">
                  {validation.hasNumber ?
                    <CheckCircle className="w-3.5 h-3.5 text-secondary fill-secondary text-white" /> :
                    (password.length > 0 ?
                      <XCircle className="w-3.5 h-3.5 text-error fill-error text-white" /> :
                      <div className="w-3.5 h-3.5 rounded-full border border-slate-300" />
                    )
                  }
                  Include at least one number
                </li>
                <li className="flex items-center gap-xs">
                  {validation.hasSpecial ?
                    <CheckCircle className="w-3.5 h-3.5 text-secondary fill-secondary text-white" /> :
                    <div className="w-3.5 h-3.5 rounded-full border border-slate-300" />
                  }
                  One special character
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-lg text-center">
        <Link to="/" className="font-label-sm text-label-sm text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-xs">
          <ArrowLeft className="w-4 h-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default SecurityVerification;
