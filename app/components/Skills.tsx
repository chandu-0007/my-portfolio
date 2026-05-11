"use client";

import { motion } from "framer-motion";

const skillColumns = [
  [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
  ],

  [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Socket.io",
  ],

  [
    "Git",
    "GitHub",
    "Docker",
    "Postman",
    "REST APIs",
    "DSA",
  ],
];

function InfiniteColumn({
  skills,
  duration = 18,
}: {
  skills: string[];
  duration?: number;
}) {
  return (
    <div className="relative h-[320px] overflow-hidden group">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, -320],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        }}
        className="group-hover:[animation-play-state:paused]"
        whileHover={{ scale: 1.01 }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              x: 6,
            }}
            transition={{ duration: 0.2 }}
            className="
            border
            border-gray-300
            bg-white/40
            backdrop-blur-sm
            px-5
            py-4
            mb-4
            text-gray-800
            text-sm
            md:text-base
            tracking-tight
            hover:border-black
            hover:bg-white/70
            transition
            cursor-default
            "
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* FADE EFFECT */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#e9f0f2] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#e9f0f2] to-transparent pointer-events-none" />
    </div>
  );
}

export default function Skills() {
  return (
    <section className="bg-cyan-50 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2
            className="
            text-4xl
            md:text-6xl
            font-medium
            tracking-tight
            leading-[1.05]
            text-black
            "
          >
            Skills & Technologies
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Focused on building scalable applications, realtime systems
            and performant user experiences using modern web technologies.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {skillColumns.map((skills, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <InfiniteColumn
                skills={skills}
                duration={18 + index * 4}
              />
            </motion.div>
          ))}

        </div>

        {/* BOTTOM STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
          mt-24
          border-t
          border-gray-300
          pt-10
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          "
        >

          <div>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
              300+
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              DSA Problems Solved
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
              6+
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Projects Built
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
              Top 50
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              IEEE Hackathon Finalist
            </p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
              Full Stack
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Frontend + Backend
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
