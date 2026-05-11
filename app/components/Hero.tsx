"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const text =
  "I build software that simplify and automate real world business operations using";

const words = text.match(/\b\w+\b/g) ?? [];

export default function Hero() {
  return (
    <section
      className="
      relative
      w-full
      min-h-screen
      bg-cyan-50
      overflow-hidden
      "
    >

      {/* MOBILE LAYOUT */}
      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        min-h-screen
        px-6
        pt-28
        pb-10
        md:hidden
        "
      >

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          flex
          flex-wrap
          justify-center
          gap-x-2
          gap-y-1
          text-center
          "
        >

          {words.map((word: string, index: number) => (
            <span
              key={index}
              className="
              text-[30px]
              leading-none
              font-semibold
              tracking-tight
              text-neutral-700
              "
            >
              {word}
            </span>
          ))}

          <span
            className="
            text-[30px]
            leading-none
            font-serif
            font-semibold
            tracking-tight
            text-neutral-700
            "
          >
            Full Stack()
          </span>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
          mt-12
          flex
          justify-center
          "
        >

          <Image
            src="/profile.webp"
            alt="profile"
            width={320}
            height={420}
            priority
            className="
            w-[280px]
            h-auto
            object-contain
            "
          />

        </motion.div>

      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block">

        {/* CONTENT */}
        <div
          className="
          relative
          z-20
          flex
          items-center
          min-h-screen
          px-12
          lg:px-20
          "
        >

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
            max-w-5xl
            flex
            flex-wrap
            gap-x-3
            gap-y-2
            relative
            z-30
            "
          >

            {words.map((word: string, index: number) => (
              <span
                key={index}
                className="
                text-6xl
                lg:text-7xl
                font-semibold
                tracking-tight
                text-neutral-700
                hover:text-black
                transition-all
                duration-300
                "
              >
                {word}
              </span>
            ))}

            <span
              className="
              text-6xl
              lg:text-7xl
              font-serif
              font-semibold
              tracking-tight
              text-neutral-700
              "
            >
              Full Stack()
            </span>

          </motion.div>

        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="
          absolute
          bottom-0
          right-0
          z-10
          "
        >

          <Image
            src="/profile.webp"
            alt="profile"
            width={650}
            height={700}
            priority
            className="
            object-contain
            w-[480px]
            lg:w-[620px]
            h-auto
            "
          />

        </motion.div>

      </div>

    </section>
  );
}