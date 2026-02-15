import { motion } from "framer-motion";
import "../App.css";
import CollapsibleSection from "./CollapsibleSection";

const achievements = [
  {
    text: (
      <>
        Cleared Round 1 and Round 2 of <strong>TCS CodeVita 2025</strong>.
      </>
    ),
    link: "",
    linkText: "",
  },
  {
    text: (
      <>
        Secured a global rank of <strong>1717</strong> in <strong>TCS CodeVita 2024</strong>.
      </>
    ),
    link: "https://drive.google.com/file/d/1k4csPH7tAky5R-n9him1syOonGwaPdW_/view?usp=drive_link",
    linkText: "View Certificate",
  },
  {
    text: (
      <>
        LeetCode rating <strong>1,750+</strong> (Top 9%), solved <strong>900+</strong> DSA problems.
      </>
    ),
    link: "https://leetcode.com/u/aryankesharwani04",
    linkText: "LeetCode Profile",
  },
  {
    text: (
      <>
        5 stars in Problem Solving, C, Python on HackerRank.
      </>
    ),
    link: "https://www.hackerrank.com/profile/CS_2201640100088",
    linkText: "HackerRank Profile",
  },
];

const certificates = [
  {
    name: "Introduction to Cloud 101",
    issuer: "AWS Educate",
    link: "https://www.credly.com/badges/1d329dbb-7a15-4aee-8c2a-05617f72f8ef/public_url",
  },
  {
    name: "SQL (Advanced)",
    issuer: "Hackerrank",
    link: "https://www.hackerrank.com/certificates/ae5ec313e8c0",
  },
  {
    name: "Problem Solving (Intermediate)",
    issuer: "Hackerrank",
    link: "https://www.hackerrank.com/certificates/b3a60372930c",
  },
  {
    name: "ReactJS, JavaScript",
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/drive/folders/1vG93-t_3V3MULquROc_tWz4BlnHWssMF?usp=drive_link",
  },
  {
    name: "DevOps",
    issuer: "One Roadmap",
    link: "https://drive.google.com/file/d/1UT05IXuZJOnpmtyMOXN-rEeIJoyJF2d7/view?usp=drive_link",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function Achievement() {
  return (
    <CollapsibleSection title="Achievements">
      <ul className="space-y-3 mb-6">
        {achievements.map((item, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 text-[var(--text-200)] text-sm leading-relaxed"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="mt-1 text-[var(--primary-300)] text-base flex-shrink-0">
              <i className="ri-trophy-line"></i>
            </span>
            <span>
              {item.text}{" "}
              {item.link && item.linkText && (
                <a
                  href={item.link}
                  className="achievement-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkText} →
                </a>
              )}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="section-divider" />

      <h1 className="section-heading mt-4">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certificates.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="box flex flex-col gap-1 !mb-0 cursor-pointer group"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-[var(--text-100)] group-hover:text-[var(--primary-300)] transition-colors">
              {cert.name}
            </span>
            <span className="text-xs text-[var(--text-200)] opacity-70 flex items-center gap-1">
              {cert.issuer}
              <i className="ri-arrow-right-up-line text-[0.7rem] opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </span>
          </motion.a>
        ))}
      </div>
    </CollapsibleSection>
  );
}

export default Achievement;
