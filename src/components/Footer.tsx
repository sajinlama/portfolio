import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/sajinlama',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/sajinlama11',
    label: 'LinkedIn'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/sajin',
    label: 'Twitter'
  },

];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-transparent border-t border-emerald-500/20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
        
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-emerald-500 hover:text-emerald-300 transition-colors duration-200"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Text Details matching Intro Colors */}
        <div className="space-y-1">
          <p className="text-base font-semibold text-emerald-400">
            Sajin Lama &bull; Full Stack Developer
          </p>
          <p className="text-xs text-emerald-500/70 font-mono tracking-wider">
            &copy; {currentYear} ALL RIGHTS RESERVED
          </p>
        </div>

      </div>
    </footer>
  );
}