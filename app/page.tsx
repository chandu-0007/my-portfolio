"use client";

import Hero from "./components/Hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-cyan-50 w-screen min-h-screen relative text-black">

      {/* Floating Name */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{  y: -30 }}
          animate={{  y : 0  }}
          transition={{
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          className="
            inline-block
            px-6 py-2
            text-3xl
            font-serif
            tracking-widest
            rounded-2xl
            bg-white/30
            backdrop-blur-md
            border border-white/40
            hover:bg-white/40
            hover:shadow-lg
            cursor-pointer
          "
        >
          CHANDRA SEKHAR
        </motion.div>
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}