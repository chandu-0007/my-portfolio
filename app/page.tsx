import Image from "next/image";
import Hero from "./components/Hero";
import { About } from "./components/About";

export default function Home() {
  return (
    <div className="bg-cyan-50 w-screen min-h-screen relative text-black">

      {/* Centered Floating Name */}
     <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <span
    className="
      px-6 py-2 text-3xl font-serif tracking-widest  rounded-2xl
      bg-white/30 backdrop-blur-md border border-white/40
      transition-all duration-300 
      hover:bg-white/40 hover:shadow-lg
      cursor-pointer
    "
  >
    CHANDRA SEKHAR
  </span>
</div>

      <Hero />
      <About />
    </div>
  );
}