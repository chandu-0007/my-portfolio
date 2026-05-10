"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
const text =
  "I build software that simplify and automate real world business operations using";

const words = text.match(/\b\w+\b/g) ?? [];

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cyan-50 overflow-hidden">

      {/* TEXT */}
      <div className="absolute inset-0 z-20 flex items-center">
        <motion.div  
          initial ={
            { x:-70 }
          }
          animate ={{x :0 }}
          transition={ {duration : 1.5}}
         className="max-w-6xl pl-24 flex flex-wrap gap-x-3 gap-y-2">
          {words.map((word: string, index: number) => (
            <span
              key={index}
              className="
                text-7xl
                font-semibold
                text-neutral-700
                hover:text-black
                transition-all
                duration-300
                hover:cursor-grab
              "
            >
              {word}
            </span>
          ))}

          <span
            className="
              text-7xl
              font-serif
              font-semibold
              text-neutral-700 
              hover:text-black 
               hover:cursor-grab
            "
          >
            Full Stack ()
          </span>

        </motion.div>
      </div>

      {/* IMAGE */}
      <div className="absolute bottom-0 right-0 z-10">
        <Image
          src="/profile.webp"
          alt="profile"
          width={600}
          height={500}
          className="object-contain"
          priority
        />
      </div>

    </section>
  );
}