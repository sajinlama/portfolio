import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black relative">
      {/* Sleek Emerald Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left z-50 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
        style={{ scaleX }}
      />

      <Background />
      <Navbar />
      <div className="relative z-10">
        <Intro />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;