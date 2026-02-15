import { motion } from "framer-motion";
import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "C++", "JavaScript", "Python", "Java (Basics)", "SQL"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "REST APIs", "Tailwind CSS", "Puppeteer"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Linux (Ubuntu)", "Docker", "Git", "GitHub", "Bitbucket", "Jenkins"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Object-Oriented Design"],
  },
];

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.03 * i,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function Skill() {
  let globalIndex = 0;

  return (
    <CollapsibleSection title="Skills">
      <div className="flex flex-col gap-5">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-200)] mb-3">
              {category.title}
            </h3>
            <div className="skills flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const i = globalIndex++;
                return (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={tagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}

export default Skill;
