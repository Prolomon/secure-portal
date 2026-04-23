import React from 'react';
import { Globe, HelpCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="flex justify-between items-center h-16 px-6 lg:px-12 w-full mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-slate-900">SecurePortal</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-500 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-slate-50">
            <Globe className="w-5 h-5" />
          </button>
          <button className="text-slate-500 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-slate-50">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
