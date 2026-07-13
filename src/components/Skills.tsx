import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  FaReact, FaCss3Alt, FaDatabase, FaGitAlt, 
  FaNodeJs, FaRocket 
} from 'react-icons/fa';
import { 
  SiPrisma, SiPostgresql, SiDocker, SiRedis, SiNextdotjs 
} from 'react-icons/si';

// Explicitly type the configurations to fix the TS error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string; // Authentic brand color class
}

const skills: Skill[] = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'Tailwind CSS', icon: FaCss3Alt, color: 'text-[#38BDF8]' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
  { name: 'Express', icon: FaRocket, color: 'text-[#828282]' },
  { name: 'MongoDB', icon: FaDatabase, color: 'text-[#47A248]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-[#2D3748]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'Redis', icon: SiRedis, color: 'text-[#DC382D]' },
  { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]' }
];

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Green Matrix/Retro Styled Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            Tech Stack
          </h2>
          <p className="text-emerald-600/80 max-w-md mx-auto text-sm md:text-base font-medium">
            The modern languages, tools, and infrastructure architecture I use to scale applications.
          </p>
        </div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -4 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl h-40 w-full
                         backdrop-blur-md bg-black/80
                         border border-emerald-500/30 hover:border-emerald-400
                         shadow-[0_0_15px_rgba(16,185,129,0.05)]
                         hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]
                         transition-all duration-200 cursor-default"
            >
              {/* Green glow backdrop behind the icon on card hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-gradient-to-b from-emerald-500 to-transparent transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container with Authentic Brand Colors */}
              <div className={`p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 mb-4 transition-transform duration-200 group-hover:scale-110 ${skill.color}`}>
                <skill.icon size={40} />
              </div>
              
              {/* Matrix Green Text Label */}
              <span className="text-emerald-400 text-base md:text-lg font-semibold tracking-wide text-center group-hover:text-emerald-300 transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;