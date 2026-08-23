import React from "react";
import devchatImg from "../assets/devchat.png";
import tutorImg from "../assets/tutor.png";

function GithubIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Projects() {
  const projects = [
    {
      name: "DevChat",
      image: devchatImg,
      github: "https://github.com/sajinlama/DevChat",
      description: "Real-time code, chat & video collaboration platform",
      animation: "animate-float-lr",
    },
    {
      name: "Tutor App",
      image: tutorImg,
      github: "https://github.com/sajinlama/onlineTutores",
      description: "AI-powered tutoring with progress & performance tracking",
      animation: "animate-float-rl",
    },
  ];

  return (
    <div className="py-24 bg-black relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-emerald-500 text-center mb-16 font-[Press Start 2P]">
        Projects
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`relative group rounded-3xl overflow-hidden
                        border border-emerald-500/60
                        shadow-[0_0_40px_rgba(16,185,129,0.25)]
                        hover:shadow-[0_0_80px_rgba(16,185,129,0.55)]
                        transition-all duration-500
                        ${project.animation}`}
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[360px] md:h-[420px] lg:h-[460px] object-cover"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/65 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-400
                         flex flex-col justify-center items-center text-center px-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-emerald-200 max-w-md">
                {project.description}
              </p>
            </div>

            {/* GITHUB ICON */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              className="absolute bottom-4 right-4 z-20
                         text-emerald-400 hover:text-emerald-200
                         hover:scale-110 transition-all duration-300"
            >
              <GithubIcon className="w-8 h-8" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}