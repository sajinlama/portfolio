
import React from "react";
import { GithubIcon } from "./ui/github";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

function LinkedinIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

const socialLinks: SocialLink[] = [
  {
    icon: GithubIcon,
    href: "https://github.com/sajinlama",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/sajinlama11",
    label: "LinkedIn",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/sajin",
    label: "Twitter",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center justify-center"
            aria-label={link.label}
          >
            <Icon size={24} className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}