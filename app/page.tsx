"use client";

import Hero from "./components/Hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactEducation from "./components/Education";
import Footer from "./components/Footer";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className="
      bg-cyan-50
      w-full
      min-h-screen
      overflow-x-hidden
      text-black
      "
    >

      {/* FLOATING NAME */}
      <div
        className="
        fixed
        top-4
        md:top-6
        left-1/2
        -translate-x-1/2
        z-50
        "
      >

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.04,
          }}
          className="
          inline-flex
          items-center
          justify-center

          px-2
          py-2.5

          md:px-6
          md:py-3

          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl

          font-serif
          tracking-[0.25em]

          rounded-2xl

          bg-none
          backdrop-blur-xl

          border
          border-white/40

          shadow-sm

          hover:bg-white/60
          transition-all
          duration-300
          "
        >

          CHANDRA SEKHAR

        </motion.div>

      </div>

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* PROJECTS */}
      <Projects />

      {/* SKILLS */}
      <Skills />

      {/* EDUCATION + CONTACT */}
      <ContactEducation />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}