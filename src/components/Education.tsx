import { motion } from "framer-motion";
import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

const educationData = [
  {
    institution: "Pranveer Singh Institute of Technology, Kanpur",
    degree: "Bachelor of Technology, Computer Science Engineering",
    date: "2022 – 2026",
    score: "CGPA: 8.51/10 (Till 6th sem)",
  },
  {
    institution: "Maharishi Patanjali Vidya Mandir",
    degree: "Intermediate",
    date: "April 2020 – March 2021",
    score: "Percentage: 85",
  },
  {
    institution: "JMG Sr. Secondary School",
    degree: "High School",
    date: "April 2018 – March 2019",
    score: "Percentage: 92",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function Education() {
  return (
    <CollapsibleSection title="Education">
      <div className="edu-timeline">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            className="box flex flex-col sm:flex-row sm:justify-between gap-2"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="edu__name">
              <h2 className="text-base font-semibold text-[var(--text-100)]">
                {edu.institution}
              </h2>
              <h3 className="text-sm text-[var(--text-200)] opacity-80">
                {edu.degree}
              </h3>
            </div>
            <div className="edu__date flex flex-col items-start sm:items-end gap-1">
              <span className="edu-badge">{edu.date}</span>
              <span className="text-xs text-[var(--primary-300)] font-medium">
                {edu.score}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </CollapsibleSection>
  );
}

export default Education;
