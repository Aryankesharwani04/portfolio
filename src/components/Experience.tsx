import { motion } from "framer-motion";
import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

const experiences = [
    {
        company: "Infosys",
        role: "Python Developer Intern",
        period: "Nov 2025 – Jan 2026",
        links: [
            { label: "Github", url: "https://github.com/Aryankesharwani04/QuizGen" },
            { label: "Live", url: "https://quizgen-test.vercel.app/" },
        ],
        bullets: [
            <>Led end-to-end development of <strong>QuizGen</strong>, designing system architecture and coordinating task distribution as team lead.</>,
            <>Designed and integrated <strong>RESTful Django APIs with PostgreSQL and React.js</strong>, implementing secure authentication, profile management, and AI-driven quiz generation using <strong>Gemini API</strong>.</>,
            <>Enhanced performance and UX through <strong>client-side caching</strong>, optimized state management, and consistent UI design.</>,
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

function Experience() {
    return (
        <CollapsibleSection title="Work Experience">
            <div className="flex flex-col">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.company}
                        className="box"
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                            <div>
                                <h2 className="text-lg font-bold text-[var(--text-100)]">
                                    {exp.company}{" "}
                                    <span className="text-sm font-medium text-[var(--primary-300)]">
                                        ({exp.role})
                                    </span>
                                </h2>
                                <div className="flex items-center gap-3 mt-1">
                                    {exp.links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-title !text-sm"
                                        >
                                            {link.label}
                                            <i className="ri-arrow-right-up-line"></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <span className="edu-badge self-start sm:self-auto">{exp.period}</span>
                        </div>
                        <ul className="list-disc text-[var(--text-200)] pl-4 text-justify text-sm leading-relaxed space-y-1.5">
                            {exp.bullets.map((bullet, j) => (
                                <li key={j}>{bullet}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </CollapsibleSection>
    );
}

export default Experience;
