import React from "react";
import { Github } from "lucide-react";

import devchatImg from "../assets/devchat.png";
import tutorImg from "../assets/tutor.png";

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
              className="absolute bottom-4 right-4
                         text-emerald-400 hover:text-emerald-200
                         hover:scale-110 transition-all duration-300"
            >
              <Github size={30} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
