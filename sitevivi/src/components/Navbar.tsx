import React from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.1)] border-b border-white/10">
      <div className="mx-auto px-6 py-4 flex justify-center items-center">
        <h1
          className={cn(
            "text-center font-sans uppercase tracking-[0.35em] text-xl md:text-2xl font-bold text-white",
            "relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent"
          )}
        >
          <span className="text-white/90 transition duration-300 hover:text-white">Abduch</span>
          <span className="mx-3 text-white/50 tracking-[0.2em]">&</span>
          <span className="text-white/90 transition duration-300 hover:text-white">Maprelian</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
