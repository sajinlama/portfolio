import React from 'react';
import { Mail } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Intro() {
  const [showContact, setShowContact] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center space-y-6 z-10 max-w-3xl px-4">
        <h1 className="text-6xl font-bold text-emerald-500 mb-4 matrix-text">
          SAJIN L. TAMANG
        </h1>
        <p className="text-3xl text-emerald-400 mb-4">Full Stack Developer</p>
        <p className="text-xl text-emerald-300 leading-relaxed mb-8 font-press-start">
          Crafting sleek, modern web experiences and pioneering innovation in education technology
        </p>
        <button
          onClick={() => setShowContact(true)}
          className="inline-flex items-center px-6 py-3 text-emerald-500 border-2 border-emerald-500 rounded-lg
                     hover:bg-emerald-500 hover:text-black transition-all duration-300"
        >
          <Mail className="mr-2" />
          Contact Me
        </button>
      </div>
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </div>
  );
}