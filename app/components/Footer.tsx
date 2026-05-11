import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-cyan-50 pb-10 pt-20 text-black">

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* TOP */}
        <div className="border-t border-gray-300 pt-8">

          <div
            className="
            flex
            flex-col
            md:flex-row
            items-start
            md:items-center
            justify-between
            gap-6
            "
          >

            {/* LEFT */}
            <div>

              <h3
                className="
                text-xl
                md:text-2xl
                font-medium
                tracking-tight
                "
              >
                Chandra Sekhar
              </h3>

              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Full Stack Developer building scalable web applications.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-5 text-gray-700">

              <a
                href="mailto:chandrasekharnaidukadari@gmail.com"
                className="
                hover:text-black
                hover:-translate-y-1
                transition
                "
              >
                <HiOutlineMail size={22} />
              </a>

              <a
                href="https://github.com/chandu-0007"
                target="_blank"
                className="
                hover:text-black
                hover:-translate-y-1
                transition
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/chandra-sekhar-145a81308"
                target="_blank"
                className="
                hover:text-black
                hover:-translate-y-1
                transition
                "
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
          mt-10
          flex
          flex-col
          md:flex-row
          items-start
          md:items-center
          justify-between
          gap-4
          text-sm
          text-gray-500
          "
        >

          <p>
            © 2026 Chandra Sekhar. All rights reserved.
          </p>

          <p>
            Designed & developed with Next.js + Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}