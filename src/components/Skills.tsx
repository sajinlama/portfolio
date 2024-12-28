import React from 'react';
import { FaReact, FaCss3Alt, FaDatabase, FaGitAlt, FaNodeJs, FaRocket } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const skills: Skill[] = [
  { 
    name: 'React',
    icon: FaReact,
    color: 'text-cyan-500'
  },
  { 
    name: 'Tailwind CSS',
    icon: FaCss3Alt,
    color: 'text-sky-500'
  },
  { 
    name: 'MongoDB',
    icon: FaDatabase,
    color: 'text-green-500'
  },
  { 
    name: 'Git',
    icon: FaGitAlt,
    color: 'text-orange-500'
  },
  { 
    name: 'Node.js',
    icon: FaNodeJs,
    color: 'text-emerald-500'
  },
  { 
    name: 'Express',
    icon: FaRocket,
    color: 'text-purple-500'
  }
];

const Skills: React.FC = () => {
  return (
    <div className="py-20 z-10 relative">
      <h2 className="text-4xl font-bold text-emerald-500 text-center mb-12 font-press-start">Tech Stack</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((Skill) => (
            <div
              key={Skill.name}
              className="group relative bg-black/50 p-8 rounded-lg w-full h-64
                         border-2 border-emerald-500
                         hover:bg-emerald-500/10 transition-all duration-300
                         transform hover:-translate-y-1"
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className={`text-6xl mb-4 ${Skill.color}`}>
                  <Skill.icon size={72} />
                </div>
                <h3 className="text-emerald-400 text-lg font-medium group-hover:text-emerald-300">
                  {Skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
