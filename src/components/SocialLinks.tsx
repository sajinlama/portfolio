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
  }
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 hover:text-emerald-400 transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}