import { motion } from "framer-motion";
import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

const experiences = [
    {
        company: "DeltaX",
        role: "Associate Product Engineer",
        period: "Jan 2026 – Present",
        links: [],
        bullets: [
            <>Contributing to <strong>.NET Core</strong> application development using <strong>C#, Vue.js, Bootstrap, and MSSQL</strong> in a live product engineering environment.</>,
            <>Build and maintain <strong>REST APIs</strong> and <strong>MSSQL</strong> database logic, applying clean coding and testing practices to ship scalable, maintainable features.</>,
            <>Collaborate using <strong>Git and Bitbucket</strong> in an agile team workflow, participating in debugging, code review, and feature delivery cycles.</>,
        ],
    },
    {
        company: "Infosys Springboard",
        role: "Python Developer Intern",
        period: "Nov 2025 – Jan 2026",
        links: [
            { label: "Certificate", url: "https://drive.google.com/file/d/1XEohO_kfhmBvFKAxmk41sXZoQaUVYQil/view" },
        ],
        bullets: [
            <>Led end-to-end development of <strong>QuizGen</strong>, owning system architecture, technical planning, and task distribution as team lead.</>,
            <>Designed and integrated <strong>RESTful Django APIs with PostgreSQL and React.js</strong>, implementing authentication, profile management, and AI-powered quiz generation via the <strong>Gemini API</strong>.</>,
            <>Improved performance and UX through <strong>client-side caching</strong> and optimized state management, cutting load times.</>,
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
                                {exp.links.length > 0 && (
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
                                )}
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