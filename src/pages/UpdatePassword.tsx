import React, { useState, useMemo } from 'react';
import { Eye, EyeOff, CheckCircle, Shield, RotateCcw, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validation = useMemo(() => ({
    length: newPassword.length >= 8,
    hasNumber: /\d/.test(newPassword),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    hasMixedCase: /[a-z]/.test(newPassword) && /[A-Z]/.test(newPassword),
  }), [newPassword]);

  const strength = useMemo(() => {
    const checks = Object.values(validation).filter(Boolean).length;
    if (newPassword.length === 0) return { score: 0, label: 'Weak' };
    if (checks <= 1) return { score: 1, label: 'Weak' };
    if (checks <= 2) return { score: 2, label: 'Fair' };
    if (checks <= 3) return { score: 3, label: 'Good' };
    return { score: 4, label: 'Strong' };
  }, [validation, newPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(validation).every(Boolean) && newPassword === confirmPassword) {
      navigate('/verify');
    }
  };

  return (
    <div className="w-full max-w-5xl px-container-padding pt-24 pb-xl mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
        {/* Left: Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.05)] p-lg md:p-xl border border-slate-100">
            <div className="mb-xl">
              <h1 className="font-h1 text-h1 text-on-background mb-sm">Update Password</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Ensure your account stays protected by using a unique and strong password.
              </p>
            </div>

            <form className="space-y-lg" onSubmit={handleSubmit}>
              {/* Current Password */}
              <div className="flex flex-col gap-stack-gap">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="current-password">Current Password</label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 text-body-md"
                    id="current-password"
                    placeholder="••••••••"
                    type={showCurrentPassword ? 'text' : 'password'}
                  />
                  <button
                    className="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant"
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="h-px bg-slate-100 my-md"></div>

              {/* New Password */}
              <div className="flex flex-col gap-stack-gap">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="new-password">New Password</label>
                <div className="relative">
                  <input
                    className={`w-full h-12 px-md bg-white border ${strength.score >= 3 ? 'border-primary shadow-[0px_0px_8px_rgba(37,99,235,0.1)]' : 'border-outline-variant'} rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 text-body-md`}
                    id="new-password"
                    placeholder="Enter new password"
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant"
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Strength Indicator */}
                <div className="mt-sm">
                  <div className="flex justify-between items-center mb-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Password Strength</span>
                    <span className={`font-label-sm text-label-sm font-semibold ${strength.score >= 3 ? 'text-secondary' : strength.score === 2 ? 'text-orange-500' : 'text-error'}`}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden flex gap-0.5">
                    <div className={`h-full w-1/4 transition-colors ${strength.score >= 1 ? (strength.score >= 3 ? 'bg-secondary' : strength.score === 2 ? 'bg-orange-500' : 'bg-error') : 'bg-surface-variant'}`}></div>
                    <div className={`h-full w-1/4 transition-colors ${strength.score >= 2 ? (strength.score >= 3 ? 'bg-secondary' : 'bg-orange-500') : 'bg-surface-variant'}`}></div>
                    <div className={`h-full w-1/4 transition-colors ${strength.score >= 3 ? 'bg-secondary' : 'bg-surface-variant'}`}></div>
                    <div className={`h-full w-1/4 transition-colors ${strength.score >= 4 ? 'bg-secondary' : 'bg-surface-variant'}`}></div>
                  </div>
                </div>

                {/* Checklist Helpers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm mt-sm">
                  <div className="flex items-center gap-2">
                    {validation.length ?
                      <CheckCircle className="w-4 h-4 text-secondary fill-secondary text-white" /> :
                      <div className="w-4 h-4 border border-outline-variant rounded-full" />
                    }
                    <span className={`font-label-sm text-label-sm ${validation.length ? 'text-on-surface' : 'text-on-surface-variant'}`}>8+ characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {validation.hasNumber ?
                      <CheckCircle className="w-4 h-4 text-secondary fill-secondary text-white" /> :
                      <div className="w-4 h-4 border border-outline-variant rounded-full" />
                    }
                    <span className={`font-label-sm text-label-sm ${validation.hasNumber ? 'text-on-surface' : 'text-on-surface-variant'}`}>Includes a number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {validation.hasSpecial ?
                      <CheckCircle className="w-4 h-4 text-secondary fill-secondary text-white" /> :
                      <div className="w-4 h-4 border border-outline-variant rounded-full" />
                    }
                    <span className={`font-label-sm text-label-sm ${validation.hasSpecial ? 'text-on-surface' : 'text-on-surface-variant'}`}>Special character</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {validation.hasMixedCase ?
                      <CheckCircle className="w-4 h-4 text-secondary fill-secondary text-white" /> :
                      <div className="w-4 h-4 border border-outline-variant rounded-full" />
                    }
                    <span className={`font-label-sm text-label-sm ${validation.hasMixedCase ? 'text-on-surface' : 'text-on-surface-variant'}`}>Mixed case (A/a)</span>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-stack-gap">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="confirm-password">Confirm New Password</label>
                <input
                  className={`w-full h-12 px-md bg-white border ${confirmPassword && newPassword !== confirmPassword ? 'border-error' : 'border-outline-variant'} rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 text-body-md`}
                  id="confirm-password"
                  placeholder="Repeat new password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword && newPassword !== confirmPassword && (
                   <p className="font-label-sm text-label-sm text-error">Passwords do not match</p>
                )}
              </div>

              {/* Primary Action */}
              <div className="pt-md">
                <button
                  className="w-full h-12 bg-primary-container text-on-primary font-button text-button rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-[0px_4px_6px_rgba(0,0,0,0.05)] disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={!Object.values(validation).every(Boolean) || newPassword !== confirmPassword}
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Safety Tips & Visuals */}
        <div className="lg:col-span-5 space-y-lg">
          {/* Safety Tips Card */}
          <div className="bg-surface-container rounded-xl p-lg border border-outline-variant/30">
            <div className="flex items-center gap-sm mb-md">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="font-h2 text-body-lg font-semibold text-on-surface">Security Best Practices</h2>
            </div>
            <ul className="space-y-md">
              <li className="flex gap-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-semibold text-sm">1</div>
                <p className="font-body-md text-label-md text-on-surface-variant">Don't use personal information like birthdays or pet names.</p>
              </li>
              <li className="flex gap-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-semibold text-sm">2</div>
                <p className="font-body-md text-label-md text-on-surface-variant">Enable Two-Factor Authentication (2FA) for an extra layer of protection.</p>
              </li>
              <li className="flex gap-md">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-semibold text-sm">3</div>
                <p className="font-body-md text-label-md text-on-surface-variant">Use a password manager to store complex, unique passwords securely.</p>
              </li>
            </ul>
          </div>

          {/* Decorative Info Card */}
          <div className="relative overflow-hidden rounded-xl h-48 bg-primary-fixed text-on-primary-fixed-variant p-lg group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <RotateCcw className="w-8 h-8" />
              <div>
                <p className="font-h2 text-h2 mb-xs">Institutional Grade</p>
                <p className="font-label-md opacity-80">Your data is encrypted using AES-256 standards.</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <img
              alt="Security"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmWUlIS5bcnt4aeZCNdE8UaqUaP7zfZ4NfGfbJBpnv8zHtU5uIvdH9Z2IVQeoagHb7qdNiybfFZCUjMaMqsuLB0nBjR-C41Rp5hiZWms1EgYrF629ItC7ppaHrSfyqaPKPiNzz-PjOXc1PF93H-gDGN3KpWZuLQFE3Ny-xNzAhOUuEDkjsGIaVvbSmJL0ljHFEYwF9FHxQCuwtw2NlR-cHGOATnEljFjgPkX2WzwEq_j8RH75XelxCWOxcxxCQ75_ZG8jP7_UOPN4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
