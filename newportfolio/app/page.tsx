import React from "react";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col space-y-16 py-8">
        <Intro />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}