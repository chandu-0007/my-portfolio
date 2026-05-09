import Image from "next/image";

const projects = [
  {
    title: "Real-Time Chat Application",

    description:
      "Built a scalable real-time communication platform supporting room creation, joining and instant messaging using WebSockets and Socket.io.",

    points: [
      "Implemented real-time bi-directional communication using Socket.io for instant messaging.",
      "Integrated PostgreSQL for efficient room and user data management.",
      "Implemented concurrent user handling and room-based broadcasting."
    ],

    stack:
      "Next.js • TypeScript • Node.js • Express.js • Socket.io • Prisma • PostgreSQL",

    image: "/chatapp.png",

    github: "https://github.com/chandu-0007/Chat_Application",

    live: "https://chat-application-taupe-omega.vercel.app/",
  },

  {
    title: "Second Brainly",

    description:
      "Developed a centralized productivity platform to organize YouTube links, X posts and PDFs in a single dashboard.",

    points: [
      "Implemented secure JWT authentication and protected routes.",
      "Built complete CRUD functionality with validation and error handling.",
      "Designed REST APIs for scalable frontend-backend communication.",
    ],

    stack:
      "React.js • Node.js • Express.js • MongoDB • JWT • Tailwind CSS",

    image: "/brainly.png",

    github: "https://github.com/chandu-0007/Second-Brainly",

    live: "https://second-brainly-five.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="bg-cyan-50 py-24 text-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* HEADING */}
        <div className="max-w-2xl">
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A collection of full-stack applications focused on scalability,
            realtime systems and clean user experiences.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="mt-24 space-y-32">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              grid
              md:grid-cols-2
              items-start
              "
            >

              {/* LEFT IMAGE */}
              <div>
                <a
                  href={project.live}
                  target="_blank"
                  className="group block overflow-hidden"
                >
                  <div
                    className="
                    relative
                    w-full 
                    flex  justify-center items-center 
                    h-60
                    md:h-85
                    "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                      fill
                      transition
                      rounded-2xl 
                      duration-500 
                      group-hover:scale-[1.02]
                      "
                    />
                  </div>
                </a>
              </div>

              {/* RIGHT TIMELINE */}
            {/* RIGHT TIMELINE */}
<div className="relative pl-8">

  {/* TIMELINE LINE */}
  <div
    className="
    absolute
    left-0
    top-0
    bottom-0
    w-[1px]
    bg-gray-300
    "
  />

  {/* MOVING DOT */}
  {/* <div
    className="
    sticky
    top-24
    z-10
    w-4
    h-4
    rounded-full
    bg-black
    translate-x-[-7.5px]
    "
  /> */}

  {/* CONTENT */}
  <div className="pb-10">

    <h3
      className="
      text-2xl
      md:text-3xl
      font-medium
      tracking-tight
      "
    >
      {project.title}
    </h3>

    <p className="mt-5 text-gray-700 leading-relaxed">
      {project.description}
    </p>

    {/* POINTS */}
    <ul className="mt-8 space-y-4">

      {project.points.map((point, idx) => (
        <li
          key={idx}
          className="
          flex
          gap-3
          text-gray-700
          leading-relaxed
          "
        >

          <span
            className="
            mt-2
            w-1.5
            h-1.5
            rounded-full
            bg-gray-500
            shrink-0
            "
          />

          <span>{point}</span>

        </li>
      ))}

    </ul>

    {/* STACK */}
    <p className="mt-8 text-sm text-gray-500">
      {project.stack}
    </p>

    {/* LINKS */}
    <div className="flex gap-6 mt-8">

      <a
        href={project.live}
        target="_blank"
        className="
        hover:translate-x-1
        transition
        "
      >
        Live Site →
      </a>

      <a
        href={project.github}
        target="_blank"
        className="
        text-gray-600
        hover:text-black
        transition
        "
      >
        GitHub
      </a>

    </div>

  </div>

</div>
</div>
          ))}

        </div>

      </div>
    </section>
  );
}