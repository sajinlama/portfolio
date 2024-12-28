import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Background />
      <Navbar />
      <div className="relative z-10">
        <Intro />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;