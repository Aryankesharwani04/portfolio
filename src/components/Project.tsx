import { motion } from "framer-motion";
import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

interface ProjectData {
  name: string;
  github?: string;
  live?: string;
  tech?: string;
  bullets: React.ReactNode[];
}

const projects: ProjectData[] = [
  {
    name: "Eventio",
    github: "https://github.com/Aryankesharwani04/eventio",
    tech: "Node.js, Microservices, MongoDB, Redis, Docker",
    bullets: [
      <>Architected a horizontally scalable <strong>microservices backend</strong> (Auth, Booking, Seat, API Gateway) with inter-service communication over HTTP and TCP/IP protocols.</>,
      <>Replaced optimistic locking with <strong>Redis-based distributed seat locking</strong> to prevent double booking across 12 cluster workers under high concurrency.</>,
      <>Implemented ownership-safe atomic unlock using <strong>Redis Lua scripting</strong> to eliminate race conditions.</>,
      <>Achieved <strong>7,500+ RPS</strong> during stress testing using Node.js Cluster and OS-level load balancing, with consistent low latency.</>,
    ],
  },
  {
    name: "Opsentra",
    github: "https://github.com/Aryankesharwani04/opsentra",
    tech: "Node.js, Express, MongoDB, Redis, AWS CloudWatch, React",
    bullets: [
      <>Engineered Opsentra, a centralized observability platform that collects logs from <strong>EC2 instances, Docker containers, and Linux services</strong>.</>,
      <>Designed an automated log collection workflow: <strong>Opsentra Agent → AWS CloudWatch → Opsentra Backend → Dashboard</strong> enabling centralized log monitoring.</>,
      <>Implemented backend workers using <strong>Node.js, Redis queues, and MongoDB</strong> to fetch, process, and store CloudWatch logs from distributed infrastructure.</>,
      <>Built a <strong>React dashboard</strong> to visualize logs in real time with search, filtering by server, and log-level categorization (INFO/WARN/ERROR) for easier monitoring across thousands of log entries.</>,
    ],
  },
  {
    name: "JOURNEE",
    github: "https://github.com/Aryankesharwani04/Journee",
    live: "https://journee-gilt.vercel.app",
    tech: "MongoDB, Express.js, React.js, Cloudinary",
    bullets: [
      <>Designed and developed a full-stack travel booking website UI using <strong>React.js and Express.js</strong>.</>,
      <>Integrated <strong>Cloudinary CDN</strong> for efficient image handling, reducing media load times and increasing performance.</>,
      <>Containerized both frontend and backend using <strong>Docker</strong> for consistent development environments.</>,
    ],
  },
  {
    name: "BeUnique",
    bullets: [
      <>Engineered a full-stack web application for automating username availability checks across multiple platforms, improving user experience and efficiency.</>,
      <>Developed a React-based frontend with optimized search functionality using debouncing techniques to minimize redundant API requests and improve performance.</>,
      <>Designed and implemented scalable RESTful APIs to ensure high availability and seamless data retrieval.</>,
    ],
  },
  {
    name: "VideoFlix",
    github: "https://github.com/Aryankesharwani04/javascriptBackend/tree/main/VideoStreaming",
    bullets: [
      <>Developed a backend system for a scalable video streaming application, implementing video upload, storage, and streaming functionalities.</>,
      <>Integrated user authentication and authorization mechanisms, ensuring secure access and role-based content control.</>,
      <>Implemented adaptive bitrate streaming for enhanced playback experience based on network conditions.</>,
    ],
  },
  {
    name: "Attendance Scraping",
    github: "https://github.com/Aryankesharwani04/WebScrapping/tree/main/attendanceGetter",
    bullets: [
      <>Designed and deployed a web scraping tool using Node.js and Puppeteer to automate retrieval of attendance data from the college ERP portal.</>,
      <>Implemented automated login functionality to securely handle user authentication and session management.</>,
      <>Extracted and parsed dynamic HTML content to fetch lecture attendance records, transforming raw data into structured insights.</>,
    ],
  },
  {
    name: "Chess Game",
    github: "https://github.com/Aryankesharwani04/javascriptBackend/tree/main/CHESS",
    bullets: [
      <>Developed a real-time multiplayer chess game using Express.js and Socket.io, ensuring seamless bidirectional communication between players.</>,
      <>Implemented a comprehensive chess logic engine using Chess.js, handling game state management and move validation.</>,
      <>Designed a dynamic user interface with EJS, rendering real-time game updates and interactions based on backend computations.</>,
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function Project() {
  return (
    <CollapsibleSection title="Projects">
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="box"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
              <span className="text-lg font-bold bg-gradient-to-r from-[var(--accent-200)] to-[var(--primary-300)] bg-clip-text text-transparent">
                {project.name}
              </span>
              {project.github && (
                <a
                  href={project.github}
                  className="project-title !text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  className="project-title !text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              )}
            </div>
            {project.tech && (
              <p className="text-xs text-[var(--primary-200)] italic mb-2">{project.tech}</p>
            )}
            <ul className="list-disc text-[var(--text-200)] pl-4 text-justify text-sm leading-relaxed space-y-1.5">
              {project.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </CollapsibleSection>
  );
}

export default Project;
