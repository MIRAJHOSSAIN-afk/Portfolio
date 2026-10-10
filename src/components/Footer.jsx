import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass border-x-0 border-b-0 rounded-none py-6 px-6 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Miraj Hossain. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          Back to top
          <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/5 transition-colors">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}
