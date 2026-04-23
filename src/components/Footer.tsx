import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9FAFB] w-full py-8 mt-auto border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 lg:px-12 max-w-7xl mx-auto gap-4">
        <div className="font-label-sm text-label-sm text-slate-500">
          © 2024 SecurePortal Inc. Institutional grade security.
        </div>
        <div className="flex gap-6">
          <a className="font-label-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline transition-opacity duration-150" href="#">Privacy Policy</a>
          <a className="font-label-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline transition-opacity duration-150" href="#">Terms of Service</a>
          <a className="font-label-sm text-slate-500 hover:text-blue-600 underline-offset-4 hover:underline transition-opacity duration-150" href="#">Security Whitepaper</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
