import React from 'react';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="matrix-text text-emerald-500 font-bold text-xl tracking-wider">
            SAJIN L. TAMANG
          </span>
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}