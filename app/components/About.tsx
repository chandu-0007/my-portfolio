import Image from "next/image";
import {motion} from "framer-motion"
export function About() {
    return (
        <section className="bg-cyan-50  py-24 text-black">

            <div className="text-3xl text-gray-700  md:pl-80 md:pr-20 md:ml-80 font-medium tracking-tight leading-tight overflow-hidden space-y-3  ">
                <p>
                    Full-stack developer focused on building scalable web</p>
                <p>applications, real-time systems and backend architectures</p>
                <p>using React.js, Next.js, Node.js and PostgreSQL.</p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Based in India. Open to remote and relocation.
                </p>
                <div className="flex flex-wrap  font-sans text-3xl gap-6 pt-2 text-gray-700">

                    <a
                        href="chandrasekharnaidukadari@gmail.com"
                        className="flex items-center gap-2 hover:text-black transition"
                    >
                        <Image
                            src="/email.png"
                            alt="email"
                            width={20}
                            height={20}
                        />
                        Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/chandra-sekhar-145a81308"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-black transition"
                    >
                        <Image
                            src="/linkedin.png"
                            alt="linkedin"
                            width={20}
                            height={20}
                        />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/chandu-0007"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-black transition"
                    >
                        <Image
                            src="/github.png"
                            alt="github"
                            width={20}
                            height={20}
                        />
                        GitHub
                    </a>

                    <a
                        href="https://x.com"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-black transition"
                    >
                        <Image
                            src="/twitter.png"
                            alt="twitter"
                            width={18}
                            height={18}
                        />
                        X (Twitter)
                    </a>
                </div>
            </div>
            <motion.div 
             whileInView ={{ x : 40 }} 
             animate  = { {x : 0 }} 
             transition={{ duration : 0.89  }}
            className="pt-20 w-250 pl-20 text-5xl font-semibold font-san space-y-3 text-neutral-900">
                <p> I build end to end applications that </p>
                <p>replace manual business workflows </p>
                 <p>with scalable digital processes.
                </p>
            </motion.div>
        </section>
    );
}