"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="bg-cyan-50 py-20 md:py-28 text-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP CONTENT */}
        <div
          className="
          flex
          flex-col
          lg:items-end
          "
        >

          <div
            className="
            w-full
            lg:max-w-3xl
            "
          >

            {/* TEXT */}
            <div
              className="
              space-y-2
              text-[28px]
              leading-tight
              sm:text-4xl
              md:text-5xl
              font-medium
              tracking-tight
              text-gray-800
              "
            >

              <p>
                Full-stack developer focused on
                building scalable web applications,
              </p>

              <p>
                real-time systems and backend
                architectures using React.js,
              </p>

              <p>
                Next.js, Node.js and PostgreSQL.
              </p>

            </div>

            {/* LOCATION */}
            <p
              className="
              mt-8
              text-base
              md:text-lg
              text-gray-600
              "
            >
              Based in India. Open to remote and relocation.
            </p>

            {/* LINKS */}
            <div
              className="
              flex
              flex-wrap
              gap-x-6
              gap-y-4
              mt-10
              text-base
              md:text-lg
              text-gray-700
              "
            >

              {/* EMAIL */}
              <a
                href="mailto:chandrasekharnaidukadari@gmail.com"
                className="
                flex items-center gap-2
                hover:text-black
                transition
                "
              >
                <Image
                  src="/email.png"
                  alt="email"
                  width={18}
                  height={18}
                />

                <span>Email</span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/chandra-sekhar-145a81308"
                target="_blank"
                className="
                flex items-center gap-2
                hover:text-black
                transition
                "
              >
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={18}
                  height={18}
                />

                <span>LinkedIn</span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/chandu-0007"
                target="_blank"
                className="
                flex items-center gap-2
                hover:text-black
                transition
                "
              >
                <Image
                  src="/github.png"
                  alt="github"
                  width={18}
                  height={18}
                />

                <span>GitHub</span>
              </a>

              {/* TWITTER */}
              <a
                href="https://x.com"
                target="_blank"
                className="
                flex items-center gap-2
                hover:text-black
                transition
                "
              >
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={18}
                  height={18}
                />

                <span>X (Twitter)</span>
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
          mt-24
          md:mt-36
          "
        >

          <div
            className="
            max-w-4xl
            text-3xl
            leading-tight
            sm:text-5xl
            md:text-6xl
            font-semibold
            tracking-tight
            text-neutral-900
            space-y-2
            "
          >

            <p>
              I build end-to-end applications
            </p>

            <p>
              that replace manual business
            </p>

            <p>
              workflows with scalable digital processes.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}