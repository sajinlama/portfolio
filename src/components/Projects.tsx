import React from 'react';
import { Construction } from 'lucide-react';

export default function Projects() {
  return (
    <div className="py-20 z-10 relative">
      <h2 className="text-4xl font-bold text-emerald-500 text-center mb-6 font-[Press Start 2P]">Projects</h2>
      <div className="flex items-center justify-center text-emerald-400 space-x-2">
        <Construction className="animate-pulse" />
        <span>Working on amazing projects...</span>
      </div>
    </div>
  );
}