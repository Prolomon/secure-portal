import React from 'react';
import { CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginSuccess: React.FC = () => {
  return (
    <div className="w-full max-w-md px-container-padding pt-20 pb-12">
      <div className="bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.05)] border border-slate-100 p-xl flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-xl shadow-sm">
          <CheckCircle className="w-12 h-12 text-on-secondary-container" strokeWidth={2.5} />
        </div>

        {/* Message Group */}
        <div className="space-y-stack-gap mb-2xl">
          <h1 className="font-h1 text-h1 text-slate-900">Login Successful</h1>
          <p className="font-body-md text-body-md text-slate-500">
            You have successfully logged in to your institutional portal. Your session is now secured.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-md">
          <Link
            to="/"
            className="w-full h-12 bg-primary-container text-white font-button text-button rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Go to Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/update-password"
            className="w-full h-12 bg-transparent text-primary font-button text-button rounded-lg border border-slate-100 hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center"
          >
            View Account Settings
          </Link>
        </div>

        {/* Session Info */}
        <div className="mt-xl flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full">
          <ShieldCheck className="w-4 h-4 text-secondary" />
          <span className="font-label-sm text-label-sm text-slate-500">Encrypted 256-bit Session Active</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
