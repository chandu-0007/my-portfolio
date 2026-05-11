"use client";

import { motion } from "framer-motion";

import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiMapPin,
  FiBookOpen,
} from "react-icons/fi";

export default function ContactEducation() {
  return (
    <section className="bg-cyan-50 py-24 text-black overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2
            className="
            text-4xl
            md:text-6xl
            font-medium
            tracking-tight
            leading-[1.05]
            "
          >
            Education
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="
            mt-14
            relative
            border-l
            border-gray-300
            pl-8
            "
          >

            {/* ANIMATED DOT */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
              absolute
              -left-[7px]
              top-2
              w-3
              h-3
              rounded-full
              bg-black
              "
            />

            {/* ICON + TITLE */}
            <div className="flex items-center gap-3">

              <motion.div
                whileHover={{
                  rotate: -10,
                  scale: 1.05,
                }}
                transition={{ duration: 0.2 }}
              >
                <FiBookOpen size={22} />
              </motion.div>

              <h3
                className="
                text-2xl
                md:text-3xl
                font-medium
                tracking-tight
                "
              >
                B.Tech in Information Technology
              </h3>

            </div>

            <p className="mt-4 text-lg text-gray-700">
              ANITS, Visakhapatnam
            </p>

            <p className="mt-2 text-gray-600">
              202 — 2027 • CGPA: 8.8/10
            </p>

            <p className="mt-6 max-w-2xl text-gray-700 leading-relaxed">
              Focused on full-stack development, backend systems,
              database design and Data Structures & Algorithms.
            </p>

          </motion.div>

        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-32"
          id="contact"
        >

          <h2
            className="
            text-4xl
            md:text-6xl
            font-medium
            tracking-tight
            leading-[1.05]
            "
          >
            Contact Me
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-gray-700 leading-relaxed">
            Currently looking for internships, freelance opportunities
            and full-stack engineering roles. Open to remote work
            and relocation.
          </p>

          {/* CONTACT GRID */}
          <div
            className="
            mt-16
            grid
            md:grid-cols-2
            gap-6
            "
          >

            {[
              {
                icon: <FiMail size={20} />,
                title: "Email",
                value: "chandrasekharnaidukadari@gmail.com",
                link: "mailto:chandrasekharnaidukadari@gmail.com",
              },

              {
                icon: <FiPhone size={20} />,
                title: "Phone",
                value: "+91 90149 87450",
                link: "tel:+919014987450",
              },

              {
                icon: <FiLinkedin size={20} />,
                title: "LinkedIn",
                value: "linkedin.com/in/chandra-sekhar",
                link: "https://www.linkedin.com/in/chandra-sekhar-145a81308",
              },

              {
                icon: <FiGithub size={20} />,
                title: "GitHub",
                value: "https://github.com/chandu-0007",
                link: "https://github.com/chandu-0007",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="
                border
                border-gray-300
                p-6
                flex
                items-center
                gap-4
                hover:border-black
                bg-white/40
                backdrop-blur-sm
                transition
                "
              >

                {item.icon}

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <p className="mt-1">
                    {item.value}
                  </p>
                </div>

              </motion.a>
            ))}

          </div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="
            mt-10
            flex
            items-center
            gap-3
            text-gray-700
            "
          >

            <FiMapPin size={18} />

            <p>
              India • Open to Remote & Relocation
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}